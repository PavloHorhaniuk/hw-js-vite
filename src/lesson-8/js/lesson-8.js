//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
 );
 //? Перетворюємо масив на рядок:
 //? Напиши скрипт, який об'єднує всі елементи массиву [friends] в один рядок.
 //? Або створи свій масив де елементів може бути довільна кількість. 
 //? Нехай елементи массива в створеному рядку будут розділені комою.
 //? Зроби два варіанта створеня такого рядку:
 //?  - Спочатку за допомогою циклу for (var.1)
 //?  - Потім за допомогою метода join() (var.2)
 const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
 let string = '';
 console.log("string:", string);
 console.log("friends:", friends);
 console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
 
 //todo: var.1 - через for
 console.warn("var.1 - через for");
 //! Код виконаного завдання

 for (let i = 0; i < friends.length; i++) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ',';
    }
}
console.log("Результат через for:", string);

 console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");
 
 //todo: var.2 - через join()
 console.warn("var.2 - через join()");
 //! Код виконаного завдання

 string = friends.join(',');
console.log("Результат через join():", string);

 console.log("--------------------------------------------------");
 
 
 
 //todo [2]
 console.log(
     "%c [2] ",
     "color: yellow; background-color: #2274A5",
  );
 //? Створюємо колекцією карток:
 //? Використовуючи будь який з вивчених методів масивів 
 //? створи масив [cards] такий як в цьому прикладі:
 // cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
 //? Можна використовувати будь-які з вивчених методів,
 //? наприклад, рush(), splice(), concat() або інші методи.
 //! Код виконаного завдання

 const cards = [];
for (let i = 1; i <= 5; i++) {
    cards.push(`Картка-${i}`);
}
console.log("Результат через push():", cards);

 console.log("---------------------------------------------");
 
 
 //todo [3]
 console.log(
     "%c [3] ",
     "color: yellow; background-color: #2274A5",
 );
 //? Видаляємо картку за її їндексом:
 //? Знайди їндекс цієї картки за допомогою метода indexOf():
 const cardToRemove = 'Картка-3';
 //? та видали її з існуючого вже масив [cards] за допомогою метода масиву.
 //! Код виконаного завдання

 const index = cards.indexOf(cardToRemove);
 if (index !== -1) {
     // Видаляємо картку за індексом
     cards.splice(index, 1);
 }

 console.log("Результат після видалення:", cards);
 console.log("---------------------------------------------");
 
 
 
 //todo [4]
 console.log(
     "%c [4] ",
     "color: yellow; background-color: #2274A5",
 );
 //? Додаємо картку за її їндексом:
 //? Додай таку картку: 
 const cardToInsert = 'Картка-6';
 //? в кінець існуючого вже масиву [cards]
 //?  за допомогою будь-якого метода масиву.
 //! Код виконаного завдання

 cards.push(cardToInsert);
 console.log("Результат після додавання:", cards);

 console.log("---------------------------------------------");
 
 
 //todo [5]
 console.log(
     "%c [5] ",
     "color: yellow; background-color: #2274A5",
 );
 //? Оновлення картки за її їндексом:
 //? Знайди таку картку в існуючому вже масиві [cards].
 const cardToUpdate = 'Картка-4';
 //? Потім онови її, змінивши на 'Картка-4_new'.
 //! Код виконаного завдання

 const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate !== -1) {
    // Оновлюємо картку
    cards[indexToUpdate] = 'Картка-4_new';
}

console.log("Результат після оновлення:", cards);

 console.log("---------------------------------------------");


 //? Перетворити масив:
const arrayOriginal = ["мango-10", "Kiwi-2", "Monkong-2", "Singu-2", "Mango-1", "Ajax-1", "Poly-1", "singu-20"];
//? на масив arrayNew:
//todo: ["Mango-1", "Ajax-1", "Poly-1", "Kiwi-2", "Monkong-2", "Singu-2"];
//? не змінюючи значення елементів та використовуючи методи:
//? push(), pop(), unshift(), shift(),
//? slice(), splice(), concat() за власним бажанням!
//! Код виконаного завдання
let arrayNew = [];

// Використовуємо метод slice() для вибірки потрібних елементів
const part1 = arrayOriginal.slice(4, 7); // ["Mango-1", "Ajax-1", "Poly-1"]
const part2 = arrayOriginal.slice(1, 4); // ["Kiwi-2", "Monkong-2", "Singu-2"]

// Об'єднуємо частини за допомогою concat()
arrayNew = part1.concat(part2);
console.log("arrayOriginal:", arrayOriginal);
console.log("arrayNew:", arrayNew);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



 