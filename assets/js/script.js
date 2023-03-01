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
    // create edit button
    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn', 'btn');
    editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    taskDiv.appendChild(editButton);

    // Add delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn', 'btn');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    
    
    taskDiv.appendChild(deleteButton);

    addTaskForm.reset();

    addTaskForm.style.display = 'none';

    // Code to delete a task
    deleteButton.addEventListener('click', function(event) {
        event.target.parentElement.remove();
        console.log('task deleted');
    });
    
    // Code to edit a task
    editButton.addEventListener('click', function(event) {

        if (editButton.innerHTML === `<i class="fa-solid fa-floppy-disk"></i>`) {
            editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
            newTaskInput.readOnly = true;
            console.log('task saved');
        } else if (editButton.innerHTML === `<i class="fa-solid fa-pencil"></i>`) {
            editButton.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
            newTaskInput.readOnly = false;
            newTaskInput.select();
            newTaskInput.style.textDecoration = 'none';
            console.log('task editing');
        }
    });
// when checkbox is checked, apply the styling 'text-decoration: line-through;' to task
    taskCheckbox.addEventListener('click', function(event) {
        if (taskCheckbox.checked) {
            newTaskInput.style.textDecoration = 'line-through';
            newTaskInput.style.color = '#808080';
        } else if (taskCheckbox.checked === false) {
            newTaskInput.style.textDecoration = 'none';
            newTaskInput.style.color = '#000000';
        }
    })
}