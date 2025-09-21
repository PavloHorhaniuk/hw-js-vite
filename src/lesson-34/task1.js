(function () {
    function appendLog(el, text) {
        const time = new Date().toLocaleTimeString();
        el.insertAdjacentHTML('afterbegin', `[${time}] ${text}<br/>`);
    }
    document.addEventListener('DOMContentLoaded', () => {
        const startBtn = document.getElementById('t1-start');
        const stopBtn = document.getElementById('t1-stop');
        const resetBtn = document.getElementById('t1-reset');
        const logEl = document.getElementById('t1-log');
        let count = 0; let intervalId = null;

        function start() {
            if (intervalId) return;
            startBtn.disabled = true; stopBtn.disabled = false;
            appendLog(logEl, 'Старт інтервалу…');
            intervalId = setInterval(() => {
                count++; appendLog(logEl, `Повідомлення №${count}`);
                if (count >= 5) {
                    clearInterval(intervalId); intervalId = null;
                    stopBtn.disabled = true; startBtn.disabled = false;
                    appendLog(logEl, 'Досягнуто 5 повідомлень. Інтервал зупинено.');
                }
            }, 1000);
        }

        function stop() {
            if (!intervalId) return;
            clearInterval(intervalId); intervalId = null;
            stopBtn.disabled = true; startBtn.disabled = false;
            appendLog(logEl, 'Інтервал зупинено вручну.');
        }

        function reset() {
            stop(); count = 0; logEl.innerHTML = '';
            appendLog(logEl, 'Скидання лічильника. Готово до старту.');
        }

        startBtn.addEventListener('click', start);
        stopBtn.addEventListener('click', stop);
        resetBtn.addEventListener('click', reset);

        appendLog(logEl, 'Готово. Натисни «Запустити».');
    });
})();