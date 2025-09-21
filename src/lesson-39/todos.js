const API = 'https://jsonplaceholder.typicode.com';
const statusEl = document.getElementById('status');
const tableEl = document.getElementById('table');
const loadBtn = document.getElementById('load');
const userIdEl = document.getElementById('userId');
const completedEl = document.getElementById('completed');
const limitEl = document.getElementById('limit');

function setStatus(text, type = '') {
    statusEl.textContent = text || '';
    statusEl.className = 'msg ' + type;
}

function render(list) {
    if (!list.length) {
        tableEl.innerHTML = '<tbody><tr><td>Пусто.</td></tr></tbody>';
        return;
    }
    tableEl.innerHTML = `
    <thead>
      <tr><th>#</th><th>userId</th><th>title</th><th>status</th></tr>
    </thead>
    <tbody>
      ${list.map(t => `
        <tr>
          <td>${t.id}</td>
          <td>${t.userId}</td>
          <td>${t.title}</td>
          <td>${t.completed ? '<span class="badge ok">done</span>' : '<span class="badge warn">pending</span>'}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

function parseQuery() {
    const p = new URLSearchParams(location.search);
    const uid = p.get('userId');
    if (uid) userIdEl.value = Number(uid);
}

async function loadTodos() {
    try {
        setStatus('Завантаження…');
        const q = new URLSearchParams();
        const uid = Number(userIdEl.value);
        if (uid) q.set('userId', String(uid));
        const comp = completedEl.value;
        if (comp !== '') q.set('completed', comp);
        const limit = Number(limitEl.value);
        if (limit) q.set('_limit', String(limit));

        const url = `${API}/todos${q.toString() ? `?${q.toString()}` : ''}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        render(data);
        setStatus(`Готово: ${data.length} елементів.`, 'ok');
    } catch (err) {
        console.error(err);
        setStatus('Помилка завантаження.', 'error');
    }
}

loadBtn.addEventListener('click', loadTodos);

// init: підхопимо userId з адресного рядка (з посилання сторінки користувачів)
parseQuery();
loadTodos();