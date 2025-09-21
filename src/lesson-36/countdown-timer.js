// Плагін: CountdownTimer — клас, який показує відлік до targetDate.
// Використання:
// new CountdownTimer({ selector: '#timer-1', targetDate: new Date('2025-12-31T23:59') });
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.root = document.querySelector(selector);
        if (!this.root) throw new Error(`CountdownTimer: selector "${selector}" не знайдено`);
        this.refs = {
            days: this.root.querySelector('[data-value="days"]'),
            hours: this.root.querySelector('[data-value="hours"]'),
            mins: this.root.querySelector('[data-value="mins"]'),
            secs: this.root.querySelector('[data-value="secs"]'),
        };
        this._timerId = null;
        this.setTargetDate(targetDate || null);
    }

    setTargetDate(date) {
        this.stop();
        this.targetDate = date instanceof Date && !isNaN(date) ? date : null;
        if (this.targetDate) this.start(); else this.renderPlaceholders();
    }

    start() {
        if (!this.targetDate) return;
        this.tick(); // миттєве оновлення
        this._timerId = setInterval(() => this.tick(), 1000);
    }

    stop() {
        if (this._timerId) {
            clearInterval(this._timerId);
            this._timerId = null;
        }
    }

    destroy() { this.stop(); this.root = null; this.refs = null; this.targetDate = null; }

    // Основний розрахунок за готовими формулами з умови:
    tick() {
        const now = new Date();
        const time = this.targetDate - now; // різниця в мс

        if (time <= 0) {
            this.updateValues({ days: 0, hours: 0, mins: 0, secs: 0 });
            this.stop();
            return;
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.updateValues({ days, hours, mins, secs });
    }

    updateValues({ days, hours, mins, secs }) {
        // Дні можуть бути >2 цифр, години/хв/сек — у форматі XX
        if (this.refs.days) this.refs.days.textContent = String(days);
        if (this.refs.hours) this.refs.hours.textContent = String(hours).padStart(2, '0');
        if (this.refs.mins) this.refs.mins.textContent = String(mins).padStart(2, '0');
        if (this.refs.secs) this.refs.secs.textContent = String(secs).padStart(2, '0');
    }

    renderPlaceholders() {
        if (!this.refs) return;
        this.updateValues({ days: '--', hours: '--', mins: '--', secs: '--' });
    }
}

// Експорт у глобальну область, щоб можна було використати з <script> без модулів
window.CountdownTimer = CountdownTimer;