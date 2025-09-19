
const inputBox = document.getElementById("inputbox");
const taskList = document.getElementById("tasklist");


function add() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement("li");

    
    const span = document.createElement("span");
    span.textContent = taskText;

}
