
// 1.  Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

// 2.  Створити масив із трьох рядків. Додати до масиву ще одну рядків.

// 3.  Створити скрипт який поверне суму всіх чисел в масиві.

// 4.  Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

// 5.  Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

// 6.  Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

// 7.  Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.


let numbers = [1, 2, 3];

numbers[1] = 10;

console.log(numbers);

console.log('-------------------------------');

let strings = ["перший", "другий", "третій"];

strings.push("четвертий");

console.log(strings);

console.log('-------------------------------');

let numbers1 = [1, 2, 3, 4, 5];

let sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Сума чисел у масиві:", sum);

console.log('-------------------------------');

let numbers2 = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

console.log('-------------------------------');

let strings1 = ["apple", "banana", "cat", "elephant", "dog"];

for (let i = 0; i < strings1.length; i++) {
    if (strings1[i].length > 5) {
        console.log(strings1[i]);
    }
}

console.log('-------------------------------');

let numbers3 = [12, 45, 3, 67, 23, 89, 56, 78, 11, 54];

let max = Math.max(...numbers3);

console.log("Максимальне значення в масиві:", max);

console.log('-------------------------------');

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] % 2 === 0) {
        console.log(numbers3[i]);
    }
}