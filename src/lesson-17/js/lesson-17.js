//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки 
//? та текстового поля за їх ідентифікаторами 
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання

        // Отримуємо доступ до елементів за їх ідентифікаторами
        const button = document.getElementById("myButton");
        const textInput = document.getElementById("textInput");

        // Додаємо обробник події кліку на кнопку
        button.addEventListener("click", function() {
            // Змінюємо текст кнопки на значення текстового поля
            button.textContent = textInput.value;
        });

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з заголовком та зображенням. 
//? За допомогою JavaScript отримати доступ до зображення 
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання

        // Отримуємо доступ до зображення та кнопки
        const image = document.getElementById("myImage");
        const button2 = document.getElementById("changeImageButton");

        // Додаємо обробник події кліку на кнопку
        button2.addEventListener("click", function() {
            // Змінюємо атрибут "src" у зображення
            image.src = "../img/photo_2.jpg";
        });

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  з посиланням та зображенням. 
//? За допомогою JavaScript отримати доступ до посилання 
//? та змінити значення атрибута "href" на нову URL-адресу. 
//? Також отримати доступ до зображення 
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання

        // Отримуємо доступ до посилання, зображення та кнопки
        const link = document.getElementById("myLink");
        const myImage2 = document.getElementById("myImage2");
        const button3 = document.getElementById("changeButton");

        // Додаємо обробник події кліку на кнопку
        button3.addEventListener("click", function() {
            // Змінюємо атрибут "href" у посилання
            link.href = "https://github.com/PavloHorhaniuk/template-homework-js";
            
            // Додаємо новий атрибут "alt" до зображення
            myImage2.alt = "Нове зображення з описом";
        });
console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  зі списком елементів. 
//? За допомогою JavaScript отримати доступ 
//? до першого елемента списку 
//? та змінити його вміст на новий текст. 
//! Код виконаного завдання


const firstItem = document.querySelector('#myList li');

// Змінюємо його вміст
firstItem.textContent = 'Новий текст для першого елемента';

console.log("--------------------------------------------------");
