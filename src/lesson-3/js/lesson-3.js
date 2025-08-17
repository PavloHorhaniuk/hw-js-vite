console.log('Lesson-3 JS');

//? Спочатку зробити дві змінні: 
    //? першу - <myFavoriteActor> або <myFavoriteActress> 
    //? і значенням = "Ім'я вашого улюбленного актора або актриси"
    //? наприклад, "Russell Crowe" або "Juliette Binoche"
    //? та другу - <male> або <female> зі значенням = "my favorite actor's name" 
    //? або "my favorite actress's name".
    //? Отримати ОСТАННІЙ символ (в обох прикладах це - "e") 
    //? змінної <myFavoriteActor> або <myFavoriteActress>
    //? та записати це значення у третю змінну <lastCharacter>.
    //? Зробити перетворення значення змінної <lastCharacter> 
    //? на ВЕЛИКУ(заглавну літеру) - "E" (буде в обох прикладах).
    //? Вивести в консоль повідомлення, використовуючи 
    //? значення всіх трьох змінних у такому форматі:
    //? "The last letter in my favorite actor's Russell Crowe is 'E'!" або
    //? "The last letter in favorite actress's Juliette Binoche is 'E'!"


    // Створюємо змінні
let myFavoriteActor = "Anthony Hopkins"; // Заміна на "Anthony Hopkins" для актора;
let male = "my favorite actor's name"; // Для актриси змінити на female = "my favorite actress's name";

// Отримуємо останній символ зі змінної myFavoriteActor;
let lastCharacter = myFavoriteActor[myFavoriteActor.length - 1];

// Перетворюємо значення lastCharacter на велику літеру;
lastCharacter = lastCharacter.toUpperCase();

// Виводимо результат у консоль;
console.log(`The last letter in ${male} ${myFavoriteActor} is '${lastCharacter}'!`);