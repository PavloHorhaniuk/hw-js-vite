import"./modulepreload-polyfill-3cfb730f.js";console.log("%c [1] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const n=o=>{o("Hello World!")};n(o=>console.log(o));const r=o=>o("Hello World!");r(o=>console.log(o));console.log("--------------------------------------------------");console.log("%c [2] ","color: yellow; background-color: #2274A5");const s=(o,l)=>Math.floor(Math.random()*(l-o+1))+o,t=(o,l,c,e)=>c===e(o,l)?"✅ Ви вгадали число!":"❌ Ви НЕ вгадали число";console.log(t(3,1,2,s));console.log("--------------------------------------------------");console.log("%c [3] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const g=()=>Math.floor(Math.random()*5)+1,a=o=>`${o}px`,u=(o,l)=>l(o());console.log(u(g,a));console.log("--------------------------------------------------");console.log("%c [4] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const d=(o,l)=>o.map(l),b=[1,2,3,4,5],i=o=>o*o,h=d(b,i);console.log("result:",h);//! [1, 4, 9, 16, 25]
console.log("--------------------------------------------------");console.log("%c [5] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const m=100,k=10,y=(o,l,c)=>c(o,l),w=(o,l)=>o-o*l/100,A=y(m,k,w);console.log(A);//! Discount price: 90
console.log("--------------------------------------------------");//! ПРАКТИКА-10 (Урок-10_JS)
console.log("%c [Додаткове 10-1] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
console.log("-----------------------------------------");console.log("%c [Додаткове 10-2] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
console.log("-----------------------------------------");
