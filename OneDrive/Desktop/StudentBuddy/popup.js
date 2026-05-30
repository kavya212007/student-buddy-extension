document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", addTask);

});

function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task.trim() === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}