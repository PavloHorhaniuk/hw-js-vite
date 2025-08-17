//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
//! Код виконаного завдання
const { name, age, hobby, premium } = userA

console.log(name);
console.log(age);
console.log(hobby);
console.log(premium);

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: 'Mango', age: 2 };
//! Код виконаного завдання

const { name: userName, age: userAge } = userB

console.log(userName);
console.log(userAge);

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
    count: 11,
    employeePerformanceLists: [
        {
            ann: 29,
            david: 35,
            helen: 1,
            lorence: 99,
        },
        {
            poly: 12,
            mango: 17,
            ajax: 4,
        },
        {
            lux: 147,
            david: 21,
            kiwi: 19,
            chelsy: 38,
        }
    ],
};
//! Код виконаного завдання

const {
    count,
    employeePerformanceLists: [
        { ann, david: david1, helen, lorence },
        { poly, mango, ajax },
        { lux, david: david2, kiwi, chelsy }
    ]
} = employeePerformance

console.log(ann);
console.log(david1);
console.log(helen);
console.log(lorence);

console.log(poly);
console.log(mango);
console.log(ajax);

console.log(lux);
console.log(david2);
console.log(kiwi);
console.log(chelsy);

console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
    count: 6,
    employeeSalaryLists: [
        {
            mango: 100,
            poly: 150,
            alfred: 80,
        },
        {
            kiwi: 200,
            lux: 50,
            chelsy: 150,
        }
    ],
};

const {
    employeeSalaryLists: [
        { mango: mango1, poly: poly1, alfred },
        { kiwi: kiwi1, lux: lux1, chelsy: chelsy1 },
    ],
} = employeeSalaries
//! Код виконаного завдання
console.log(mango1);
console.log(poly1);
console.log(alfred);

console.log(kiwi1);
console.log(lux1);
console.log(chelsy1);

console.log("--------------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
    {
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроїд',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захоплення',
        price: 1200,
        quantity: 2
    },
];
//! Код виконаного завдання

const [
    { name: name1, price: price1, quantity: quantity1 },
    { name: name2, price: price2, quantity: quantity2 },
    { name: name3, price: price3, quantity: quantity3 },
    { name: name4, price: price4, quantity: quantity4 }
] = products;

console.log("Продукт 1:", name1, "- Ціна:", price1, "- Кількість:", quantity1);
console.log("Продукт 2:", name2, "- Ціна:", price2, "- Кількість:", quantity2);
console.log("Продукт 3:", name3, "- Ціна:", price3, "- Кількість:", quantity3);
console.log("Продукт 4:", name4, "- Ціна:", price4, "- Кількість:", quantity4);
console.log("--------------------------------------------------");



//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
    //todo: Поточний баланс рахунку
    balance: 0,
    //todo:  Історія транзакцій
    transactions: [],
    transactionId: 1,

    //todo:  Метод створює і повертає об'єкт транзакції.
    //todo:  Приймає суму і тип транзакції.
    createTransaction(amount, type) {
        return {
            id: this.transactionId++,
            type,
            amount,
        };
    },

    //todo:  Метод відповідає за додавання суми до балансу.
    //todo:  Приймає суму танзакції.
    //todo:  Викликає createTransaction для створення об'єкта транзакції
    //todo:  після чого додає його в історію транзакцій
    deposit(amount) {
        if (amount <= 0){
            console.log("Сума поповнення повинна бути більше 0!");
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
        console.log(`Поповнено: ${amount} грн. Новий баланс: ${this.balance} грн.`);
    },

    //todo:  Метод відповідає за зняття суми з балансу.
    //todo:  Приймає суму танзакції.
    //todo:  Викликає createTransaction для створення об'єкта транзакції
    //todo:  після чого додає його в історію транзакцій.
    //todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
    //todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів для зняття.");
            return;
        }
        if (amount <= 0) {
            console.log("Сума зняття повинна бути більше 0!");
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction)
        this.balance -= amount;
        console.log(`Знято: ${amount} грн. Новий баланс: ${this.balance} грн.`);
    
    },

    //todo:  Метод повертає поточний баланс
    getBalance() {
        return this.balance;
    },

    //todo:  Метод шукає і повертає об'єкт транзакції по id
    getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id) || null; 
    },

    //todo:  Метод повертає кількість коштів
    //todo:  певного типу транзакції з усієї історії транзакцій
    getTransactionTotal(type) { 
        return this.transactions
        .filter(transaction => transaction.type === type)
        .filter((total, transaction) => total + transaction.amount, 0);
    },
};
//! Код виконаного завдання

//! Виклики методів для перевірки працездатності
account.deposit(500);
account.deposit(300);
account.withdraw(200);
account.withdraw(700); // Недостатньо коштів

console.log("Поточний баланс:", account.getBalance());

console.log("Деталі транзакції ID 2:", account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(account.transactions[0].id));

console.log("Загальна сума депозитів:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW)); 


console.log("--------------------------------------------------");
