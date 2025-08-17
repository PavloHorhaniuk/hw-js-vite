// Створити розмітку з формою з полями введення та кнопкою.
// При натисканні на кнопку перевіряти, чи введене число більше
// за 10 та менше за 20, якщо так, то виводити повідомлення
// "Число входить в діапазон від 10 до 20",
// якщо ні — "Число не входить в діапазон від 10 до 20".

function checkNumber() {
    var number = document.getElementById("numberInput").value;
    var output = document.getElementById("output");

    if (number > 10 && number < 20) {
        output.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        output.textContent = "Число не входить в діапазон від 10 до 20";
    }
}

document.getElementById("checkButton3").addEventListener("click", checkNumber);