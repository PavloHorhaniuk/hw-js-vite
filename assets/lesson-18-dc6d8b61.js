import"./modulepreload-polyfill-3cfb730f.js";//! Створення елементів
console.warn("Створення елементів:");console.log(`%c
    🔸 document.createElement(tagName);
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");const l=document.createElement("h1");console.log("heading:",l);//! <h1></h1>
l.textContent="This is a heading";console.log("heading:",l);//! <h1>This is a heading</h1>
const n=document.createElement("img");n.src="https://picsum.photos/id/17/320/240";n.alt="Nature";n.setAttribute("alt","Amazing nature");console.log("image:",n);//! <img src="https://picsum.photos/id/17/320/240" alt="Nature" />
console.log("--------------------------------------------------------------------------------------------");//! Додавання елементів
console.warn("Додавання елементів:");console.log(`%c
    🔸 element.append(el1, el2, ...) - після всіх дітей елемента
    🔸 element.prepend(el1, el2, ...) - перед усіма дітьми елемента
    🔸 element.after(el1, el2, ...) - після елемента
    🔸 element.before(el1, el2, ...) - перед елементом
    `,"color: blue; font-size: 16px");const e=document.querySelector(".usernames"),c=document.createElement("li");c.textContent="Poly-1";e.append(c);const s=document.createElement("li");s.textContent="Poly-2";e.appendChild(s);const r=document.createElement("li");r.textContent="Ajax";e.prepend(r);const i=document.createElement("a");i.textContent="Read more...";e.after(i);const a=document.createElement("h3");a.textContent="Usernames";e.before(a);console.log("--------------------------------------------------------------------------------------------");//! Видалення елементів
console.warn("Видалення елементів:");console.log(`%c
    🔸 element.remove()
    `,"color: blue; font-size: 16px");const g=document.querySelector(".text1");g.remove();console.log("--------------------------------------------------------------------------------------------");//! 3.Властивість innerHTML
//! Читання
console.warn("Читання:");const d=document.querySelector(".article31");console.log("article.innerHTML:",d.innerHTML);const m=document.querySelector(".article31 .title31");console.log("title31.innerHTML:",m.innerHTML);console.log("title31:",m);const p=document.querySelector(".article31 .text31");console.log("text.innerHTML:",p.innerHTML);const f=document.querySelector(".article31 .link31");console.log("link.innerHTML:",f.innerHTML);console.log("-----------------------------------------------------------------------------------------");//! Зміна/видалення
console.warn("Зміна/видалення:");console.log(`%c
    title32.innerHTML = '<span class="accent">Replacement</span>';
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const T=document.querySelector(".article32 .title32");T.innerHTML='<span class="accent">Replacement</span>';console.log(`%c
    link32.innerHTML = "";
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const H=document.querySelector(".article32 .link32");H.innerHTML="";console.log("-----------------------------------------------------------------------------------------");//! Шаблонізація
console.warn("Шаблонізація:");const L=["C#","C++",".NET","PHP","Python","Java","SQL","Django","C","iOS"],b=document.querySelector(".list33"),u=L.map(o=>`<li class="list-item">${o}</li>`).join("");console.log("markup:",u);b.innerHTML=u;console.log("-----------------------------------------------------------------------------------------");//! Додавання
console.warn("Додавання:");console.log(`%c
    article34.innerHTML += htmlString;
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const h=document.querySelector(".article34"),M=`<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
<a class="link" href="#">Read more...</a>`;h.innerHTML+=M;console.log("-----------------------------------------------------------------------------------------");//! Метод insertAdjacentHTML()
console.warn(`Метод insertAdjacentHTML(): 
 ${window.location.href.split("/").slice(0,-2).join("/")+"/"}lesson-FE3_18/images/insert-adjacent.png`);console.log(`%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,"color: blue; font-size: 16px");console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");const t=document.querySelector(".list4"),x=["React","TypeScript","Node.js"],S=x.map(o=>`<li class="list-item new">${o}</li>`).join(""),y="Popular technologies";t.insertAdjacentHTML("beforebegin",`<h3>${y}</h3>`);t.insertAdjacentHTML("afterbegin",'<li class="list-item new">C++</li>');t.insertAdjacentHTML("beforeend",S);t.insertAdjacentHTML("afterend",'<a class="link4" href="">Read more...</a>');console.log("----------------------------------------------------------------------------------");
