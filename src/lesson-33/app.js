import { loadStudentsSafe, saveStudentsSafe, STORAGE_KEY } from './storage.js';

// ІМПОРТИ ЗАМІСТЬ fetch (Vite):
const templateSrc = document.getElementById('tpl-students').innerHTML;
import initialData from './students.json'; // масив студентів

const $ = s => document.querySelector(s);

// UI
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

let dataArray = [];
let dataJSON = '';
let template = Handlebars.compile(templateSrc);

// helpers
function setStatus(text, type = '') {
    statusEl.textContent = text || '';
    statusEl.className = 'status ' + type;
}
function clearForm() { formEl.reset(); editIndexEl.value = ''; }
function openForm(forEdit = false, s = null, index = null) {
    formEl.hidden = false;
    formTitleEl.textContent = forEdit ? 'Редагувати картку студента' : 'Нова картка студента';
    saveBtn.textContent = forEdit ? 'Оновити' : 'Додати';
    if (forEdit && s) {
        firstNameEl.value = s.firstName;
        lastNameEl.value = s.lastName;
        ageEl.value = s.age;
        courseEl.value = s.course;
        facultyEl.value = s.faculty;
        editIndexEl.value = String(index);
    } else {
        clearForm();
    }
}
function closeForm() { formEl.hidden = true; clearForm(); }
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

// init (без fetch)
async function initData() {
    const fromLS = loadStudentsSafe();
    if (fromLS) {
        dataArray = fromLS;
        dataJSON = JSON.stringify(dataArray);
        return;
    }
    dataArray = Array.isArray(initialData) ? initialData : [];
    dataJSON = saveStudentsSafe(dataArray) || '[]';
}

// render (тільки з localStorage)
function renderListFromStorage() {
    const ls = loadStudentsSafe();
    const list = Array.isArray(ls) ? ls : [];
    listEl.innerHTML = template({ students: list });
    setStatus(`Відрендерено ${list.length} студент(ів) з localStorage["${STORAGE_KEY}"].`, 'ok');
}

// CRUD
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

// events
document.addEventListener('click', (e) => {
    const li = e.target.closest('li.student-card');
    if (li) {
        const idx = Number(li.dataset.index);
        const ls = loadStudentsSafe() || [];
        const item = ls[idx];

        if (e.target.classList.contains('edit')) { openForm(true, item, idx); return; }
        if (e.target.classList.contains('delete')) { li.querySelector('.confirm').classList.remove('hidden'); return; }
        if (e.target.classList.contains('yes')) { deleteStudent(idx); return; }
        if (e.target.classList.contains('no')) { li.querySelector('.confirm').classList.add('hidden'); return; }
    }

    if (e.target.id === 'add-btn') { openForm(false); return; }
    if (e.target.id === 'cancel-btn') { closeForm(); return; }
    if (e.target.id === 'clear-all') {
        if (confirm('Очистити localStorage["students"]?')) {
            localStorage.removeItem(STORAGE_KEY);
            dataArray = [];
            dataJSON = '[]';
            listEl.innerHTML = '';
            setStatus('localStorage очищено. Перезавантаж сторінку — знову підтягнуться стартові дані.', 'warn');
        }
        return;
    }
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const student = {
        firstName: firstNameEl.value.trim(),
        lastName: lastNameEl.value.trim(),
        age: Number(ageEl.value),
        course: Number(courseEl.value),
        faculty: facultyEl.value.trim(),
    };
    const err = validateStudent(student);
    if (err) { setStatus(err, 'warn'); return; }

    const editIdx = editIndexEl.value;
    if (editIdx !== '') updateStudent(Number(editIdx), student);
    else addStudent(student);
    closeForm();
});

// start
(async function start() {
    try {
        await initData();
        renderListFromStorage();
    } catch (err) {
        console.error(err);
        setStatus('Критична помилка ініціалізації.', 'error');
    }
})();