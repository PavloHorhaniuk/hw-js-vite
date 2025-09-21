(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const input = document.getElementById('t4-seconds');
        const startTO = document.getElementById('t4-start-to');
        const startIV = document.getElementById('t4-start-iv');
        const cancel = document.getElementById('t4-cancel');
        const status = document.getElementById('t4-status');

        let timeoutId = null; let intervalId = null; let left = 0;

        function parseSeconds() {
            const n = Number(input.value);
            if (!Number.isFinite(n) || n <= 0) return null;
            return Math.min(3600, Math.floor(n));
        }
        function setBusy(busy) {
            startTO.disabled = busy; startIV.disabled = busy; cancel.disabled = !busy; input.disabled = busy;
        }
        function cleanup() {
            if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
            if (intervalId) { clearInterval(intervalId); intervalId = null; }
            setBusy(false);
        }
        function startWithTimeout() {
            if (timeoutId || intervalId) return;
            const sec = parseSeconds();
            if (sec == null) { status.textContent = 'Помилка: введи додатне число секунд.'; status.className = 'hint error'; return; }
            setBusy(true); status.className = 'hint';
            status.textContent = `Очікую ${sec} с… (setTimeout)`;
            timeoutId = setTimeout(() => {
                status.textContent = `Готово! Минуло ${sec} секунд.`; status.className = 'hint success';
                cleanup();
                alert(`Повідомлення: минуло ${sec} секунд.`);
            }, sec * 1000);
        }
        function startWithInterval() {
            if (timeoutId || intervalId) return;
            const sec = parseSeconds();
            if (sec == null) { status.textContent = 'Помилка: введи додатне число секунд.'; status.className = 'hint error'; return; }
            left = sec; setBusy(true); status.className = 'hint';
            status.textContent = `Залишилось: ${left} с (setInterval)`;
            intervalId = setInterval(() => {
                left--; status.textContent = `Залишилось: ${left} с (setInterval)`;
                if (left <= 0) {
                    status.textContent = `Готово! Минуло ${sec} секунд.`; status.className = 'hint success';
                    alert(`Повідомлення: минуло ${sec} секунд.`);
                    cleanup();
                }
            }, 1000);
        }
        function cancelAll() {
            if (!timeoutId && !intervalId) return;
            cleanup(); status.textContent = 'Скасовано користувачем.'; status.className = 'hint';
        }

        startTO.addEventListener('click', startWithTimeout);
        startIV.addEventListener('click', startWithInterval);
        cancel.addEventListener('click', cancelAll);
    });
})();
