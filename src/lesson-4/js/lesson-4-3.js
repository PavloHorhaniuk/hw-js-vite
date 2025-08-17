// Створити розмітку з текстовим полем та кнопкою.При натисканні на
// кнопку перевіряти, чи введений текст містить слово "JavaScript",
// якщо так, то виводити повідомлення "Текст містить слово JavaScript",
// якщо ні — "Текст не містить слово JavaScript".

const userInput = prompt("Введіть текст:");

// Перевіряємо, чи містить текст слово "JavaScript"
if (userInput && userInput.includes("JavaScript")) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}