// Усі операції localStorage з try...catch + JSON.parse/stringify
export const STORAGE_KEY = 'students';

// Безпечно прочитати масив студентів з localStorage
export function loadStudentsSafe() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null; // нема запису
        const parsed = JSON.parse(raw); // може кинути помилку
        if (!Array.isArray(parsed)) throw new Error('Невірний формат: очікувався масив');
        return parsed;
    } catch (err) {
        alert('Помилка читання даних з localStorage (JSON.parse). Дані пошкоджені.\n' + err.message);
        console.error(err);
        return null;
    }
}

// Безпечно зберегти масив студентів у localStorage
export function saveStudentsSafe(dataArray) {
    try {
        const dataJSON = JSON.stringify(dataArray); // може кинути помилку
        localStorage.setItem(STORAGE_KEY, dataJSON);
        return dataJSON;
    } catch (err) {
        alert('Помилка збереження даних (JSON.stringify). Перевірте поля.\n' + err.message);
        console.error(err);
        return null;
    }
}