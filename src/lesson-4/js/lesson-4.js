
// Створити розмітку з двома текстовими полями та кнопкою.При натисканні на кнопку перевіряти,
// чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені",
// якщо ні — "Не всі поля заповнені".


document.getElementById('checkButton').addEventListener('click', function() {
    const field1 = document.getElementById('field1').value.trim();
    const field2 = document.getElementById('field2').value.trim();
    const messageDiv = document.getElementById('message');

    if (field1 && field2) {
        messageDiv.textContent = 'Обидва поля заповнені';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Не всі поля заповнені';
        messageDiv.style.color = 'red';
    }
});

