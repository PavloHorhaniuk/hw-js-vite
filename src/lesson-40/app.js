// =========================
// 1) БАЗОВІ НАЛАШТУВАННЯ OMDb (BaseURL)
// =========================
const BASE_URL = 'https://www.omdbapi.com/'; // офіційний endpoint
let API_KEY = ''; // збережемо/прочитаємо з localStorage

// Елементи UI
const $ = s => document.querySelector(s);
const apiKeyEl = $('#api-key');
const saveKeyBtn = $('#save-key');
const keyStatus = $('#key-status');
const termEl = $('#term');
const typeEl = $('#type');
const countEl = $('#count');
const fetchBtn = $('#fetch-btn');
const statusEl = $('#status');
const urlEl = $('#request-url');
const listEl = $('#data-list');

// Завантажуємо ключ із localStorage, якщо є
(function initKey() {
    const saved = localStorage.getItem('omdb_api_key') || '';
    if (saved) {
        API_KEY = saved;
        apiKeyEl.value = saved;
        keyStatus.textContent = 'ключ збережено';
        keyStatus.className = 'status ok';
    } else {
        keyStatus.textContent = 'введи та збережи ключ';
        keyStatus.className = 'status warn';
    }
})();

// Зберігаємо ключ
saveKeyBtn.addEventListener('click', () => {
    const val = apiKeyEl.value.trim();
    if (!val) {
        keyStatus.textContent = 'ключ порожній 🙃';
        keyStatus.className = 'status error';
        return;
    }
    API_KEY = val;
    localStorage.setItem('omdb_api_key', API_KEY);
    keyStatus.textContent = 'ключ збережено';
    keyStatus.className = 'status ok';
});

// Допоміжні
function setStatus(text, type = '') {
    statusEl.textContent = text || '';
    statusEl.className = 'status ' + type;
}
function setUrlPreview(url) { urlEl.textContent = url; }
function escapeHtml(s) {
    return String(s)
        .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}
function posterFallback(src) {
    return (!src || src === 'N/A') ? '' : `<img class="poster" alt="poster" src="${escapeHtml(src)}">`;
}

// =========================
// 2) Формуємо запит (searchParams) — s=, type=, page=1
//    Інпут 1–10 — це скільки показати (обрізаємо перші N з Search[])
// =========================
function buildSearchUrl() {
    const params = new URLSearchParams();       // <= використання searchParams (вимога ДЗ)
    params.set('apikey', API_KEY);
    params.set('s', termEl.value.trim() || 'Batman');
    if (typeEl.value) params.set('type', typeEl.value);
    params.set('page', '1'); // OMDb повертає до 10 результатів на сторінку
    return `${BASE_URL}?${params.toString()}`;
}

// =========================
// 3) fetch() + 4) рендер у <ul id="data-list"></ul>
// =========================
async function fetchAndRender() {
    const n = Math.max(1, Math.min(10, Number(countEl.value) || 1));
    if (!API_KEY) {
        setStatus('Введи OMDb API key і натисни «Зберегти ключ».', 'error');
        return;
    }

    const url = buildSearchUrl();
    setUrlPreview(url);
    setStatus('Завантаження…');
    fetchBtn.disabled = true;
    listEl.innerHTML = '';

    try {
        const res = await fetch(url, { method: 'GET' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // OMDb іноді повертає Response:"False" зі статусом 200
        if (data.Response === 'False') {
            setStatus(`Помилка OMDb: ${data.Error || 'невідомо'}`, 'error');
            return;
        }

        const results = Array.isArray(data.Search) ? data.Search.slice(0, n) : [];
        if (!results.length) {
            setStatus('Порожньо. Спробуй інший пошуковий запит.', 'warn');
            return;
        }

        const html = results.map(item => `
      <li class="item">
        ${posterFallback(item.Poster)}
        <div>
          <div class="item-title">${escapeHtml(item.Title)}</div>
          <div class="item-sub">
            ${escapeHtml(item.Type)} · ${escapeHtml(item.Year)} ·
            imdbID: <a href="https://www.imdb.com/title/${escapeHtml(item.imdbID)}/" target="_blank" rel="noreferrer">${escapeHtml(item.imdbID)}</a>
          </div>
        </div>
      </li>
    `).join('');

        listEl.innerHTML = html;
        setStatus(`Готово: показано ${results.length} з ${data.totalResults || results.length}.`, 'ok');
    } catch (err) {
        console.error(err);
        setStatus('Помилка мережі або CORS. Перевір ключ і підключення.', 'error');
    } finally {
        fetchBtn.disabled = false;
    }
}

// Події
fetchBtn.addEventListener('click', fetchAndRender);
countEl.addEventListener('keydown', e => { if (e.key === 'Enter') fetchAndRender(); });
termEl.addEventListener('keydown', e => { if (e.key === 'Enter') fetchAndRender(); });

// Авто: якщо ключ збережений — одразу зробимо запит
if (API_KEY) fetchAndRender();
