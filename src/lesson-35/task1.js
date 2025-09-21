// Завдання 1 — 1 година ↓ щохвилини; попередження на 30 хв
(function () {
    const timeEl = document.getElementById('t1-time');
    const noteEl = document.getElementById('t1-note');
    const logEl = document.getElementById('t1-log');
    const startBtn = document.getElementById('t1-start');
    const pauseBtn = document.getElementById('t1-pause');
    const resetBtn = document.getElementById('t1-reset');

    const START_MINUTES = 60;
    let minutesLeft = START_MINUTES;
    let intervalId = null;
    let warned = false;

    function fmt(mins) {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }
    function setDisplay() {
        timeEl.textContent = fmt(minutesLeft);
    }
    function log(text) {
        const t = new Date().toLocaleTimeString();
        logEl.insertAdjacentHTML('afterbegin', `<div>[${t}] ${text}</div>`);
    }

    function tickMinute() {
        minutesLeft--;
        setDisplay();
        if (!warned && minutesLeft === 30) {
            warned = true;
            noteEl.textContent = 'Залишилось менше половини часу!';
            log('Попередження: залишилось менше половини часу.');
        }
        if (minutesLeft <= 0) {
            stop();
            noteEl.textContent = 'Час вийшов.';
            log('Таймер завершено.');
        }
    }

    function start() {
        if (intervalId) return;
        intervalId = setInterval(tickMinute, 60_000); // кожну хвилину
        startBtn.disabled = true; pauseBtn.disabled = false;
        log('Старт таймера (крок 1 хв).');
    }

    function stop() {
        if (!intervalId) return;
        clearInterval(intervalId);
        intervalId = null;
        startBtn.disabled = false; pauseBtn.disabled = true;
        log('Пауза/зупинка таймера.');
    }

    function reset() {
        stop();
        minutesLeft = START_MINUTES;
        warned = false;
        noteEl.textContent = '';
        setDisplay();
        log('Скидання таймера до 01:00.');
    }

    // початковий стан
    setDisplay();
    log('Готово. Натисни «Старт».');

    startBtn.addEventListener('click', start);
    pauseBtn.addEventListener('click', stop);
    resetBtn.addEventListener('click', reset);
})();
