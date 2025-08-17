
const sliderInput = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

function debounce(fn, delay) {
    let timeoutId
    return (...args)  => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() =>{
            fn.apply(this, args);
        }, delay);
    };
}

function updateImegeSize(event) {
    const value = event.target.value;
    image.style.width = `${value}%`;
}

const debouncedResize = debounce(updateImegeSize, 100);

sliderInput.addEventListener('input', debouncedResize)


const box = document.getElementById('box');

  // Функція, що буде викликана при русі мишки
  function moveBox(event) {
    box.style.left = event.clientX + 'px';
    box.style.top = event.clientY + 'px';
  }

  // Створюємо дебаунс-версію функції з затримкою 100 мс
  const debouncedMoveBox = _.debounce(moveBox, 100);

  // Додаємо обробник події
  document.addEventListener('mousemove', debouncedMoveBox);
  