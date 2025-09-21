// delay(ms) -> Promise, що resolve(ms) через ms мс
const delay = ms => new Promise(resolve => setTimeout(() => resolve(ms), ms));

const logger = time => {
    console.log(`Resolved after ${time}ms`);
    addLog(`[ok] Resolved after ${time}ms`, true);
};

const logEl1 = document.getElementById('t1-log');
function addLog(text, ok = false) {
    const t = new Date().toLocaleTimeString();
    const line = document.createElement('div');
    line.textContent = `[${t}] ${text}`;
    if (ok) line.classList.add('success');
    logEl1.prepend(line);
}

document.getElementById('t1-run').addEventListener('click', () => {
    const ms = Math.max(0, Number(document.getElementById('t1-ms').value) || 0);
    addLog(`Запуск delay(${ms})…`);
    delay(ms).then(logger);
});

document.getElementById('t1-demo-2000').addEventListener('click', () => { addLog('delay(2000)…'); delay(2000).then(logger); });
document.getElementById('t1-demo-1000').addEventListener('click', () => { addLog('delay(1000)…'); delay(1000).then(logger); });
document.getElementById('t1-demo-1500').addEventListener('click', () => { addLog('delay(1500)…'); delay(1500).then(logger); });

// Автодемо
addLog('Готово. Обери значення та натисни кнопку.');