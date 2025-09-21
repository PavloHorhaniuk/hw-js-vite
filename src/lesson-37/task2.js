let users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

// Повертаємо проміс без callback
const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(u =>
        u.name === userName ? { ...u, active: !u.active } : u
    );
    // Можна одразу resolve; для демонстрації асинхронності додамо мікрозатримку:
    return new Promise(resolve => setTimeout(() => resolve(updatedUsers), 0));
};

const logEl2 = document.getElementById('t2-log');
const table = document.getElementById('t2-table');
const select = document.getElementById('t2-select');

function addLog2(text) {
    const t = new Date().toLocaleTimeString();
    const div = document.createElement('div');
    div.textContent = `[${t}] ${text}`;
    logEl2.prepend(div);
}

function renderTable(list) {
    table.innerHTML = `
    <thead><tr><th>Імʼя</th><th>Активний</th></tr></thead>
    <tbody>
      ${list.map(u => `<tr><td>${u.name}</td><td>${u.active ? '✅' : '❌'}</td></tr>`).join('')}
    </tbody>
  `;
}

function renderSelect(list) {
    select.innerHTML = list.map(u => `<option value="${u.name}">${u.name}</option>`).join('');
}

const loggerTable = updatedUsers => {
    console.table(updatedUsers);
    addLog2('Оновлено список (див. також console.table).');
    users = updatedUsers;
    renderTable(users);
    renderSelect(users);
};

document.getElementById('t2-toggle').addEventListener('click', () => {
    const name = select.value;
    addLog2(`toggleUserState(users, "${name}")…`);
    toggleUserState(users, name).then(loggerTable);
});

document.getElementById('t2-reset').addEventListener('click', () => {
    users = [
        { name: 'Mango', active: true },
        { name: 'Poly', active: false },
        { name: 'Ajax', active: true },
        { name: 'Lux', active: false },
    ];
    renderTable(users); renderSelect(users);
    addLog2('Скинуто до початкових значень.');
});

// Кнопки з умови
document.getElementById('t2-demo-mango').addEventListener('click', () => {
    addLog2('toggleUserState(users, "Mango")…');
    toggleUserState(users, 'Mango').then(loggerTable);
});
document.getElementById('t2-demo-lux').addEventListener('click', () => {
    addLog2('toggleUserState(users, "Lux")…');
    toggleUserState(users, 'Lux').then(loggerTable);
});

// init
renderTable(users); renderSelect(users);
addLog2('Готово. Обери імʼя та натисни Toggle або використай демо-кнопки.');