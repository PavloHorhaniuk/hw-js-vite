//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт в якому є три радіобатони зі значенями кольрів.
//? При обиранні на будь якого, колір фону боді змінюється відповідно.
//? ✴️ В HTML є така форма:
/*
<form class="form">
    <p>Choose a color:</p>
    <label>
    <input type="radio" name="color" value="red" />
    Red
    </label>
    <label>
    <input type="radio" name="color" value="white" checked />
    White
    </label>
    <label>
    <input type="radio" name="color" value="green" />
    Green
    </label>
</form>
*/
//! Код виконаного завдання


const form = document.querySelector('.form');

form.addEventListener('change', (event) => {
    if (event.target.name === 'color') {
        document.body.style.backgroundColor = event.target.value;
    }
});

// Зміна кольору фону під час завантаження сторінки відповідно до вибраного
const selectedColor = form.querySelector('input[name="color"]:checked').value;
document.body.style.backgroundColor = selectedColor;

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт який,
//? при наборі тексту в інпут input#name-input (подія input), 
//? підставляє його поточне значення в span#name-output. 
//? Якщо інпут порожній, в спані повинен відображатися рядок "НЕЗНАЙОМЕЦЬ".
//? ✴️ В HTML є такі елементи:
/*
<input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
*/
//! Код виконаного завдання

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue === '' ? 'незнайомець' : trimmedValue;
});

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт, який би при втраті фокуса на інпут,
//? перевіряв його вміст на правильну кількість символів.
//? ✴️ В HTML є такий input:
/*
<input
    type="text"
    id="validation-input"
    data-length="6"
    placeholder="Введи 6 символів"
/>
*/
//? 🔸 Скільки символів має бути в інпут, 
//? вказується в його атрибуті data-length.
//? 🔸 Якщо введена відповідна кількість або більше, 
//? то border інпут стає зеленим, 
//? якщо неправильне - червоним.
//? ✴️ Для додавання стилів, використовуй CSS-класи valid і invalid:
/*
#validation-input {
    border: 3px solid #bdbdbd;
}

#validation-input.valid {
    border-color: #4caf50;
}

#validation-input.invalid {
    border-color: #f44336;
}
*/
//! Код виконаного завдання
    // Перевірка кількості символів в інпуті #validation-input
    const validationInput = document.querySelector('#validation-input');
    const requiredLength = Number(validationInput.dataset.length);

    validationInput.addEventListener('blur', () => {
        const trimmedValue = validationInput.value.trim();

        // Спочатку видаляємо обидва класи
        validationInput.classList.remove('valid', 'invalid');

        if (trimmedValue.length === requiredLength) {
            validationInput.classList.add('valid');
        } else {
            validationInput.classList.add('invalid');
        }
    });

console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт, який реагує 
//? на зміну значення input#font-size-control (подія input) 
//? і змінює інлайн-стиль span#text, 
//? оновлюючи властивість font-size. 
//? В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
//? ✴️ В HTML є такі елементи:
/*
<span id="text">Абракадабра!</span>
<br />
<input id="font-size-control" type="range" />
*/
//! Код виконаного завдання

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value + 'px';
    text.style.fontSize = fontSize;
});

console.log("--------------------------------------------------");


// const checkedInput = form.querySelector("input:checked");

// console.log("form:", form);
// console.log("checkedInput:", checkedInput);
