const addTaskButton = document.getElementById('add-task-btn');
const addTaskForm = document.getElementById('add-task-form');
const submitTaskButton = document.getElementById('new-task-submit-btn');

// Event Listeners assigned to the Add Task Button and the Submit Task Buttons.
addTaskButton.addEventListener('click', revealForm);
submitTaskButton.addEventListener('click', addTask);

// The function below reveals the form when the Add Task Button is clicked.
function revealForm(event) {
    addTaskForm.style.display = 'block';
}


function addTask(event) {
    // Prevents app from refreshing.
    event.preventDefault();

    const addTaskInput = document.getElementById('add-task-input');

    // Validates form so an empty task cannot be entered
    if (addTaskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

     tasksContainer = document.getElementById('tasks-container');

    // Creates the div element to contain the task
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    tasksContainer.appendChild(taskDiv);
    
    // Creates the Checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskCheckbox.setAttribute('aria-label', 'Check task');
    taskCheckbox.classList.add('task-checkbox');
    taskDiv.appendChild(taskCheckbox);

    // Creates a read only text input
    const newTaskInput = document.createElement('input');
    newTaskInput.setAttribute('type', 'text');
    newTaskInput.readOnly = true;
    newTaskInput.classList.add('new-task-input');
    newTaskInput.value = addTaskInput.value;
    taskDiv.appendChild(newTaskInput);

    /**
     * The code below does the following:
     * Creates the edit and delete task buttons
     * Assigns them their class
     * Assigns their aria-labels
     * Assigns them their approriate icons
     * Appends them to the 'task div'
     */
    // create edit button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn', 'btn');
    editButton.setAttribute('aria-label', 'Edit task');
    editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    taskDiv.appendChild(editButton);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn', 'btn');
    deleteButton.setAttribute('aria-label', 'Delete task');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    taskDiv.appendChild(deleteButton);

    // Resets Add Task Form
    addTaskForm.reset();

    // Hides the Add Task Form
    addTaskForm.style.display = 'none';

    /**
     * The code below deletes the task when the 'delete task button' is clicked.
     * The Code Institute Tutor Support team helped me in writing this piece of code and is credited to them.
     */
    deleteButton.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    });
    
    /**
     * The Code below allows the user to edit and save an existing task.
     * It changes the function based on the inner HTML.
     * If the button contains the pencil (edit) icon, then it will allow the task to be edited.
     * If the button contains the floppy disk (save) icon, then it will save the users changes.
     * Although the Code Institute Tutor Support team did not help me specifically with this piece of code is was inspired from the code to delete a task (which is credited to them).
     */
    editButton.addEventListener('click', function(event) {

        if (editButton.innerHTML === `<i class="fa-solid fa-floppy-disk"></i>`) {
            // Validates form so an empty task cannot be entered
            if (newTaskInput.value.trim() === '') {
                alert('Please enter a task!');
                return;
            }
            editButton.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
            editButton.ariaLabel = 'Edit task';
            newTaskInput.readOnly = true;
        } else if (editButton.innerHTML === `<i class="fa-solid fa-pencil"></i>`) {
            editButton.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
            editButton.ariaLabel = 'Save task';
            newTaskInput.readOnly = false;
            newTaskInput.select();
            newTaskInput.style.textDecoration = 'none';
        }
    });

    /**
     * The Code below does the following:
     * If checkbox is checked, apply the styling 'text-decoration: line-through;'
     * If the checkbox is unchecked, apply the default styling
     */
    taskCheckbox.addEventListener('click', function(event) {
        if (taskCheckbox.checked) {
            newTaskInput.style.textDecoration = 'line-through';
            newTaskInput.style.color = '#808080';
        } else if (taskCheckbox.checked === false) {
            newTaskInput.style.textDecoration = 'none';
            newTaskInput.style.color = '#000000';
        }
    });
}