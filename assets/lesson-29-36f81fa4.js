import"./modulepreload-polyfill-3cfb730f.js";//! Promise.race()
//! Promise.any()
const i=3e3,s=(e,o)=>new Promise((r,t)=>{setTimeout(()=>{o>=i?r(e):t("❌ Error!")},o)}),m=s("promiseA value",1e3),c=s("promiseB value",3001),l=s("PromiseC value",3e3),n=Date.now();Promise.any([m,c,l]).then(e=>{const o=Date.now();console.log("Проміс закінчив роботу за: ",o-n,"мс"),console.log("✅ Promise.any([promiseA, promiseB promiseC]).then(value):",e)}).catch(e=>{const o=Date.now();console.log("Проміс закінчив роботу за: ",o-n,"мс"),console.log(e)});
