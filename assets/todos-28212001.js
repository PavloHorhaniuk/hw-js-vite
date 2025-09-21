import"./modulepreload-polyfill-3cfb730f.js";/* empty css               */const m="https://jsonplaceholder.typicode.com",c=document.getElementById("status"),a=document.getElementById("table"),h=document.getElementById("load"),l=document.getElementById("userId"),p=document.getElementById("completed"),g=document.getElementById("limit");function o(t,e=""){c.textContent=t||"",c.className="msg "+e}function y(t){if(!t.length){a.innerHTML="<tbody><tr><td>Пусто.</td></tr></tbody>";return}a.innerHTML=`
    <thead>
      <tr><th>#</th><th>userId</th><th>title</th><th>status</th></tr>
    </thead>
    <tbody>
      ${t.map(e=>`
        <tr>
          <td>${e.id}</td>
          <td>${e.userId}</td>
          <td>${e.title}</td>
          <td>${e.completed?'<span class="badge ok">done</span>':'<span class="badge warn">pending</span>'}</td>
        </tr>
      `).join("")}
    </tbody>
  `}function E(){const e=new URLSearchParams(location.search).get("userId");e&&(l.value=Number(e))}async function i(){try{o("Завантаження…");const t=new URLSearchParams,e=Number(l.value);e&&t.set("userId",String(e));const s=p.value;s!==""&&t.set("completed",s);const d=Number(g.value);d&&t.set("_limit",String(d));const u=`${m}/todos${t.toString()?`?${t.toString()}`:""}`,n=await fetch(u);if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();y(r),o(`Готово: ${r.length} елементів.`,"ok")}catch(t){console.error(t),o("Помилка завантаження.","error")}}h.addEventListener("click",i);E();i();
