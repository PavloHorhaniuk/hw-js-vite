var f=(e,o,l)=>{if(!o.has(e))throw TypeError("Cannot "+l)};var i=(e,o,l)=>(f(e,o,"read from private field"),l?l.call(e):o.get(e)),u=(e,o,l)=>{if(o.has(e))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(e):o.set(e,l)},m=(e,o,l,a)=>(f(e,o,"write to private field"),a?a.call(e,l):o.set(e,l),l);import"./modulepreload-polyfill-3cfb730f.js";const y={username:"Petro",showThis(){console.log(this)},showName(){console.log(this.username)}};y.showThis();//! {username: "Petro", showThis: ƒ, showName: ƒ}
y.showName();//! 'petro'
//! Приклад визначення this в методі об'єкта всередині стрілочної функції
console.warn("Приклад визначення this в методі об'єкта всередині стрілочної функції:");const t={username:"Mango",showThis4(){console.log("this in showThis4: ",this);//! {username: 'Mango', showThis4: ƒ}
console.log("username in showThis2: ",this.username);//! Mango
console.log("`  `  `  `  `  `  `  `  `  `  `"),(()=>{console.log("this in function foo():",this);//! {username: 'Mango', showThis4: ƒ}
console.log("username by this in function foo():",this.username);//! Mango
console.log("username in function foo():",t.username);//! Mango
})();//! Mango
}};console.log("user4:",t);//! {username: 'Mango', showThis2: ƒ}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");t.showThis4();//! this in showThis4: {username: 'Mango', showThis4: ƒ}
//! username in showThis2: Mango
//!  `  `  `  `  `  `  `  `  `  `  `
//! this in function foo(): {username: 'Mango', showThis4: ƒ}
//! username by this in function foo(): Mango
//! username in function foo(): Mango
console.log("---------------------------------------------------------------------------------------------");const r={legs:4};console.log("animal:",r);//! {legs: 4}
const n=Object.create(r);n.name="Манго";console.log("dog:",n);//! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("animal.isPrototypeOf(dog):",r.isPrototypeOf(n));//! true
//! Метод hasOwnProperty()
console.warn("Метод hasOwnProperty():");console.log("dog:",n);//! {name: 'Манго', 🔻 [[Prototype]]: Object ▶️ legs:4}
console.log("`  `  `  `  `  `  `  `");for(const e in n)console.log(`${e}: ${n[e]}`);console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");console.log('dog.hasOwnProperty("name"):',n.hasOwnProperty("name"));//! true
console.log('dog.hasOwnProperty("legs"):',n.hasOwnProperty("legs"));//! false
console.log("`  `  `  `  `  `  `  `  `  `  `  `");for(const e in n)if(n.hasOwnProperty(e)){console.log(`${e}: ${n[e]}`);//! name: Манго
}console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");//! Оголошення класу
console.warn("Оголошення класу:");class h{}console.log("User:",h);//! {}
console.log("---------------------------------------------------------------------------------");//! Екземпляр класу
console.warn("Екземпляр класу:");const _=new h;console.log("mango:",_);//! {}
const O=new h;console.log("poly:",O);//! {}
console.log("---------------------------------------------------------------------------------");//! Конструктор класу
console.warn("Конструктор класу:");class w{constructor(o,l){this.name=o,this.email=l}}console.log("User1:",w);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const P=new w("Манго","mango@mail.com");console.log("mango1:",P);//! User1 {name: 'Манго', email: 'mango@mail.com'}
const b=new w("Поли","poly@mail.com");console.log("poly1:",b);//! User1 {name: 'Поли', email: 'poly@mail.com'}
console.log("---------------------------------------------------------------------------------");//! Об'єкт параметрів
console.warn("Об'єкт параметрів:");class p{constructor({name:o,email:l,phone:a}){this.name=o,this.email=l,this.phone=a}}console.log("User2:",p);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const T=new p({name:"Манго",email:"mango@mail.com",phone:"111-11-11"});console.log("mango2:",T);//! User2 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
const d=new p({name:"Поли",email:"poly@mail.com",phone:"222-22-22"});console.log("poly2:",d);//! User2 {name: 'Поли', email: 'poly@mail.com', phone: '222-22-22'}
console.log("---------------------------------------------------------------------------------");//! Методи класу
console.warn("Методи класу:");class E{constructor({name:o,email:l,phone:a}){this.name=o,this.email=l,this.phone=a}getEmail(){return this.email}changeEmail(o){this.email=o}}console.log("User3:",E);//!ц
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const g=new E({name:"Манго",email:"mango@mail.com",phone:"111-11-11"});console.log("mango1_before:",g);//! User1 {name: 'Манго', email: 'mango@mail.com', phone: '111-11-11'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("email_before:",g.getEmail());//! email_before: mango@mail.com
g.changeEmail("mango-NEW@mail.com");console.log("email_after:",g.getEmail());//! email_after: mango-NEW@mail.com
console.log("mango1_after:",g);//! User1 {name: 'Манго', email: 'mango-NEW@mail.com', phone: '111-11-11'}
console.log("---------------------------------------------------------------------------------------");//! Геттери і сеттери
console.warn("Геттери і сеттери:");var c;class U{constructor({name:o,email:l,phone:a}){u(this,c,void 0);this.name=o,m(this,c,l),this.phone=a}getEmail(){return i(this,c)}changeEmail(o){m(this,c,o)}get email(){return i(this,c)}set email(o){if(o===""){console.error("Помилка! Пошта не може бути порожнім рядком!");return}m(this,c,o)}}c=new WeakMap;console.log("User4:",U);//!
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");const s=new U({name:"Манго",email:"mango@mail.com",phone:"111-11-11"});console.log("mango3_before:",s);//! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango@mail.com'}
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");console.log("email_before1:",s.getEmail());//! email_before: mango@mail.com
s.changeEmail("mango-NEW@mail.com");console.log("email_after1:",s.getEmail());//! email_after: mango-NEW@mail.com
console.log("email_before2:",s.email);//! email_after1: mango-NEW@mail.com
s.email="mango-SET@mail.com";console.log("email_after2:",s.email);//! email_after2: mango-SET@mail.com
console.log("mango3_after:",s);//! User3 {name: 'Манго', phone: '111-11-11', #email: 'mango-SET@mail.com'}
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");s.email="";//! Помилка! Пошта не може бути порожнім рядком!
console.log("---------------------------------------------------------------------------------------");
