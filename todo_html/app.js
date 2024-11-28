// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;  // Get the text from the input field

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    
    // Create the text node with the task text
    li.textContent = taskText;

    // Add a delete button to each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Append the button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
}

// Add an event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);
