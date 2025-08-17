//? Hапиши скрипт входження числа <number>
//?  у відрізок зазначений ВІД <х1> і ДО <х2>
//? та виведи в консоль ЧОТИРИ варіанти
//? знаходження числа <number>:
//? - ДО <х1>
//? - ПІСЛЯ <х2>
//? - ВІД <х1> ДО <х2>
//? - ДО <х1> або ПІСЛЯ <х2>
const x1 = 10;
const x2 = 30;
let number = 12;

number = prompt("Введіть число");

// number = Number(number)

number = number.trim();

console.log("number: ", number);

console.log(typeof number)

//todo: var.1
console.log(`Число ${number} входить у відрізок ДО ${x1}? `, number < x1);


console.log(`Число ${number} входить у відрізок ПІСЛЯ ${x2}? `, number > x2);


console.log(`Число ${number} входить у відрізок ВІД ${x1} ДО ${x2}? `, number >= x1 && number <= x2);


console.log(`Число ${number} входить у відрізок ДО ${x1} або ПІСЛЯ ${x2}? `, number < x1 || number >= x2);

console.log(`Чи дорівнює ${number} ${x1}?`, number === x1)


console.log("------------------------------------------------------");

//todo: var.2
if (number < x1) {
    console.log(`Число ${number} входить у відрізок ДО ${x1}`);
    console.log(`Число ${number} входить у відрізок ДО ${x1} або ПІСЛЯ ${x2}`)
  } else if (number > x2) {
    console.log(`Число ${number} входить у відрізок ПІСЛЯ ${x2}`);
    console.log(`Число ${number} входить у відрізок ДО ${x1} або ПІСЛЯ ${x2}`)
  } else if (number >= x1 && number <= x2) {
    console.log(`Число ${number} входить у відрізок ВІД ${x1} ДО ${x2}`);
    console.log(`Число ${number} НЕ входить у відрізок ДО ${x1} або ПІСЛЯ ${x2}`)
  } else {
    console.log(`Число ${number} НІКУДИ не входить!`);
  }


//   if (number < x1) {
//     console.log(`Число ${number} входить у відрізок ДО ${x1}`);
//   }


const camelCase = _.camelCase('title-lesson');
_.camelCase('title-lesson');

console.log(camelCase)


const endsWith = _.endsWith('I like learning Java Script', "Script");

console.log(endsWith)

const kebabCase = _.kebabCase('Foo Bar');

console.log(kebabCase)