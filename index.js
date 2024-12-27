
function cleartext(){
    if(document.getElementById("List").value==""){
        alert("Enter a text to clear")
    }
   else if(confirm("Do you want to remove text?"))
    document.getElementById("List").value="";
}
function add(){
    const a=document.getElementById("List");
    const v=a.value.trim();
    if(v){
        const h=document.createElement("p" );
        h.textContent=v;
        createtask(h);
        saveTaskToLocalStorage(h); 
        document.getElementById("List").value="";
    
        alert("added successfull") 
    }
    else{
        alert("Enter a task!!")
    }
}
function createtask(task){
    task.classList.add("task-item");
    task.addEventListener("click", function () {
        if (confirm("Do you want to remove this task?")) {
            removeTaskFromLocalStorage(task.textContent);
            task.remove();
            alert("Task removed successfully!");
        }
    });
    document.getElementById("textcontainer").appendChild(task);
   
}
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task); 
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskValue => {
        const taskElement = document.createElement("p");
        taskElement.textContent = taskValue;
        createtask((taskElement));
    });
}

document.addEventListener("DOMContentLoaded", loadTasks);