
window.onload = function() {

    document.querySelector('#taskSubmit').onclick = function() {
        if (document.getElementById("taskInput").value.length == 0) {
            // nothing happens
        }
        else {
        document.getElementById("tasks").innerHTML += `
        <button type="button" id="task" class="delete">
        ${document.querySelector('#taskInput').value}
        </button>
        `
        }

        document.getElementById("taskInput").value = '';

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.remove(); // parentNode.remove()
            }
        }
    }

}