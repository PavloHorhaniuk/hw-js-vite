// Ініціалізація: читаємо інпут, ставимо мінімально допустиму дату (сьогодні + 1 день),
// валідовуємо введення, створюємо/оновлюємо CountdownTimer.

(function () {
    const input = document.getElementById('target-date');
    const msg = document.getElementById('msg');

    // Встановлюємо мінімум (сьогодні + 1 день) у формат для datetime-local (YYYY-MM-DDTHH:mm)
    function toLocalDatetimeValue(d) {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const hh = String(d.getHours()).padStart(2, '0');
        const mi = String(d.getMinutes()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
    }

    function minPlusOneDay() {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        // Округляємо до найближчої хвилини вниз, щоб інпут прийняв значення
        d.setSeconds(0, 0);
        return d;
    }

    const minDate = minPlusOneDay();
    input.min = toLocalDatetimeValue(minDate);

    // Ініціалізуємо таймер (без дати поки)
    let timer = new CountdownTimer({ selector: '#timer-1', targetDate: null });

    function showError(text) { msg.textContent = text; msg.className = 'msg error'; }
    function showOk(text) { msg.textContent = text; msg.className = 'msg ok'; }
    function clearMsg() { msg.textContent = ''; msg.className = 'msg'; }

    function validateAndStart() {
        const val = input.value;
        if (!val) {
            timer.setTargetDate(null);
            showError('Оберіть дату й час у майбутньому (мінімум +1 день).');
            return;
        }
        const target = new Date(val);
        if (isNaN(target)) {
            timer.setTargetDate(null);
            showError('Невірний формат дати.');
            return;
        }
        const now = new Date();
        const diffMs = target - now;
        if (diffMs < 24 * 60 * 60 * 1000) { // менше ніж на 1 день уперед
            timer.setTargetDate(null);
            showError('Дата має бути більшою від сьогодні щонайменше на 1 день.');
            return;
        }

        clearMsg();
        showOk('Відлік розпочато.');
        timer.setTargetDate(target); // плагін сам перезапустить інтервал
    }

    // Автопідстановка початкового значення — для зручності
    input.value = input.min;

    // Старт за зміною інпуту
    input.addEventListener('change', validateAndStart);

    // Можемо одразу запустити з мінімальною датою:
    validateAndStart();

    // На випадок гарячого оновлення сторінки чи навігації назад — підчищаємо інтервал
    window.addEventListener('beforeunload', () => timer && timer.stop());
})();