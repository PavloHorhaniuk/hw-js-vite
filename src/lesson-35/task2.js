// Завдання 2 — 30 секунд ↓ по мс; анімація на 10с; дія на 0с
(function () {
    const timeEl = document.getElementById('t2-time');
    const noteEl = document.getElementById('t2-note');
    const logEl = document.getElementById('t2-log');
    const startBtn = document.getElementById('t2-start');
    const pauseBtn = document.getElementById('t2-pause');
    const resetBtn = document.getElementById('t2-reset');

    const START_MS = 30_000;
    let intervalId = null;
    let endTs = 0;         // performance.now() + leftMs
    let leftMs = START_MS; // залишок для паузи/резюме
    let warned = false;

    function fmt(ms) {
        const total = Math.max(0, Math.floor(ms));
        const s = Math.floor(total / 1000);
        const msec = total % 1000;
        const mm = String(Math.floor(s / 60)).padStart(2, '0');
        const ss = String(s % 60).padStart(2, '0');
        const mmm = String(msec).padStart(3, '0');
        return `${mm}:${ss}.${mmm}`;
    }
    function setDisplay(rem) {
        timeEl.textContent = fmt(rem);
    }
    function log(text) {
        const t = new Date().toLocaleTimeString();
        logEl.insertAdjacentHTML('afterbegin', `<div>[${t}] ${text}</div>`);
    }

    function tick() {
        const now = performance.now();
        const rem = Math.max(0, endTs - now);
        setDisplay(rem);

        // Анімація/попередження при ≤10 c
        if (!warned && rem <= 10_000) {
            warned = true;
            timeEl.classList.add('pulse');
            noteEl.textContent = 'Менше 10 секунд! ⏳';
            log('Запущено анімацію попередження (≤10с).');
        }

        if (rem <= 0) {
            stop(true);
            // Дія на 0с: зробити «Старт» знову активним (і візуально “підштовхнути”):
            startBtn.disabled = false;
            startBtn.classList.add('shake');
            setTimeout(() => startBtn.classList.remove('shake'), 800);
            noteEl.textContent = 'Готово! Час вийшов.';
            log('Таймер завершено. Кнопку «Старт» знову активовано.');
        }
    }

    function start() {
        if (intervalId) return;
        // розрахувати кінець з урахуванням паузи:
        endTs = performance.now() + leftMs;
        intervalId = setInterval(tick, 1); // “кожну мс” (фактичний крок залежить від середовища)
        startBtn.disabled = true; pauseBtn.disabled = false;
        log('Старт таймера (крок 1мс).');
    }

    function stop(final = false) {
        if (!intervalId) return;
        clearInterval(intervalId);
        intervalId = null;
        // оновити залишок, щоб можна було резюмити:
        leftMs = Math.max(0, endTs - performance.now());
        if (!final) {
            startBtn.disabled = false; pauseBtn.disabled = true;
            log('Пауза таймера.');
        } else {
            pauseBtn.disabled = true;
            leftMs = 0;
        }
    }

    function reset() {
        if (intervalId) stop();
        leftMs = START_MS; warned = false;
        timeEl.classList.remove('pulse');
        noteEl.textContent = '';
        setDisplay(leftMs);
        startBtn.disabled = false; pauseBtn.disabled = true;
        log('Скидання таймера до 00:30.000.');
    }

    // початковий стан
    setDisplay(leftMs);
    log('Готово. Натисни «Старт».');

    startBtn.addEventListener('click', start);
    pauseBtn.addEventListener('click', () => stop(false));
    resetBtn.addEventListener('click', reset);
})();