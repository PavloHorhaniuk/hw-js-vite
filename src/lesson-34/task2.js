(function () {
    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
    document.addEventListener('DOMContentLoaded', () => {
        const arena = document.getElementById('t2-arena');
        const startBtn = document.getElementById('t2-start');
        const pauseBtn = document.getElementById('t2-pause');
        const resetBtn = document.getElementById('t2-reset');

        const BOXES = 6; let intervalId = null; const boxes = [];

        function spawnBoxes() {
            arena.innerHTML = ''; boxes.length = 0;
            const { width, height } = arena.getBoundingClientRect();
            for (let i = 0; i < BOXES; i++) {
                const b = document.createElement('div'); b.className = 'box';
                const x = Math.random() * (width - 40) + 20;
                const y = Math.random() * (height - 40) + 20;
                const vx = (Math.random() * 2 + 0.6) * (Math.random() < .5 ? -1 : 1);
                const vy = (Math.random() * 2 + 0.6) * (Math.random() < .5 ? -1 : 1);
                const size = 30 + Math.random() * 40;
                b.style.width = b.style.height = size + 'px';
                b.style.left = x + 'px'; b.style.top = y + 'px';
                b.style.transform = 'translate(-50%, -50%)';
                arena.appendChild(b); boxes.push({ el: b, x, y, vx, vy, size });
            }
        }

        function step() {
            const { width, height } = arena.getBoundingClientRect();
            for (const box of boxes) {
                box.x += box.vx; box.y += box.vy;
                if (box.x < 20 || box.x > width - 20) { box.vx *= -1; box.size = clamp(box.size + (Math.random() * 10 - 5), 24, 80); }
                if (box.y < 20 || box.y > height - 20) { box.vy *= -1; box.size = clamp(box.size + (Math.random() * 10 - 5), 24, 80); }
                box.el.style.left = box.x + 'px'; box.el.style.top = box.y + 'px';
                box.el.style.width = box.el.style.height = box.size + 'px';
            }
        }

        function start() { if (intervalId) return; startBtn.disabled = true; pauseBtn.disabled = false; intervalId = setInterval(step, 30); }
        function pause() { if (!intervalId) return; clearInterval(intervalId); intervalId = null; startBtn.disabled = false; pauseBtn.disabled = true; }
        function reset() { pause(); spawnBoxes(); }

        window.addEventListener('resize', spawnBoxes);
        startBtn.addEventListener('click', start);
        pauseBtn.addEventListener('click', pause);
        resetBtn.addEventListener('click', reset);

        spawnBoxes();
    });
})();