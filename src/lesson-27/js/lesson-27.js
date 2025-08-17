 const images = document.querySelectorAll('img[data-src]');
        const button = document.getElementById('loadImages');

        // Функція, яка замінює src на data-src та додає клас "loaded"
        const loadImage = (img) => {
            img.src = img.getAttribute('data-src');
            img.onload = () => {
                img.classList.add('loaded');
            };
        };

        // Створюємо IntersectionObserver для лінійного завантаження при скролі
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(entry.target);
                    observer.unobserve(entry.target); // перестаємо спостерігати після завантаження
                }
            });
        }, {
            threshold: 0.1 // завантаження, коли 10% зображення видно на екрані
        });

        // Додаємо можливість завантаження лише після натискання кнопки
        button.addEventListener('click', () => {
            images.forEach(img => {
                observer.observe(img);
            });
            button.disabled = true;
            button.textContent = 'Завантаження активовано';
        });

        // Можна покращити в майбутньому:
        // - Використати srcset для адаптивного завантаження різних роздільних здатностей
        // - Використати requestIdleCallback для плавного завантаження без шкоди для продуктивності
        // - Додати індикатор лоадера на місце зображень для покращення UX