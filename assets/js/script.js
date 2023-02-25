let addTaskButton = document.getElementById('add-task-btn');
let addTaskForm = document.getElementById('add-task-form');

addTaskButton.addEventListener('click', revealForm);

function revealForm(event) {
    addTaskForm.style.display = 'block';
}