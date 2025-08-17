import"./modulepreload-polyfill-3cfb730f.js";//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");console.log(`%c
    масив.reduce((previousValue, element, index, array) => {
        // тіло колбек-функції
    }, initialValue);
    `,"color: blue; font-size: 18px");console.warn("Приклад використання метода reduce():");const g=[2,7,3,14,6],i=[4,14,6,28,12];console.log("array:",g);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const u=g.reduce((o,e,n)=>(console.log(`Iteration-${n+1}:  previousValue: ${o},  number: ${e}  ->  return ${o+e}`),o+e),0);console.log("total:",u);//! 32
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");let r=0;for(const o of i)r=r+o,console.log(r);//! Масив об'єктів
console.warn("Масив об'єктів:");const t=[{name:"Манго",score:83},{name:"Полі",score:59},{name:"Аякс",score:37},{name:"Ківі",score:94},{name:"Х'юстон",score:64}];console.log("students:",t);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const d=t.reduce((o,e)=>o+e.score,0);console.log("totalScore:",d);//! 337
const p=d/t.length;//! 67.4
console.log("averageScore:",p);console.log("-------------------------------------------------------------");//! Просунутий reduce (сума усіх лайків)
console.warn("Просунутий reduce (сума усіх лайків):");const a=[{id:"000",likes:5,tags:["js","nodejs"]},{id:"001",likes:2,tags:["html","css"]},{id:"002",likes:17,tags:["html","js","nodejs"]},{id:"003",likes:8,tags:["css","react"]},{id:"004",likes:0,tags:["js","nodejs","react"]}];console.log("tweets1:",a);console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const S=a.reduce((o,e)=>o+e.likes,0);console.log("likes:",S);//! 32
const b=o=>o.reduce((e,n)=>e+n.likes,0);console.log("likes with countLikes:",b(a));//! 32
console.log("-------------------------------------------------------------");//! Метод sort()
console.warn("Синтаксис методу sort():");console.log(`%c
    массив.sort();
    `,"color: blue; font-size: 18px");//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");console.log(`%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");const s=[27,2,41,4,7,3,75],m=[...s].sort(),w=[...s].sort((o,e)=>o-e),k=[...s].sort((o,e)=>e-o);console.log("scores4:",s);//! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:",m);//! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:",w);//! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores4New:",k);//! [75, 41, 27, 7, 4, 3, 2]
//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");console.log(`%c
    firstString.localeCompare(secondString)
    `,"color: blue; font-size: 18px");console.log("-------------------------------------------------------------------------------");console.log('"a".localeCompare("b"):',"a".localeCompare("b"));//! -1
console.log('"b".localeCompare("a"):',"b".localeCompare("a"));//! 1
console.log('"a".localeCompare("a"):',"a".localeCompare("a"));//! 0
console.log('"b".localeCompare("b"):',"b".localeCompare("b"));//! 0
console.log("-------------------------------------------------------------------------------");const l=["Віка","андрій","Олег","юля","Борис","катя"];console.log("students2:",l);//! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']
const f=[...l].sort();console.log("inAlphabetOrder2Old:",f);//! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']
const C=[...l].sort((o,e)=>o.localeCompare(e));console.log("inAlphabetOrder2New:",C);//! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']
const O=[...l].sort((o,e)=>e.localeCompare(o));console.log("inReversedOrder2New:",O);//! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']
//! Метод toSorted()
console.warn("Синтаксис методу toSorted():");console.log(`%c
    массив.toSorted();
    `,"color: blue; font-size: 18px");console.log(`%c
    массив.toSorted((a, b) => {
        // тіло колбек-функції
    });
    `,"color: blue; font-size: 18px");const c=[27,2,41,4,7,3,75];console.log("scores5_before:",c);//! [27, 2, 41, 4, 7, 3, 75]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const h=c.toSorted((o,e)=>o-e),N=c.toSorted((o,e)=>e-o);console.log("ascendingScores5:",h);//! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores5:",N);//! [75, 41, 27, 7, 4, 3, 2]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("scores5_after:",c);//! [27, 2, 41, 4, 7, 3, 75]
console.log("-------------------------------------------------------------------------------");
