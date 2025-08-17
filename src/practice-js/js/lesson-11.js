
const array = [2, 21, 34, 89, 144];
console.log('Array', array)

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};

//todo: Приклад-2: створення об'єкта:
let object = {0: 2, 1: 21, 2: 34, 3: 89, 4: 144};

//? Змінемо запис об'єкта не змінюючи його властивостей:
object = {
    0: 2,
    1: 21,
    2: 34,
    3: 89,
    4: 144
};
console.log('Object', object)

//? Замінемо "індекси"(властивості (properties)) на інші:
const object2 = {
    перший: 2,
    другий: 21,
    третій: 34,
    четвертий: 89,
    "п'ятий": 144,
    // перший: 6765, //! ❓❓❓
};
console.log('Object 2', object2)
console.log("п'ятий")

//? Замінемо послідовність "індексів"(властивостей (properties))
//? та їх знаачень на іншу:
const object3 = {
    "п'ятий": 144,
    четвертий: 89,
    перший: 2,
    третій: 34,
    другий: 21
};
console.log('Object 3', object3)