window.onload = function () {
    loadMoneyPool();
    displayTasks();
};

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${task.name}</strong> - ${task.money}`;
        listItem.onclick = function () {
            showTaskDetails(index);
        };
        taskList.appendChild(listItem);
    });
}

function showTaskDetails(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let task = tasks[index];

    document.getElementById("taskName").innerText = task.name;
    document.getElementById("taskMoney").innerText = task.money;
    document.getElementById("taskDetails").innerText = task.description;

    document.getElementById("taskList").style.display = "none";
    document.getElementById("taskDescription").style.display = "block";
}

function goBack() {
    document.getElementById("taskList").style.display = "block";
    document.getElementById("taskDescription").style.display = "none";
}
