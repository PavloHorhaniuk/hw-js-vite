export const STORAGE_KEY = 'students';

export function loadStudentsSafe() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) throw new Error('Очікувався масив студентів');
        return parsed;
    } catch (err) {
        alert('Помилка читання з localStorage (JSON.parse): ' + err.message);
        console.error(err);
        return null;
    }
}

export function saveStudentsSafe(dataArray) {
    try {
        const dataJSON = JSON.stringify(dataArray);
        localStorage.setItem(STORAGE_KEY, dataJSON);
        return dataJSON;
    } catch (err) {
        alert('Помилка збереження (JSON.stringify): ' + err.message);
        console.error(err);
        return null;
    }
}