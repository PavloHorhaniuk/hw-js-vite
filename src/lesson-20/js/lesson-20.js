
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Створити галерею зображень, яку можна прогортати
//? за допомогою клавіш клавіатури (наприклад, вліво / вправо)
//? ✴️ В HTML є такі елементи:
/*
<ul class="gallery">
    <li>
        <img 
            class="image" 
            src="https://images.pexels.com/photos/13599326/pexels-photo-13599326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="зображення" 
        />
    </li>
    <li>
        <img 
            class="image" 
            src="https://images.pexels.com/photos/4617294/pexels-photo-4617294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="зображення" 
        />
    </li>
    <li>
        <img 
            class="image" 
            src="https://images.pexels.com/photos/11815778/pexels-photo-11815778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="зображення" 
        />
    </li>
    <li>
        <img 
            class="image"
            src="https://images.pexels.com/photos/6195166/pexels-photo-6195166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="зображення" 
        />
    </li>
    <li>
        <img 
            class="image"
            src="https://images.pexels.com/photos/6957926/pexels-photo-6957926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="зображення" 
        />
    </li>
    <li>
        <img 
            class="image"
            src="https://images.pexels.com/photos/15520825/pexels-photo-15520825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="зображення" 
        />
    </li>
</ul>
*/

//? ✴️ CSS:
/*
.gallery {
    display: flex;
    overflow-x: auto;
}

.image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-right: 20px;
    cursor: pointer;
}

.full-image-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.full-image {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
*/
//! Код виконаного завдання

const items = document.querySelectorAll('.gallery li');
let currentIndex = 0;

function showImage(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

showImage(currentIndex);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % items.length;
    showImage(currentIndex);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showImage(currentIndex);
  }
});

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт створення і очищення колекції елементів.
//? Користувач вводить кількість елементів в input 
//? і натискає кнопку Створити, після чого рендериться колекція. 
//? При натисканні на кнопку Очистити, колекція елементів очищається.
//? 🔸 Створи функцію createBoxes(amount), 
//? яка приймає 1 параметр amount - число.
//? Функція створює стільки div, 
//? скільки вказано в amount і додає їх в div#boxes.
//? 🔸 Кожен створений div:
//? - Має випадковий rgb колір фону
//? - Розміри найпершого div — 30px на 30px
//? - Кожен наступний div після першого, 
//?   повинен бути ширше і вище попереднього на 10px
//? 🔸 Створи функцію destroyBoxes(), яка очищає div#boxes.
//? ✴️ В HTML є такі елементи:
/*
<div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Створити</button>
    <button type="button" data-action="destroy">Очистити</button>
</div>

<div id="boxes"></div>
*/
//! Код виконаного завдання

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-action="render"]');
const destroyBtn = controls.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // очищає попередні блоки перед новим рендером
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("--------------------------------------------------");
