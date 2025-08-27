// const isSuccess = true; //* ✅
// // const isSuccess = false; //! ❌

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("✅ Success! Value passed to resolve function");
//         } else {
//             reject("❌ Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// //todo ⏳
// console.log("promise ⏳:", promise); //! Promise {<pending>}

// //* ✅ або ❌
// setTimeout(() => {
//     console.log("promise_setTimeout:", promise);
//     //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
//     //? або
//     //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
// }, 2500);

// const delayTime = 3000; //* ✅
// // const delayTime = 2500; //! ❌

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay <= delayTime) {
//                 resolve(text);
//             } else {
//                 reject("❌ Error!");
//             };
//         }, delay)  
//     });
// };


// // todo: var.1
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// // const promiseA = makePromise("promiseA value", 3000);
// // const promiseB = makePromise("promiseB value", 1000);
// const start = Date.now();


// Promise.all([promiseA, promiseB])
//     .then((value) => {
//         const end = Date.now();
//         console.log("Проміс закінчив роботу за: ", end - start, 'мс');
//         console.log("✅ Promise.all([promiseA, promiseB]).then(value):", value)
//     }
// )

//     .catch(error => console.log(error));

//! Promise.race()
//? ✴️ Повертає виконаний або відхилений проміс,
//? залежно від того, з яким результатом завершиться ❗️«НАШВИДШИЙ»❗️ 
//? з переданих промісів, зі значенням або причиною його відхилення.

//? ✳️ Коли хоча б один проміс з масиву виконається
//? або буде відхилений, проміс, що повертається,
//? перейде у стан resolved або rejected,
//? а всі інші будуть відкинуті.


// // const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ❌
// // const delayTime = 500;

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay <= delayTime) {
//                 resolve(text);
//             } else {
//                 reject("❌ Error!");
//             };
//         }, delay)
//     });
// };


// // todo: var.1
// // const promiseA = makePromise("promiseA value", 1000);
// // const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);
// const start = Date.now();


// Promise.race([promiseA, promiseB])
//     .then((value) => {
//         const end = Date.now();
//         console.log("Проміс закінчив роботу за: ", end - start, 'мс');
//         console.log("✅ Promise.race([promiseA, promiseB]).then(value):", value)
//     }
//     )

//     // .catch(error => console.log(error));

//     .catch((error) => {
//         const end = Date.now();
//         console.log("Проміс закінчив роботу за: ", end - start, "мс");
//         console.log(error);
//     });

// Promise.race([promise1, promise2, promise3, ...])

//! Promise.any()
//? ✴️ Схожий на Promise.race, але чекає лише
//? на ❗️ПЕРШИЙ УСПІШНО ВИКОНАНИЙ перший❗️ проміс
//? і отримує його результат.
//? Якщо ж всі надані проміси завершуються з помилкою,
//? то повертається проміс, що завершується з помилкою
//? за допомогою AggregateError — спеціального об’єкта помилки
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError), 
//? який зберігає всі помилки промісів у своїй властивості errors.

// Promise.any([promise1, promise2, promise3, ...])


// const delayTime = 3000; //* ✅
// // const delayTime = 2500; //! ❌
// // const delayTime = 500;

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay >= delayTime) {
//                 resolve(text);
//             } else {
//                 reject("❌ Error!");
//             };
//         }, delay)
//     });
// };


// // todo: var.1
// // const promiseA = makePromise("promiseA value", 1000);
// // const promiseB = makePromise("promiseB value", 3000);
// // const promiseC = makePromise("PromiseC value",2500);

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3001);
// const promiseC = makePromise("PromiseC value", 3000);

// // todo: var.2
// // const promiseA = makePromise("promiseA value", 3000);
// // const promiseB = makePromise("promiseB value", 1000);
// const start = Date.now();


// Promise.any([promiseA, promiseB, promiseC])
//     .then((value) => {
//         const end = Date.now();
//         console.log("Проміс закінчив роботу за: ", end - start, 'мс');
//         console.log("✅ Promise.any([promiseA, promiseB promiseC]).then(value):", value)
//     }
//     )

//     // .catch(error => console.log(error));

//     .catch((error) => {
//         const end = Date.now();
//         console.log("Проміс закінчив роботу за: ", end - start, "мс");
//         console.log(error);
//     });

//! new Promise ----> Promise.resolve() і Promise.reject()
// console.warn("new Promise ----> Promise.resolve() і Promise.reject():");
// //? ✴️ Статичні методи для створення промісів,
// //? що миттєво успішно виконуються або відхиляються.
// //? Працюють аналогічно new Promise() за винятком
// //? можливості вказати затримку, але мають коротший синтаксис.
// //* ✅ Fulfilled promise
// new Promise(resolve => resolve("✅ SUCCESS value from new Promise"))
//     .then(value => {
//         console.log("new Promise:", value)
//         console.log('typeof value', typeof value)
//     })

//     Promise.resolve("✅✅ SUCCESS value from Promise.resolve")
//     .then(value => {
//         console.log("Promise.resolve:", value);
//         console.log("typeof Promise.resolve:", typeof value); //! string
//         console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
//     }
// );

//! ❌ Rejected promise
new Promise((resolve, reject) => reject("❌ ERROR from new Promise"))
    .catch(error =>
        console.error("new Promise:", error)
    );

Promise.reject("❌❌ ERROR from from Promise.resolve")
    .catch(error => {
        console.error("Promise.resolve:", error);
        console.log("------------------------------------------------------------------------");
    });

//! Код до рефакторингу
//? ✳️ Ці методи використовуються для промісифікаціі функцій,
//? коли необхідно побудувати ланцюжок промісів
//? і вже є початкове значення.
//! Виконаємо рефакторинг наступного коду:
// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//         return {
//             success: false,
//             message: "❌ Guest name must not be empty",
//         };
//     };

//     return {
//         success: true,
//         message: `✅ Welcome ${guestName}`,
//     };
// };

// //* ✅
// setTimeout(() => {
//     console.warn("Код до рефакторингу:");
//     const result = makeGreeting("Mango");
//     console.log("result:", result); //! {success: true, message: '✅ Welcome Mango'}

//     if (result.success) {
//         console.log(result.message); //* ✅ Welcome Mango
//     } else {
//         console.error(result.message);
//     };
// }, 0);

// //! ❌
// setTimeout(() => {
//     const result = makeGreeting("");
//     console.log("result:", result); //! {success: false, message: '❌ Guest name must not be empty'}

//     if (result.success) {
//         console.log(result.message);
//     } else {
//         console.error(result.message); //! ❌ Guest name must not be empty
//         console.log("------------------------------------------------------------------------");
//     };
// }, 0);

// const makeGreeting = (guestName, callback) => {
//     if (guestName === "" || guestName === undefined) {
//         callback({
//             success: false,
//             message: "❌ Guest name must not be empty",
//         });
//         return;
//     };

//     callback({
//         success: true,
//         message: `✅ Welcome ${guestName}`,
//     });
// };

// //* ✅
// setTimeout(() => {
//     console.warn("Код з колбеком:");
//     makeGreeting("Mango", (result) => {
//         console.log("result:", result); 
//         if (result.success) {
//             console.log(result.message); //* ✅ Welcome Mango
//         } else {
//             console.error(result.message);
//         }
//     });
// }, 0);

// //! ❌
// setTimeout(() => {
//     makeGreeting("", (result) => {
//         console.log("result:", result); 
//         if (result.success) {
//             console.log(result.message);
//         } else {
//             console.error(result.message); //* ❌ Guest name must not be empty
//             console.log("------------------------------------------------------------------------");
//         }
//     });
// }, 0);

// const makeGreeting1 = (guestName, onSuccess, onError) => {
//     if (guestName === "" || guestName === undefined) {
//         onError("❌ Guest name must not be empty");
//         return;
//     }

//     onSuccess(`✅ Welcome ${guestName}`);
// };

// //* ✅ приклад використання
// setTimeout(() => {
//     console.warn("Виклик з валідним іменем:");
//     makeGreeting1(
//         "Mango",
//         (message) => console.log(message),      // onSuccess
//         (error) => console.error(error)         // onError
//     );
// }, 0);

// //! ❌ приклад використання
// setTimeout(() => {
//     console.warn("Виклик з пустим іменем:");
//     makeGreeting1(
//         "",
//         (message) => console.log(message),      // onSuccess
//         (error) => {
//             console.error(error);               // onError
//             console.log("------------------------------------------------------------------------");
//         }
//     );
// }, 0);


// const makeGreeting2 = guestName => {
//     if (guestName === "" || guestName === undefined) {
//         return Promise.reject(`❌ Guest name must not be empty`)
//     }


//     return Promise.resolve(`✅ Welcome ${guestName}`)
// }

// //* ✅2️⃣
// setTimeout(() => {
//     console.warn("Код після рефакторингу (крок-2):");
//     makeGreeting2("Mango")
//         .then(greeting => console.log(greeting)) //* ✅2️⃣ Welcome Mango
//         .catch(error => console.error(error));
// }, 0);

// //! ❌2️⃣
// setTimeout(() => {
//     makeGreeting2("")
//         .then(greeting => console.log(greeting))
//         .catch(error => {
//             console.error(error); //! ❌2️⃣ Guest name must not be empty
//             console.log("------------------------------------------------------------------------");
//         });
// }, 0);

// -----------------------------------

//! Promise.allSettled(promises)
//? ✴️ Метод Promise.allSettled(promises)
//? виконує всі проміси з переданого масиву
//? і повертає масив результатів кожного промісу
//? — навіть якщо деякі з них завершилися з помилкою.

//? ✴️ На відміну від Promise.all,
//? який припиняє роботу при першому відхиленому промісі,
//? allSettled чекає завершення всіх
//? і для кожного повертає об'єкт з:
//? 🔸 status - "fulfilled" (успішно виконаний) або "rejected" (відхилений);
//? 🔸 value - результат (якщо успішний);
//? 🔸 reason - причина помилки (якщо відхилено).

//? ✅ Де корисний Promise.allSettled:
//? 🔸 Коли потрібно дочекатися завершення всіх завдань,
//?    навіть якщо деякі з них впадуть.
//? 🔸 При паралельному завантаженні кількох ресурсів,
//?    де помилки деяких файлів не повинні переривати процес.




const delayTime = 2500;

const makePromise = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay <= delayTime) {
                resolve(text);
            } else {
                reject("❌ Error!");
            };
        }, delay)
    });
};

const promiseA = makePromise("promiseA value", 1000); //* ✅
const promiseB = makePromise("promiseB value", 3000); //! ❌
const promiseC = makePromise("promiseС value", 2000); //* ✅

Promise.allSettled([promiseA, promiseB, promiseC])
    .then(value => console.log("Promise.allSettled([promiseA, promiseB, promiseC]).then(value):\n", value))
    // .catch(error => console.log(error)) 
    .finally(() => { console.log("-------------------------------------------------------------------------------------"); });

//todo: Результат в конолі:
//? [
//*     0: { status: 'fulfilled', value: 'promiseA value' },
//!     1: { status: 'rejected', reason: '❌ Error!' },
//*     2: { status: 'fulfilled', value: 'promiseC value' }
//? ]
// console.log("-----------------------------------------------------------------------------------------");


//! Створюємо масив промісів з різним часом виконання:
// const promises = [
//     delayedPromise('Завдання 1', 2000), //* ✅
//     delayedPromise('Завдання 2', 1000, true), //! ❌
//     delayedPromise('Завдання 3', 3000), //* ✅
//     delayedPromise('Завдання 4', 1500, true), //! ❌
//     delayedPromise('Завдання 5', 2500) //* ✅
// ];

// Функція для створення промісу з затримкою
// function delayedPromise(name, delay, shouldReject = false) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`❌ Error! ${name}`);
//             } else {
//                 resolve(`${name} value`);
//             }
//         }, delay);
//     });
// }

// // Масив промісів
// const promises = [
//     delayedPromise('promiseA', 2000), //* ✅
//     delayedPromise('promiseB', 1000, true), //! ❌
//     delayedPromise('promiseC', 3000), //* ✅
//     delayedPromise('promiseD', 1500, true), //! ❌
//     delayedPromise('promiseE', 2500) //* ✅
// ];

// // Використовуємо Promise.allSettled
// Promise.allSettled(promises).then(results => {
//     console.log(results);
// });


// Функція для створення промісу з затримкою
// function delayedPromise(name, delay, shouldReject = false) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`❌ Error! ${name}`);
//             } else {
//                 resolve(`${name} value`);
//             }
//         }, delay);
//     });
// }

// // Масив промісів з інвертованою логікою
// const promises = [
//     delayedPromise('promiseA', 2000, true), //* ❌ тепер буде помилка
//     delayedPromise('promiseB', 1000),       //* ✅ тепер успішно
//     delayedPromise('promiseC', 3000, true), //* ❌ тепер буде помилка
//     delayedPromise('promiseD', 1500),       //* ✅ тепер успішно
//     delayedPromise('promiseE', 2500, true)  //* ❌ тепер буде помилка
// ];

// // Використовуємо Promise.allSettled
// Promise.allSettled(promises).then(results => {
//     // if (result.status === 'fulfilled') {
//     //     console.log(`Проміс ${index + 1}: ✅ Успіх → ${result.value}`);
//     // } else {
//     //     console.log(`Проміс ${index + 1}: ❌ Помилка → ${result.reason}`);
//     // };

//     console.log(results);
// });


// Завдання 1

// Напиши функцію delsoay(ms), яка повертає проміс,
//  що переходить в стан "resolved" через ms мілісекунд.
//  Значенням промісу, яке виповнилося має бути
//  та кількість мілісекунд, яку передали під час виклику функції delay.


const delay = ms => {
    //! Твій код
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
};
const logger = time => console.log(`Resolved after ${time}ms`);
// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
