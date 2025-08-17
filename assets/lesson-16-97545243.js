import"./modulepreload-polyfill-3cfb730f.js";console.log("%c [1] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class i{constructor({login:e,email:s}){this.login=e,this.email=s}getInfo(){console.log(`Login: ${this.login}, Email: ${this.email}`)}}//! Код виконаного завдання ⤴️
console.log(i.prototype.getInfo);//! function
const g=new i({login:"Mangozedog",email:"mango@dog.woof"});g.getInfo();//! Login: Mangozedog, Email: mango@dog.woof
const h=new i({login:"Poly",email:"poly@mail.com"});h.getInfo();//! Login: Poly, Email: poly@mail.com
console.log("--------------------------------------------------");console.log("%c [2] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class a{constructor({name:e,age:s,followers:r}){this.name=e,this.age=s,this.followers=r}getInfo(){console.log(`Name ${this.name}, Age ${this.age}, Followers ${this.followers}`)}}//! Код виконаного завдання ⤴️
const p=new a({name:"Mango",age:2,followers:20});console.log(p.getInfo());//! User Mango is 2 years old and has 20 followers
const d=new a({name:"Poly",age:3,followers:17});console.log(d.getInfo());//! User Poly is 3 years old and has 17 followers
console.log("--------------------------------------------------");console.log("%c [3] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class m{constructor(e=[]){this.items=e}getItems(){return this.items}addItem(e){this.items||(this.items=[]),this.items.push(e)}removeItem(e){this.items=this.items.filter(s=>s!==e)}}//! Код виконаного завдання ⤴️
const l=new m(["Нанітоіди","Пролонгер","Залізні жупи","Антигравітатор"]),u=l.getItems();console.table(u);//! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
l.addItem("Дроїд");console.table(l.items);//! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
l.removeItem("Пролонгер");console.table(l.items);//! [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log("--------------------------------------------------");console.log("%c [4] ","color: yellow; background-color: #2274A5");//! Код виконаного завдання ⤵️
class f{constructor(e){this._value=e}get value(){return this._value}append(e){this._value+=e}prepend(e){this._value=e+this._value}pad(e){this._value=e+this._value+e}}//! Код виконаного завдання ⤴️
const t=new f(".");console.log(t.value);//! '.'
t.append("^");console.log(t.value);//! '.^'
t.prepend("^");console.log(t.value);//! '^.^'
t.pad("=");console.log(t.value);//! '=^.^='
console.log("--------------------------------------------------");console.log("%c [5] ","color: yellow; background-color: #2274A5");class c{static getSpecs(e){console.log(`maxSpeed: ${e.maxSpeed}, speed: ${e.speed}, isOn: ${e.isOn}, distance: ${e.distance}, price: ${e.price}`)}constructor({maxSpeed:e,price:s}){this.speed=0,this.price=s,this.maxSpeed=e,this.isOn=!1,this.distance=0}get price(){return this._price}set price(e){this._price=e}turnOn(){//! твій код
this.isOn=!0}turnOff(){//! твій код
this.isOn=!1,this.speed=0}accelerate(e){//! твій код
this.speed=Math.min(this.speed+e,this.maxSpeed)}decelerate(e){//! твій код
this.speed=Math.max(this.speed-e,0)}drive(e){//! твій код
this.isOn&&(this.distance+=e*this.speed)}}const o=new c({maxSpeed:200,price:2e3});o.turnOn();o.accelerate(50);o.drive(2);c.getSpecs(o);//! maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
o.decelerate(20);o.drive(1);o.turnOff();c.getSpecs(o);//! maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(o.price);//! 2000
o.price=4e3;console.log(o.price);//! 4000
console.log("--------------------------------------------------");
