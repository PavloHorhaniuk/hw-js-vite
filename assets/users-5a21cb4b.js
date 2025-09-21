import"./modulepreload-polyfill-3cfb730f.js";/* empty css               */const m="https://jsonplaceholder.typicode.com",a=document.getElementById("status"),c=document.getElementById("table"),l=document.getElementById("search"),h=document.getElementById("load");let r=[];function s(t,e=""){a.textContent=t||"",a.className="msg "+e}function d(t){if(!t.length){c.innerHTML="<tbody><tr><td>Нічого не знайдено.</td></tr></tbody>";return}c.innerHTML=`
    <thead>
      <tr><th>Імʼя</th><th>Username</th><th>Email</th><th>Місто</th><th>Компанія</th><th></th></tr>
    </thead>
    <tbody>
      ${t.map(e=>{var n,o;return`
        <tr>
          <td>${e.name}</td>
          <td>${e.username}</td>
          <td>${e.email}</td>
          <td>${((n=e.address)==null?void 0:n.city)??""}</td>
          <td>${((o=e.company)==null?void 0:o.name)??""}</td>
          <td><a class="badge" href="./todos.html?userId=${e.id}">Todos →</a></td>
        </tr>
      `}).join("")}
    </tbody>
  `}function u(){const t=(l.value||"").toLowerCase().trim();if(!t){d(r);return}const e=r.filter(n=>[n.name,n.username,n.email].some(o=>String(o).toLowerCase().includes(t)));d(e)}async function i(){try{s("Завантаження…");const t=await fetch(`${m}/users`);if(!t.ok)throw new Error(`HTTP ${t.status}`);r=await t.json(),d(r),s(`Готово: отримано ${r.length} користувачів.`,"ok")}catch(t){console.error(t),s("Помилка завантаження користувачів.","error")}}l.addEventListener("input",u);h.addEventListener("click",i);i();
