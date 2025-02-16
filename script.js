// Task details data
const tasks = {
    task1: {
        name: "Create My Instagram Page",
        money: "₹800",
        description: "Make with more links (can post)."
    },
    task2: {
        name: "Make an eComm App",
        money: "₹1600",
        description: "Build an eCommerce app to sell products."
    },
    task3: {
        name: "Make My Personal Branding",
        money: "₹1500",
        description: "Create a personal brand by posting videos on social media."
    }
};

// Function to show task details when clicked
function showTaskDetails(taskId) {
    const task = tasks[taskId];
    document.getElementById("taskName").innerText = task.name;
    document.getElementById("taskMoney").innerText = task.money;
    document.getElementById("taskDetails").innerText = task.description;

    // Hide the task list and show the task description
    document.getElementById("taskList").style.display = "none";
    document.getElementById("taskDescription").style.display = "block";
}

// Function to go back to the task list
function goBack() {
    document.getElementById("taskList").style.display = "block";
    document.getElementById("taskDescription").style.display = "none";
}
