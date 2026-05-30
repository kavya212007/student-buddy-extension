document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", addTask);

    loadTasks();

});

function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task.trim() === "") {
        alert("Enter a task");
        return;
    }

    createTask(task);

    saveTask(task);

    document.getElementById("taskInput").value = "";
}

function createTask(task) {

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {

        li.remove();

        removeTask(task);

    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
}

function saveTask(task) {

    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function loadTasks() {

    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task);
    });
}

function removeTask(taskToRemove) {

    let tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(task =>
        task !== taskToRemove
    );

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}