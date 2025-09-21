(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const arena = document.getElementById('t3-arena');
        const startBtn = document.getElementById('t3-start');
        const stopBtn = document.getElementById('t3-stop');
        const resetBtn = document.getElementById('t3-reset');
        const durInput = document.getElementById('t3-duration');
        const timeEl = document.getElementById('t3-time');
        const scoreEl = document.getElementById('t3-score');
        const clicksEl = document.getElementById('t3-clicks');

        let gameInterval = null;
        let timerInterval = null;
        let timeLeft = 0;
        let score = 0;
        let clicks = 0;
        let target = null;

        function spawnTarget() {
            if (!target) {
                target = document.createElement('button');
                target.className = 'target';
                target.setAttribute('aria-label', 'Ціль');
                target.type = 'button';
                target.addEventListener('click', () => {
                    score++; scoreEl.textContent = String(score);
                }, { passive: true });
                arena.appendChild(target);
            }
            const { width, height } = arena.getBoundingClientRect();
            const pad = 30;
            const x = Math.random() * (width - pad * 2) + pad;
            const y = Math.random() * (height - pad * 2) + pad;
            target.style.left = x + 'px';
            target.style.top = y + 'px';
        }

        function onArenaClick() { clicks++; clicksEl.textContent = String(clicks); }

        function start() {
            if (gameInterval || timerInterval) return;
            const dur = Math.max(5, Math.min(120, Number(durInput.value) || 20));
            timeLeft = dur; score = 0; clicks = 0;
            timeEl.textContent = String(timeLeft);
            scoreEl.textContent = '0';
            clicksEl.textContent = '0';
            startBtn.disabled = true; stopBtn.disabled = false; durInput.disabled = true;
            arena.addEventListener('click', onArenaClick);
            spawnTarget();
            gameInterval = setInterval(spawnTarget, 700);
            timerInterval = setInterval(() => {
                timeLeft--; timeEl.textContent = String(timeLeft);
                if (timeLeft <= 0) end();
            }, 1000);
        }

        function end() {
            if (gameInterval) { clearInterval(gameInterval); gameInterval = null; }
            if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
            startBtn.disabled = false; stopBtn.disabled = true; durInput.disabled = false;
            arena.removeEventListener('click', onArenaClick);
            timeEl.textContent = '0';

            const toast = document.createElement('div');
            toast.textContent = `Гру завершено! Очки: ${score}, натисків: ${clicks}.`;
            toast.style.position = 'absolute';
            toast.style.left = '50%'; toast.style.top = '50%';
            toast.style.transform = 'translate(-50%, -50%)';
            toast.style.padding = '10px 14px';
            toast.style.background = 'rgba(0,0,0,.6)';
            toast.style.border = '1px solid rgba(255,255,255,.2)';
            toast.style.borderRadius = '10px';
            toast.style.pointerEvents = 'none';
            arena.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        }

        function stop() { end(); }

        function reset() {
            stop(); score = 0; clicks = 0; timeLeft = 0;
            scoreEl.textContent = '0'; clicksEl.textContent = '0'; timeEl.textContent = '—';
            if (target) { target.remove(); target = null; }
        }

        startBtn.addEventListener('click', start);
        stopBtn.addEventListener('click', stop);
        resetBtn.addEventListener('click', reset);
    });
})();
