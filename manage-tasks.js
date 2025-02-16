// Load tasks from local storage
window.onload = function () {
    loadTasks();
};

// Function to add a new task
function addTask() {
    let taskName = document.getElementById("taskName").value;
    let taskMoney = document.getElementById("taskMoney").value;
    let taskDescription = document.getElementById("taskDescription").value;

    if (taskName === "" || taskMoney === "" || taskDescription === "") {
        alert("Please fill all fields!");
        return;
    }

    let task = {
        name: taskName,
        money: `₹${taskMoney}`,
        description: taskDescription
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    clearInputs();
}

// Function to display tasks
function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${task.name}</strong> - ${task.money}<br>
            ${task.description}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Function to delete a task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Function to clear input fields
function clearInputs() {
    document.getElementById("taskName").value = "";
    document.getElementById("taskMoney").value = "";
    document.getElementById("taskDescription").value = "";
}

// Function to load tasks on page load
function loadTasks() {
    displayTasks();
}

// Function to save tasks (redirects to index.html)
function saveTasks() {
    alert("Tasks saved successfully!");
    window.location.href = "index.html"; // Redirect to main page
}
