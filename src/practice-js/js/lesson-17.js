//! Приклад навігації по DOM-дереву
console.warn("Приклад навігації по DOM-дереву:");
//? ✳️ Розглянемо такий HTML-код для навігації по DOM-дереву:
console.log(
    `%c
    <ul class="list">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
    </ul>
    `,
    'color: blue; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


//! Навігація або пошуку елементів в DOM-дереві
console.warn("Навігація або пошуку елементів в DOM-дереві:");
// console.log(document);
console.log("document:", document);

const body = document.body;
// console.log(body);
console.log("body = document.body:", body);
console.log("document.body.parentNode:", document.body.parentNode); //! </html>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const list = document.querySelector(".list");
// console.log(list);
console.log('list = document.querySelector(".list"):', list);
console.log("list.parentNode:", list.parentNode); //! <div class="part part_2">...</div>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const listItemsNodes = list.childNodes;
// console.log(listItemsNodes);
console.log('listItemsNodes = list.childNodes:', listItemsNodes); //! [text, li, text, li, text, li, text, li, text, li, text]

const listItems = list.children;
// console.log(listItems);
console.log('listItems = list.children:', listItems); //! HTMLCollection(5) [li, li, li, li, li]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const firstListChild = list.firstChild;
// console.log(firstListChild);
console.log('firstListChild = list.firstChild:', firstListChild); //! #text 

const firstListElementChild = list.firstElementChild;
// console.log(firstListElementChild);
console.log('firstListElementChild = list.firstElementChild:', firstListElementChild); //! <li>First item</li>

const lastListChild = list.lastChild;
// console.log(lastListChild);
console.log('lastListChild = list.lastChild:', lastListChild); //! #text 

const lastListElementChild = list.lastElementChild;
// console.log(lastListElementChild);
console.log('lastListElementChild = list.lastElementChild:', lastListElementChild); //! <li>Fifth item</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const previousListSibling = list.previousSibling;
// console.log(previousListSibling);
console.log('previousListSibling = list.previousSibling:', previousListSibling); //! #text 

const previousListElementSibling = list.previousElementSibling;
// console.log(previousListElementSibling);
console.log('previousListElementSibling = list.previousElementSibling:', previousListElementSibling); //! <h2 class="title-section">...</h2>

const nextListSibling = list.nextSibling;
// console.log(nextListSibling);
console.log('nextListSibling = list.nextSibling:', nextListSibling); //! #text 

const nextListElementSibling = list.nextElementSibling;
// console.log(nextListElementSibling);
console.log('nextListElementSibling = list.nextElementSibling:', nextListElementSibling); //! <button class="button-2" style="background-color: green; color: yellow; box-shadow: rgb(150, 150, 150) 3px 3px 4px;">On</button>

//? ❗️❗️❗️ DOM-колекції, 
//? як-от childNodes і children 
//? - псевдомасиви (NodeList), 
//? у них немає більшості методів масиву.
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");


//! Приклад пошуку елементів за селектором
console.warn("Приклад пошуку елементів за селектором:");
//? ✳️ Розглянемо такий приклад пошуку елементів за селектором:
console.log(
    `%c
    <ul id="menu" class="menu">
        <li style="color: blue;">logo</li>
        <li class="menu-item">home</li>
        <li class="menu-item">about</li>
        <li class="menu-item">gallery</li>
        <li>blog</li>
    </ul>
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase'; //todo: зміна властивості:  text-transform: uppercase;
listWithId.style.fontSize = '24px'; //todo: зміна властивості:  font-size: 24px;
console.log("listWithId = document.querySelector('#menu'):", listWithId);

const listWithClass = document.querySelector('.menu');
console.log("listWithClass = document.querySelector('.menu'):", listWithClass);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const menuItemsByTagName = document.querySelectorAll("li");
console.log('menuItemsByTagName = document.querySelectorAll("li"):', menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log('menuItemsByClass = document.querySelectorAll(".menu-item"):', menuItemsByClass);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const alltMenuItem = document.querySelectorAll(".menu-item");
// alltMenuItem.style.color = 'green'; //! Error: Cannot set properties of undefined (setting 'color')
//todo: зміна властивості ВСІХ елементів :  color: green;
for (const element of alltMenuItem) {
    element.style.color = 'green';
};
console.log('alltMenuItem = document.querySelectorAll(".menu-item"):', alltMenuItem);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log('firstMenuItem = document.querySelector(".menu-item"):', firstMenuItem);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");


//! Використання властивостей елементів DOM-дерева
//? ✴️ Під час побудови DOM-дерева,
//? деякі стандартні HTML-атрибути
//? стають властивостями елементів.
//? Подивимося на декілька властивостей, які часто використовуються.
//? 🔸 hidden — контролює видимість елемента.
//? 🔸 value — містить поточний текстовий контент елементів форм: input, select, textarea.
//? 🔸 checked — зберігає стан чекбокса або радіо кнопки.
//? 🔸 name — зберігає значення вказане в HTML-атрибут name.
//? 🔸 src — шлях до зображення тега <img>.

//! Властивість textContent​
console.warn("Властивість textContent​:");
//? ✴️ elem.textContent 
//? - повертає текстовий контент всередині елемента. 
//? Доступний для читання і запису. 
//? Неважливо, що буде передано в textContent, 
//? дані завжди будуть записані як текст.
const elementFirst = document.querySelector(".menu-item2");
console.log("elementFirst:", elementFirst); //! <li class="menu-item2">logo</li>

const textElementFirst = elementFirst.textContent;
console.log("textElementFirst = elementFirst.textContent:", textElementFirst); //! logo
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const elementSecond = elementFirst.nextElementSibling;
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

elementSecond.textContent = 'HOME-page';
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("elementSecond = elementFirst.nextElementSibling:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");
    

//! Атрибути
console.warn("Атрибути:");
//? ✴️ DOM-елементам відповідають HTML-теги,
//? які містять текстові атрибути.
//? Доступ до атрибутів здійснюється
//? за допомогою стандартних методів.
//? Ці методи працюють зі значенням, яке знаходиться в HTML.
//? 🔸 elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
//? 🔸 elem.getAttribute(name) - отримує значення атрибута і повертає його.
//? 🔸 elem.setAttribute(name, value) - встановлює атрибут.
//? 🔸 elem.removeAttribute(name) - видаляє атрибут.
//? 🔸 elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
const image = document.querySelector(".image");

//todo: Перевірка на наявність:
console.log('image.hasAttribute("src"):', image.hasAttribute("src")); //! true

//todo: Отримуємо значення атрибута
console.log('image.getAttribute("alt"):', image.getAttribute("alt")); //! "Rocks and waterfall"

//todo: Всановлюємо або змінюємо атрибут та його значення:
image.setAttribute("alt", "Amazing nature");
console.log('image.getAttribute("alt"):', image.getAttribute("alt")); //! Amazing nature

image.setAttribute("width", "320");
console.log('image.getAttribute("width"):', image.getAttribute("width")); //! 350

//todo: Видаляємо атрибут:
image.removeAttribute("height");

//todo: Повертаємо об'єкт усіх атрибутів елемента:
console.log("image.attributes:", image.attributes); //! NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}
console.log("---------------------------------------------------------------------------------------------------------------------------------");


//! data-атрибути
console.warn("data-атрибути:");
//? ✴️ Дозволяють додати до тегу довільний атрибут
//? і отримати його значення в JavaScript.
//? Цю можливість використовують для того,
//? щоб спростити написання коду, наприклад,
//? зв'язати дані і розмітку за унікальним ідентифікатором,
//? вказати тип дії кнопки тощо.
//? ✳️ Для отримання значення data-атрибута
//? використовується властивість ❗️dataset❗️, 
//? після якого стоїть ім'я атрибута. 
//? Тобто data- відкидається, 
//? а інша частина імені записується 
//? як ім'я властивості об'єкта.
const saveBtn = document.querySelector('button[data-action="save"]');
console.log("saveBtn.dataset.action:", saveBtn.dataset.action); //! "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log("closeBtn.dataset.action:", closeBtn.dataset.action); //! "close"
console.log("---------------------------------------------------------------------------------------------------------------------------------");
