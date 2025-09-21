// randomDelay(value) -> Promise, що резолвиться { value, delay } з випадковою затримкою 1000–5000мс
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomDelay = value => {
    const delay = randInt(1000, 5000);
    return new Promise(resolve => setTimeout(() => resolve({ value, delay }), delay));
};

const table2 = document.getElementById('t2-table');
const logEl2 = document.getElementById('t2-log');

// Підготуємо значення; затримки випадкові щоразу при запуску
let values = ['P1', 'P2', 'P3', 'P4', 'P5'];
let lastDelays = []; // для відображення після старту

function renderTable(delays = []) {
    table2.innerHTML = `
    <thead><tr><th>#</th><th>Значення</th><th>Остання затримка, мс</th></tr></thead>
    <tbody>
      ${values.map((v, i) => `<tr><td>${i + 1}</td><td>${v}</td><td>${delays[i] ?? '—'}</td></tr>`).join('')}
    </tbody>
  `;
}
function addLog2(text, ok = false) {
    const t = new Date().toLocaleTimeString();
    const div = document.createElement('div');
    div.textContent = `[${t}] ${text}`;
    if (ok) div.classList.add('success');
    logEl2.prepend(div);
}

function runRace() {
    addLog2('Старт Promise.race…');
    const promises = values.map(v => randomDelay(v));

    // Щоб показати згенеровані затримки в таблиці, підглянемо їх через Promise.allSettled копії:
    Promise.allSettled(values.map(v => randomDelay(v).then(r => r.delay)))
        .then(all => {
            lastDelays = all.map(x => x.status === 'fulfilled' ? x.value : '—');
            renderTable(lastDelays);
        });

    Promise.race(promises).then(({ value, delay }) => {
        console.log('Promise.race winner:', { value, delay });
        addLog2(`Найшвидший: ${value} (≈ ${delay}мс)`, true);
    });
}

function again() {
    // просто перезапустимо — затримки нові кожного разу
    runRace();
}
function reset() {
    values = ['P1', 'P2', 'P3', 'P4', 'P5'];
    lastDelays = [];
    renderTable(lastDelays);
    logEl2.innerHTML = '';
    addLog2('Початковий стан відновлено.');
}

document.getElementById('t2-run').addEventListener('click', runRace);
document.getElementById('t2-again').addEventListener('click', again);
document.getElementById('t2-reset').addEventListener('click', reset);

renderTable(lastDelays);
addLog2('Готово. Натисни «Запустити Promise.race».');