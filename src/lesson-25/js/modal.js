
let modalEl;
let modalImg;
let btnPrev;
let btnNext;
let currentIndex = 0;
let galleryData = [];

export function openModal(src, items) {
  galleryData = items;
  currentIndex = galleryData.findIndex(item => item.original === src);

  if (!modalEl) createModal();

  modalImg.src = src;
  modalEl.style.display = 'flex';

  // Анімація появи
  requestAnimationFrame(() => {
    modalImg.style.opacity = '1';
    btnPrev.style.opacity = '1';
    btnNext.style.opacity = '1';
  });
}

function createModal() {
  // Створюємо контейнер модалки
  modalEl = document.createElement('div');
  modalEl.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `;

  // Створюємо зображення
  modalImg = document.createElement('img');
  modalImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    position: relative;
    z-index: 2;
  `;

  // Створюємо кнопку "←"
  btnPrev = document.createElement('button');
  btnPrev.textContent = '←';
  btnPrev.style.cssText = `
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s;
  `;

  // Створюємо кнопку "→"
  btnNext = document.createElement('button');
  btnNext.textContent = '→';
  btnNext.style.cssText = `
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.3s;
  `;

  modalEl.append(modalImg, btnPrev, btnNext);
  document.body.appendChild(modalEl);

  // Закриття по кліку на фон
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });

  // Клавіатура
  document.addEventListener('keydown', onKeyDown);

  // Клік на кнопки
  btnPrev.addEventListener('click', showPrevImage);
  btnNext.addEventListener('click', showNextImage);
}

function onKeyDown(e) {
  if (!modalEl || modalEl.style.display !== 'flex') return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowRight') {
    showNextImage();
  } else if (e.key === 'ArrowLeft') {
    showPrevImage();
  }
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  modalImg.style.opacity = '0';
  setTimeout(() => {
    modalImg.src = galleryData[currentIndex].original;
    modalImg.style.opacity = '1';
  }, 150);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  modalImg.style.opacity = '0';
  setTimeout(() => {
    modalImg.src = galleryData[currentIndex].original;
    modalImg.style.opacity = '1';
  }, 150);
}

function closeModal() {
  modalEl.style.display = 'none';
  modalImg.src = '';
}
