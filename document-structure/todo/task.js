const tasksContainer = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksForm = document.getElementById('tasks__form');

// Функция для создания новой задачи
function createTaskElement(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'task__title';
    titleDiv.textContent = taskText;

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.className = 'task__remove';
    removeLink.innerHTML = '&times;';

    removeLink.addEventListener('click', function (event) {
        event.preventDefault();
        taskDiv.remove();
    });

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(removeLink);

    return taskDiv;
}

// Функция для добавления задачи
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        // Визуальное предупреждение
        taskInput.style.borderColor = 'red';
        setTimeout(() => {
            taskInput.style.borderColor = '';
        }, 500);
        return;
    }

    const taskElement = createTaskElement(taskText);
    tasksContainer.appendChild(taskElement);

    taskInput.value = '';
    taskInput.focus();
}

tasksForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
});

// Фокусируемся на поле ввода
taskInput.focus();