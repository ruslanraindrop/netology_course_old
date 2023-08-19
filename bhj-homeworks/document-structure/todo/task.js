const tasksInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function taskAdd(event) {
  event.preventDefault();
  if (tasksInput.value) {
     tasksList.insertAdjacentHTML('beforeEnd', `
      <div class="task">
        <div class="task__title">
          ${tasksInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    tasksInput.value = '';   
  }
}

function taskAddFromKey(event) {
  if (event.keyCode === 13) {
    taskAdd();            
  }
}

function removeTask(event) {
  if (event.target.classList.contains('task__remove')) {
    event.target.closest('.task').remove();
  }
}

addButton.addEventListener('click', taskAdd);
tasksInput.addEventListener('keydown', taskAddFromKey);
tasksList.addEventListener('click', removeTask);