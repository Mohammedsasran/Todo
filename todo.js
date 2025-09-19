
const inputBox = document.getElementById("inputbox");
const taskList = document.getElementById("tasklist");


function add() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement("li");
    li.className = "task-li"

    
    const span = document.createElement("span");
    span.textContent = taskText;
    

    
   


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className="delete-btn"
    deleteBtn.onclick = function () {
        li.remove();
    };

     const editBtn = document.createElement("button");
    editBtn.className="edit-btn"
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };

   
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

   
    inputBox.value = "";
}
