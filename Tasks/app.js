//load all ui elements
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const filterTasks = document.querySelector('#filterTasks')
const clearTasks = document.querySelector('#clear-tasks')


//load all event listeners
loadAllEventListeners();

function loadAllEventListeners(){
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTask);
    clearTasks.addEventListener('click',clearTask);
    filterTasks.addEventListener('keyup',FilterTasks)
}

function addTask(e){
    //input from task field
    const input = taskInput.value;
    if(taskInput.value === ''){
        alert("Enter a valid task");
    }
    //create a li element to add element to task list
    else{
        const li = document.createElement('li');

        li.className = "list-item";

        li.textContent = input;
        //create link
        const link = document.createElement('a');
        link.href = "#";
        //set the icon
        link.innerHTML = `
            <i class="fas fa-minus-circle" style='color:black'>
        `;
        link.className = "delete-item"
        //append link to li tag
        li.appendChild(link);

        taskList.appendChild(li);
        //reset the taskInput value
        taskInput.value = '';

    }
    e.preventDefault();
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();
      }      
    }
}

function clearTask(){
    taskList.innerHTML = '';
}

function FilterTasks(e){
    const text  = e.target.value.toLowerCase();
        document.querySelectorAll('.list-item').forEach(function(task){
            const item = task.firstChild.textContent
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }else {
                task.style.display = 'none';
            }
        });
}