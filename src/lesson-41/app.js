// ==============================
// НАЛАШТУВАННЯ (BaseURL + шлях)
// ==============================
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ENDPOINT = '/posts';

// JSONPlaceholder має ~100 постів — знадобиться як фолбек,
// але краще зчитати загальну кількість із заголовка 'X-Total-Count'.
const FALLBACK_TOTAL = 100;

// ==============================
// ЕЛЕМЕНТИ UI
// ==============================
const $ = s => document.querySelector(s);
const perPageEl = $('#per-page');
const pageEl = $('#page');
const fetchBtn = $('#fetch-btn');
const prevBtn = $('#prev');
const nextBtn = $('#next');
const urlEl = $('#request-url');
const statusEl = $('#status');
const listEl = $('#data-list');
const infoPage = document.querySelector('.posts-info .page');
const infoTotal = document.querySelector('.posts-info .number-of-pages');

// СТАН
let perPage = Number(perPageEl.value) || 4;  // N
let page = Number(pageEl.value) || 1;  // P
let total = FALLBACK_TOTAL;
let totalPages = Math.max(1, Math.ceil(total / perPage));

// ==============================
// ДОПОМІЖНІ
// ==============================
function setStatus(text, type = '') {
    statusEl.textContent = text || '';
    statusEl.className = 'status ' + type;
}
function escapeHtml(s) {
    return String(s)
        .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}
function buildUrl() {
    // 2) Формуємо рядок параметрів через URLSearchParams (вимога)
    const params = new URLSearchParams({ _limit: perPage, _page: page });
    const url = new URL(ENDPOINT, BASE_URL);
    url.search = params.toString();
    return url.toString();
}
function renderList(items) {
    if (!Array.isArray(items) || !items.length) {
        listEl.innerHTML = '<li>Порожньо.</li>';
        return;
    }
    listEl.innerHTML = items.map(p => `
    <li>
      <div class="item-title">#${p.id}. ${escapeHtml(p.title)}</div>
      <div class="item-sub">${escapeHtml(p.body)}</div>
    </li>
  `).join('');
}
function updateInfo() {
    infoPage.textContent = String(page);
    infoTotal.textContent = String(totalPages);
    pageEl.value = page;
    // Динамічний максимум для поля "номер сторінки"
    pageEl.max = String(totalPages);
    // Кнопки
    prevBtn.disabled = page <= 1;
    nextBtn.disabled = page >= totalPages;
    // Підгледіти URL
    urlEl.textContent = buildUrl();
}

// ==============================
// 3) ЗАПИТ + 4) РЕНДЕР
// ==============================
async function fetchAndRender() {
    // нормалізуємо введення
    perPage = Math.max(1, Math.min(10, Number(perPageEl.value) || 1)); // 1..10 (можеш розширити)
    page = Math.max(1, Number(pageEl.value) || 1);

    const url = buildUrl();
    setStatus('Завантаження…');
    fetchBtn.disabled = true; prevBtn.disabled = true; nextBtn.disabled = true;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        // Спробуємо прочитати загальну кількість з заголовка:
        const headerTotal = Number(res.headers.get('x-total-count'));
        total = Number.isFinite(headerTotal) && headerTotal > 0 ? headerTotal : FALLBACK_TOTAL;

        const data = await res.json();

        // Обчислити кількість сторінок з урахуванням перPage:
        totalPages = Math.max(1, Math.ceil(total / perPage));

        // Якщо номер сторінки завеликий — піджати і перезапитати:
        if (page > totalPages) {
            page = totalPages;
            pageEl.value = page;
            // повторний запит уже з валідним P
            return fetchAndRender();
        }

        renderList(data);
        setStatus(`Готово: ${data.length} елементів.`, 'ok');
    } catch (err) {
        console.error(err);
        setStatus('Помилка завантаження. Перевір мережу/ендпоінт.', 'error');
    } finally {
        updateInfo();
        fetchBtn.disabled = false;
    }
}

// ==============================
// ПОДІЇ
// ==============================
fetchBtn.addEventListener('click', fetchAndRender);

prevBtn.addEventListener('click', () => {
    if (page > 1) {
        page -= 1;
        pageEl.value = page;
        fetchAndRender();
    }
});

nextBtn.addEventListener('click', () => {
    if (page < totalPages) {
        page += 1;
        pageEl.value = page;
        fetchAndRender();
    }
});

// Enter в інпутах — теж старт
perPageEl.addEventListener('keydown', e => { if (e.key === 'Enter') fetchAndRender(); });
pageEl.addEventListener('keydown', e => { if (e.key === 'Enter') fetchAndRender(); });

// Автозапуск першої сторінки
fetchAndRender();