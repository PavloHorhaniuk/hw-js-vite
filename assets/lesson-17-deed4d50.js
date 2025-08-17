import"./modulepreload-polyfill-3cfb730f.js";//! Приклад навігації по DOM-дереву
console.warn("Приклад навігації по DOM-дереву:");console.log(`%c
    <ul class="list">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
    </ul>
    `,"color: blue; font-size: 16px");console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");//! Навігація або пошуку елементів в DOM-дереві
console.warn("Навігація або пошуку елементів в DOM-дереві:");console.log("document:",document);const m=document.body;console.log("body = document.body:",m);console.log("document.body.parentNode:",document.body.parentNode);//! </html>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const e=document.querySelector(".list");console.log('list = document.querySelector(".list"):',e);console.log("list.parentNode:",e.parentNode);//! <div class="part part_2">...</div>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const r=e.childNodes;console.log("listItemsNodes = list.childNodes:",r);//! [text, li, text, li, text, li, text, li, text, li, text]
const u=e.children;console.log("listItems = list.children:",u);//! HTMLCollection(5) [li, li, li, li, li]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const g=e.firstChild;console.log("firstListChild = list.firstChild:",g);//! #text 
const a=e.firstElementChild;console.log("firstListElementChild = list.firstElementChild:",a);//! <li>First item</li>
const d=e.lastChild;console.log("lastListChild = list.lastChild:",d);//! #text 
const b=e.lastElementChild;console.log("lastListElementChild = list.lastElementChild:",b);//! <li>Fifth item</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const S=e.previousSibling;console.log("previousListSibling = list.previousSibling:",S);//! #text 
const h=e.previousElementSibling;console.log("previousListElementSibling = list.previousElementSibling:",h);//! <h2 class="title-section">...</h2>
const y=e.nextSibling;console.log("nextListSibling = list.nextSibling:",y);//! #text 
const C=e.nextElementSibling;console.log("nextListElementSibling = list.nextElementSibling:",C);//! <button class="button-2" style="background-color: green; color: yellow; box-shadow: rgb(150, 150, 150) 3px 3px 4px;">On</button>
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");//! Приклад пошуку елементів за селектором
console.warn("Приклад пошуку елементів за селектором:");console.log(`%c
    <ul id="menu" class="menu">
        <li style="color: blue;">logo</li>
        <li class="menu-item">home</li>
        <li class="menu-item">about</li>
        <li class="menu-item">gallery</li>
        <li>blog</li>
    </ul>
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const l=document.querySelector("#menu");l.style.textTransform="uppercase";l.style.fontSize="24px";console.log("listWithId = document.querySelector('#menu'):",l);const x=document.querySelector(".menu");console.log("listWithClass = document.querySelector('.menu'):",x);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const E=document.querySelectorAll("li");console.log('menuItemsByTagName = document.querySelectorAll("li"):',E);const p=document.querySelectorAll(".menu-item");console.log('menuItemsByClass = document.querySelectorAll(".menu-item"):',p);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const s=document.querySelectorAll(".menu-item");for(const c of s)c.style.color="green";console.log('alltMenuItem = document.querySelectorAll(".menu-item"):',s);const i=document.querySelector(".menu-item");i.style.color="tomato";console.log('firstMenuItem = document.querySelector(".menu-item"):',i);console.log("---------------------------------------------------------------------------------------------------------------------------------------------");//! Використання властивостей елементів DOM-дерева
//! Властивість textContent​
console.warn("Властивість textContent​:");const n=document.querySelector(".menu-item2");console.log("elementFirst:",n);//! <li class="menu-item2">logo</li>
const q=n.textContent;console.log("textElementFirst = elementFirst.textContent:",q);//! logo
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const o=n.nextElementSibling;console.log("elementSecond.textContent:",o.textContent);//! home
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");o.textContent="HOME-page";console.log("elementSecond.textContent:",o.textContent);//! home
console.log("elementSecond = elementFirst.nextElementSibling:",o);//! <li class="menu-item2">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");//! Атрибути
console.warn("Атрибути:");const t=document.querySelector(".image");console.log('image.hasAttribute("src"):',t.hasAttribute("src"));//! true
console.log('image.getAttribute("alt"):',t.getAttribute("alt"));//! "Rocks and waterfall"
t.setAttribute("alt","Amazing nature");console.log('image.getAttribute("alt"):',t.getAttribute("alt"));//! Amazing nature
t.setAttribute("width","320");console.log('image.getAttribute("width"):',t.getAttribute("width"));//! 350
t.removeAttribute("height");console.log("image.attributes:",t.attributes);//! NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}
console.log("---------------------------------------------------------------------------------------------------------------------------------");//! data-атрибути
console.warn("data-атрибути:");const A=document.querySelector('button[data-action="save"]');console.log("saveBtn.dataset.action:",A.dataset.action);//! "save"
const f=document.querySelector('button[data-action="close"]');console.log("closeBtn.dataset.action:",f.dataset.action);//! "close"
console.log("---------------------------------------------------------------------------------------------------------------------------------");
