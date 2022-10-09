
window.onload=function(){

    //document.querySelector('#taskSubmit').addEventListener('click', addTodo);
    document.querySelector('#taskInput').addEventListener('keyup', addTodoIfSubmit);
}

function addTodoIfSubmit(event) {
    if (event.key == 'Enter' || event.keyCode == 13) {
        addTodo();
    }
}

function addTodo(event) {
    
    if (document.getElementById("taskInput").value.length > 0) 
    {
        console.log('Please enter');
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        document.getElementById("tasks").append(taskDiv);

        const taskText = document.createElement("div");
        taskText.innerHTML = document.querySelector('#taskInput').value;
        taskText.classList.add("taskText");
        taskDiv.appendChild(taskText);
        
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = '<i class = "fa fa-check"></i>';
        completeBtn.classList.add("completeBtn");
        taskDiv.appendChild(completeBtn);

        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class = "fa fa-trash"></i>';
        trashBtn.classList.add("trashBtn");
        taskDiv.appendChild(trashBtn);

        // document.getElementById("tasks").innerHTML += `
        // <button type="button" id="task" class="delete">
        // ${document.querySelector('#taskInput').value}
        // </button>
        // `
    }

    document.getElementById("taskInput").value = '';

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
            this.remove(); // parentNode.remove()
        }
    }
}