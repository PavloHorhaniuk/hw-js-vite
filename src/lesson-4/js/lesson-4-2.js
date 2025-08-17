

// Створити розмітку з двома числовими полями та кнопкою.При натисканні
// на кнопку перевіряти, чи сума значень полів більша за 10, якщо так,
// то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".


document.getElementById('checkButton2').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('numberField1').value.trim());
    const num2 = parseFloat(document.getElementById('numberField2').value.trim());
    const messageDiv = document.getElementById('message2');

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        if (sum > 10) {
            messageDiv.textContent = 'Сума більша за 10';
            messageDiv.style.color = 'green';
        } else {
            messageDiv.textContent = 'Сума менша або дорівнює 10';
            messageDiv.style.color = 'red';
        }
    } else {
        messageDiv.textContent = 'Будь ласка, введіть коректні числа в обидва поля';
        messageDiv.style.color = 'red';
    }
});



