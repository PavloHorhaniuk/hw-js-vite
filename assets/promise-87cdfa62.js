import"./modulepreload-polyfill-3cfb730f.js";//! Promise.race()
//! Promise.any()
//! new Promise ----> Promise.resolve() і Promise.reject()
//! ❌ Rejected promise
new Promise((e,o)=>o("❌ ERROR from new Promise")).catch(e=>console.error("new Promise:",e));Promise.reject("❌❌ ERROR from from Promise.resolve").catch(e=>{console.error("Promise.resolve:",e),console.log("------------------------------------------------------------------------")});//! Код до рефакторингу
//! Виконаємо рефакторинг наступного коду:
//! Promise.allSettled(promises)
const t=2500,r=(e,o)=>new Promise((m,n)=>{setTimeout(()=>{o<=t?m(e):n("❌ Error!")},o)}),i=r("promiseA value",1e3),c=r("promiseB value",3e3);//! ❌
const a=r("promiseС value",2e3);Promise.allSettled([i,c,a]).then(e=>console.log(`Promise.allSettled([promiseA, promiseB, promiseC]).then(value):
`,e)).finally(()=>{console.log("-------------------------------------------------------------------------------------")});//!     1: { status: 'rejected', reason: '❌ Error!' },
//! Створюємо масив промісів з різним часом виконання:
const s=e=>{//! Твій код
return new Promise(o=>{setTimeout(()=>{o(e)},e)})},l=e=>console.log(`Resolved after ${e}ms`);s(2e3).then(l);s(1e3).then(l);s(1500).then(l);
