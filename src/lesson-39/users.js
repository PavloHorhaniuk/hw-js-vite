const API = 'https://jsonplaceholder.typicode.com';
const statusEl = document.getElementById('status');
const tableEl = document.getElementById('table');
const searchEl = document.getElementById('search');
const loadBtn = document.getElementById('load');

let users = [];

function setStatus(text, type = '') {
    statusEl.textContent = text || '';
    statusEl.className = 'msg ' + type;
}

function render(list) {
    if (!list.length) {
        tableEl.innerHTML = '<tbody><tr><td>Нічого не знайдено.</td></tr></tbody>';
        return;
    }
    tableEl.innerHTML = `
    <thead>
      <tr><th>Імʼя</th><th>Username</th><th>Email</th><th>Місто</th><th>Компанія</th><th></th></tr>
    </thead>
    <tbody>
      ${list.map(u => `
        <tr>
          <td>${u.name}</td>
          <td>${u.username}</td>
          <td>${u.email}</td>
          <td>${u.address?.city ?? ''}</td>
          <td>${u.company?.name ?? ''}</td>
          <td><a class="badge" href="./todos.html?userId=${u.id}">Todos →</a></td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

function applyFilter() {
    const q = (searchEl.value || '').toLowerCase().trim();
    if (!q) { render(users); return; }
    const filtered = users.filter(u =>
        [u.name, u.username, u.email].some(x => String(x).toLowerCase().includes(q))
    );
    render(filtered);
}

async function loadUsers() {
    try {
        setStatus('Завантаження…');
        const res = await fetch(`${API}/users`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        users = await res.json();
        render(users);
        setStatus(`Готово: отримано ${users.length} користувачів.`, 'ok');
    } catch (err) {
        console.error(err);
        setStatus('Помилка завантаження користувачів.', 'error');
    }
}

searchEl.addEventListener('input', applyFilter);
loadBtn.addEventListener('click', loadUsers);

// автозавантаження
loadUsers();