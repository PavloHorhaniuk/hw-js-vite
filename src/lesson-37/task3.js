const logEl3 = document.getElementById('t3-log');
function addLog3(text, ok = false) {
    const t = new Date().toLocaleTimeString();
    const div = document.createElement('div');
    div.textContent = `[${t}] ${text}`;
    if (ok) div.classList.add('success'); else if (/Error/i.test(text)) div.classList.add('error');
    logEl3.prepend(div);
}

const randomIntegerFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

// Повертаємо проміс: resolve({ id, time }) або reject(id)
const makeTransaction = transaction => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) resolve({ id: transaction.id, time: delay });
            else reject(transaction.id);
        }, delay);
    });
};

// Логери
const logSuccess = ({ id, time }) => {
    const msg = `Transaction ${id} processed in ${time}ms`;
    console.log(msg);
    addLog3(msg, true);
};
const logError = id => {
    const msg = `Error processing transaction ${id}. Please try again later.`;
    console.warn(msg);
    addLog3(msg, false);
};

// UI
document.getElementById('t3-send').addEventListener('click', () => {
    const id = Number(document.getElementById('t3-id').value) || 0;
    const amount = Number(document.getElementById('t3-amount').value) || 0;
    addLog3(`makeTransaction({ id: ${id}, amount: ${amount} })…`);
    makeTransaction({ id, amount }).then(logSuccess).catch(logError);
});

document.getElementById('t3-run-sample').addEventListener('click', () => {
    addLog3('Запуск набору прикладів (70,71,72,73)…');
    makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
    makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
    makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
    makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
});

// init
addLog3('Готово. Запусти приклади або створи свою транзакцію.');