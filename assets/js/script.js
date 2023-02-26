let addTaskButton = document.getElementById('add-task-btn');
let addTaskForm = document.getElementById('add-task-form');
let submitTaskButton = document.getElementById('new-task-submit-btn');

// Event Listeners
addTaskButton.addEventListener('click', revealForm);
submitTaskButton.addEventListener('click', addTask);

// Functions
function revealForm(event) {
    addTaskForm.style.display = 'block';
}

function addTask(event) {
    // Prevents app from refreshing
    event.preventDefault();

    let addTaskInput = document.getElementById('add-task-input');
    let tasksContainer = document.getElementById('tasks-container');
    // Creates div for new task
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    tasksContainer.appendChild(taskDiv);
    // Creates checkbox for new task
    let taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskCheckbox.classList.add('task-checkbox');
    taskDiv.appendChild(taskCheckbox);
    // input element for new task
    let newTaskInput = document.createElement('input');
    newTaskInput.setAttribute('type', 'text');
    newTaskInput.readOnly = true;
    newTaskInput.classList.add('new-task-input');
    newTaskInput.value = addTaskInput.value;
    taskDiv.appendChild(newTaskInput);

    addTaskForm.reset();
}