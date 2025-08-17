import"./modulepreload-polyfill-3cfb730f.js";console.log("%c [1] ","color: yellow; background-color: #2274A5");const e={name:"Mango",age:20,hobby:"html",premium:!0};//! Код виконаного завдання
e.mood="happy";e.hobby="skydiving";e.premium=!1;console.log(e);console.log("--------------------------------------------------");console.log("%c [2] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const g=function(l){return Object.keys(l).length};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(g({}));//! 0
console.log(g({name:"Mango",age:2}));//! 2
console.log("--------------------------------------------------");console.log("%c [3] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const t=function(l){let n="",o=0;for(const r in l)l[r]>o&&(o=l[r],n=r);return n};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(t({ann:29,david:35,helen:1,lorence:99}));//! lorence
console.log(t({poly:12,mango:17,ajax:4}));//! mango
console.log(t({lux:147,david:21,kiwi:19,chelsy:38}));//! lux
console.log("--------------------------------------------------");console.log("%c [4] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const a=function(l){let n=0;for(const o of Object.values(l))n+=o;return n};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(a({}));//! 0
console.log(a({mango:100,poly:150,alfred:80}));//! 330
console.log(a({kiwi:200,lux:50,chelsy:150}));//! 400
console.log("--------------------------------------------------");console.log("%c [5] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const c=[{name:"Радар",price:1300,quantity:4},{name:"Сканер",price:2700,quantity:3},{name:"Дроїд",price:400,quantity:7},{name:"Захоплення",price:1200,quantity:2}],s=function(l,n){//! твій код
return l.map(o=>o[n]).filter(o=>o!==void 0)};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(s(c,"name"));//! ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(s(c,"quantity"));//! [4, 3, 7, 2]
console.log(s(c,"category"));//! []
console.log("--------------------------------------------------");console.log("%c [6] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
const u=function(l,n){//! твій код
for(const o of l)if(o.name===n)return o.price*o.quantity;return 0};//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(u(c,"Радар"));//! 5200
console.log(u(c,"Дроїд"));//! 2800
console.log("--------------------------------------------------");console.log("%c [7] - додаткове ","color: yellow; background-color: #2274A5");//! Код виконаного завдання
console.log("--------------------------------------------------");
