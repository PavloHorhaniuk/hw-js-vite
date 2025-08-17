
// Завдання 1

// Напиши функцію logItems(array), яка отримує масив
//  і використовує цикл for,
//  який для кожного елемента масиву буде виводити
//  в консоль повідомлення в форматі
//   [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад,
//  для першого елемента масиву ['Mango', 'Poly', 'Ajax']
//  з індексом 0 буде виведено
//  '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const arrayNum = [8, 13, 21, 34, 55];

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Позиція елемента: ${[i + 1]}, ${array[i]}`);
    }
    console.log('---------------------------------')
}
logItems(arrayNum);

// Завдання 2

// Напиши скрипт підрахунку вартості гравіювання прикрас. 
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord) 
// приймаючу рядок (в рядку будуть тільки слова і прогалини) 
// і ціну гравіювання одного слова, і повертає 
// ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord){
    const words = message.split(' ');
    const wordCount = words.length;
    return wordCount * pricePerWord
}
console.log(calculateEngravingPrice("Прикраса на пам'ять", 10))

console.log('---------------------------------')


// Завдання 3

// Напиши функцію findLongestWord(string), 
// яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) 
// і повертає ПЕРШЕ найдовше слово в цьому рядку.

function findLongestWord(string){
    const words = string.split(' ');

    let longestWord = words[0];
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("Це тестовий рядок для перевірки"));

console.log('---------------------------------')

// Завдання 4

// Напиши функцію formatString(string) 
// яка приймає рядок і форматує його якщо необхідно.

// •  Якщо довжина рядка не перевищує 40 символів, 
// функція повертає її в початковому вигляді.

// •  Якщо довжина більше 40 символів, то функція 
// обрізає рядок до 40-ка символів і додає 
// в кінець рядка три крапки '...', після 
// чого повертає укорочену версію.

function formatString(string) {
    if (string.length <= 40) {
        return string;
    }
    return string.slice(0, 40) + '...';
}
console.log(formatString("Ця фукція перевіряє довжину рядка, тут може бути не більше 40 символів"));

console.log('---------------------------------')

// Завдання 5

// Напиши функцію checkForSpam(message), 
// приймаючу 1 параметр message — рядок. 
// Функція перевіряє її на вміст слів spam або sale. 
// Якщо знайшли заборонене слово, то функція повертає true, 
// якщо заборонених слів немає функція повертає false. 
// Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}
console.log(checkForSpam("Ця рядок містить слово spam")); // true
console.log(checkForSpam("Цей рядок містить слово SALE")); // true
console.log(checkForSpam("Звичайне повідомлення без заборонених слів")); // false

console.log('---------------------------------')



// Завдання 6

// Напиши скрипт з наступним функціоналом:

// •  При завантаженні сторінки користувачеві 
// пропонується в prompt ввести число. 
// Введення зберігається в змінну input і 
// додається в масив чисел numbers.

// •  Операція введення числа користувачем 
// і збереження в масив триває до тих пор, пір, 
// поки користувач не натисне Cancel в prompt.

// •  Після того як користувач припинив 
// введення натиснувши Cancel, якщо масив не порожній, 
// необхідно порахувати суму всіх елементів масиву
// і записати її в змінну total. 
// Використовуй цикл for або for...of.
//  Після чого в консоль виведи рядок 
//  'Загальна сума чисел дорівнює [сума]'.

function collectNumbers() {
    const numbers = [];
    let input;
    
    // Запитуємо числа у користувача
    while ((input = prompt("Введіть число (або натисніть Cancel для завершення):")) !== null) {
        let number = Number(input);
        
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Будь ласка, введіть коректне число!");
        }
    }
    
    // Обчислюємо суму, якщо масив не порожній
    if (numbers.length > 0) {
        let total = 0;
        for (let num of numbers) {
            total += num;
        }
        console.log(`Загальна сума чисел дорівнює ${total}`);
    } else {
        console.log("Масив чисел порожній, сума не обчислюється.");
    }
}

// Виклик функції
collectNumbers();

