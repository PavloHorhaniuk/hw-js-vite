// delayedPromise(value, delay) -> Promise, що резолвиться value після delay мс
const delayedPromise = (value, delay) =>
    new Promise(resolve => setTimeout(() => resolve(value), delay));

const table = document.getElementById('t1-table');
const logEl = document.getElementById('t1-log');

let rows = [
    { value: 'A', delay: 500 },
    { value: 'B', delay: 1200 },
    { value: 'C', delay: 800 },
    { value: 'D', delay: 2000 },
    { value: 'E', delay: 1500 },
];

function renderTable() {
    table.innerHTML = `
    <thead><tr><th>#</th><th>Значення</th><th>Затримка, мс</th></tr></thead>
    <tbody>
      ${rows.map((r, i) => `<tr><td>${i + 1}</td><td>${r.value}</td><td>${r.delay}</td></tr>`).join('')}
    </tbody>
  `;
}
function addLog(text, ok = false) {
    const t = new Date().toLocaleTimeString();
    const div = document.createElement('div');
    div.textContent = `[${t}] ${text}`;
    if (ok) div.classList.add('success');
    logEl.prepend(div);
}

function runAll() {
    addLog('Старт Promise.all…');
    const startedAt = performance.now();

    const promises = rows.map(r =>
        delayedPromise(r.value, r.delay).then(v => ({ value: v, delay: r.delay }))
    );

    Promise.all(promises).then(results => {
        const took = Math.round(performance.now() - startedAt);
        console.log('Promise.all results:', results);
        addLog(`Готово! Promise.all повернув ${results.length} значень: [${results.map(r => r.value).join(', ')}], загальний час ≈ ${took}мс`, true);
    });
}

function randomize() {
    rows = rows.map(r => ({ value: r.value, delay: 400 + Math.floor(Math.random() * 1800) }));
    renderTable();
    addLog('Затримки перегенеровано випадково.');
}
function reset() {
    rows = [
        { value: 'A', delay: 500 },
        { value: 'B', delay: 1200 },
        { value: 'C', delay: 800 },
        { value: 'D', delay: 2000 },
        { value: 'E', delay: 1500 },
    ];
    renderTable();
    logEl.innerHTML = '';
    addLog('Початкові дані відновлено.');
}

document.getElementById('t1-run').addEventListener('click', runAll);
document.getElementById('t1-randomize').addEventListener('click', randomize);
document.getElementById('t1-reset').addEventListener('click', reset);

renderTable();
addLog('Готово. Натисни «Запустити Promise.all».');