// DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearTasksBtn = document.getElementById('clearTasksBtn');
const taskList = document.getElementById('taskList');

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Add task function
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

// Remove task event listener
taskList.addEventListener('click', removeTask);

// Remove task function
function removeTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
}

// Mark task as completed event listener
taskList.addEventListener('click', markTaskCompleted);

// Mark task as completed function
function markTaskCompleted(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
}

// Clear tasks event listener
clearTasksBtn.addEventListener('click', clearTasks);

// Clear tasks function
function clearTasks() {
  taskList.innerHTML = '';
}
