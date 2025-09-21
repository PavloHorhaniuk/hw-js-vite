import { loadStudentsSafe, saveStudentsSafe, STORAGE_KEY } from './storage.js';

const $ = s => document.querySelector(s);

// UI refs
const statusEl = $('#status');
const addBtn = $('#add-btn');
const clearBtn = $('#clear-all');
const formEl = $('#student-form');
const formTitleEl = $('#form-title');
const saveBtn = $('#save-btn');
const cancelBtn = $('#cancel-btn');

const firstNameEl = $('#firstName');
const lastNameEl = $('#lastName');
const ageEl = $('#age');
const courseEl = $('#course');
const facultyEl = $('#faculty');
const editIndexEl = $('#edit-index');

const listEl = $('#students-list');

let dataArray = [];   // робочий масив об'єктів
let dataJSON = '';   // "дзеркало" (рядок JSON)
let template;         // скомпільований Handlebars шаблон

// ===== Допоміжні =====
function setStatus(text, type = '') {
    statusEl.textContent = text || '';
    statusEl.className = 'status ' + type;
}

function clearForm() {
    formEl.reset();
    editIndexEl.value = '';
}

function openForm(forEdit = false, student = null, index = null) {
    formEl.hidden = false;
    formTitleEl.textContent = forEdit ? 'Редагувати картку студента' : 'Нова картка студента';
    saveBtn.textContent = forEdit ? 'Оновити' : 'Додати';

    if (forEdit && student) {
        firstNameEl.value = student.firstName;
        lastNameEl.value = student.lastName;
        ageEl.value = student.age;
        courseEl.value = student.course;
        facultyEl.value = student.faculty;
        editIndexEl.value = String(index);
    } else {
        clearForm();
    }
}

function closeForm() {
    formEl.hidden = true;
    clearForm();
}

function validateStudent(s) {
    if (!s.firstName?.trim()) return 'Введіть імʼя';
    if (!s.lastName?.trim()) return 'Введіть прізвище';
    const age = Number(s.age);
    if (!Number.isFinite(age) || age < 14 || age > 100) return 'Вік має бути 14–100';
    const course = Number(s.course);
    if (!Number.isFinite(course) || course < 1 || course > 10) return 'Курс має бути 1–10';
    if (!s.faculty?.trim()) return 'Введіть факультет';
    return null;
}

// ===== Шаблон Handlebars =====
async function loadTemplate() {
    const res = await fetch('./templates/template-student-data.hbs');
    const hbs = await res.text();
    template = Handlebars.compile(hbs);
}

// ===== Ініціалізація даних =====
async function initData() {
    // 3) Якщо вже є localStorage["students"] — беремо ТІЛЬКИ його
    const fromLS = loadStudentsSafe();
    if (fromLS) {
        dataArray = fromLS;
        dataJSON = JSON.stringify(dataArray);
        return;
    }

    // 1) Інакше — перший запуск: беремо з students.json, пишемо в dataArray -> dataJSON -> localStorage
    try {
        const res = await fetch('./students.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const initial = await res.json();
        if (!Array.isArray(initial)) throw new Error('students.json має містити масив');
        dataArray = initial;

        dataJSON = saveStudentsSafe(dataArray);
        if (!dataJSON) {
            // якось не записалось — обнуляємо, щоб уникнути непередбачуваних станів
            dataArray = [];
            dataJSON = '[]';
        }
    } catch (err) {
        alert('Не вдалося завантажити students.json: ' + err.message);
        console.error(err);
        dataArray = [];
        dataJSON = saveStudentsSafe(dataArray) || '[]';
    }
}

// ===== Рендер списку (ДЖЕРЕЛО ДАНИХ — localStorage) =====
function renderListFromStorage() {
    const ls = loadStudentsSafe();
    const list = Array.isArray(ls) ? ls : [];
    const html = template({ students: list });
    listEl.innerHTML = html;
    setStatus(`Відрендерено ${list.length} студент(ів) з localStorage["${STORAGE_KEY}"].`, 'ok');
}

// ===== Додавання / Оновлення / Видалення =====
function addStudent(s) {
    dataArray.push(s);
    dataJSON = saveStudentsSafe(dataArray);
    renderListFromStorage();
}

function updateStudent(index, s) {
    dataArray[index] = s;
    dataJSON = saveStudentsSafe(dataArray);
    renderListFromStorage();
}

function deleteStudent(index) {
    dataArray.splice(index, 1);
    dataJSON = saveStudentsSafe(dataArray);
    renderListFromStorage();
}

// ===== Події =====
addBtn.addEventListener('click', () => openForm(false));

cancelBtn.addEventListener('click', () => closeForm());

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const student = {
        firstName: firstNameEl.value.trim(),
        lastName: lastNameEl.value.trim(),
        age: Number(ageEl.value),
        course: Number(courseEl.value),
        faculty: facultyEl.value.trim(),
    };

    // 11) Валідація + try...catch під час JSON перетворень виконуємо у saveStudentsSafe/loadStudentsSafe
    const errMsg = validateStudent(student);
    if (errMsg) {
        setStatus(errMsg, 'warn');
        return;
    }

    const editIdx = editIndexEl.value;
    if (editIdx !== '') {
        updateStudent(Number(editIdx), student);
    } else {
        addStudent(student);
    }
    closeForm();
});

// Делегування на список для Edit/Delete/Confirm
listEl.addEventListener('click', (e) => {
    const li = e.target.closest('li.student-card');
    if (!li) return;
    const idx = Number(li.dataset.index);
    const ls = loadStudentsSafe() || [];
    const item = ls[idx];

    if (e.target.classList.contains('edit')) {
        // Редагувати
        openForm(true, item, idx);
        return;
    }

    if (e.target.classList.contains('delete')) {
        // Показати підтвердження
        li.querySelector('.confirm').classList.remove('hidden');
        return;
    }

    if (e.target.classList.contains('yes')) {
        deleteStudent(idx);
        return;
    }

    if (e.target.classList.contains('no')) {
        li.querySelector('.confirm').classList.add('hidden');
        return;
    }
});

// Очистити localStorage повністю (для тесту “перший запуск”)
clearBtn.addEventListener('click', () => {
    if (confirm('Очистити localStorage["students"]?')) {
        localStorage.removeItem(STORAGE_KEY);
        dataArray = [];
        dataJSON = '[]';
        listEl.innerHTML = '';
        setStatus('localStorage очищено. Перезавантаж сторінку — знову підтягнеться students.json.', 'warn');
    }
});

// ===== Старт =====
(async function start() {
    await loadTemplate();
    await initData();
    renderListFromStorage();
})();