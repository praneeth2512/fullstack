// Array to store tasks
let tasks = [];

// Add a new task
function addTask(task) {
    if (task.trim() === "") {
        console.log("Cannot add an empty task.");
        return;
    }
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

// Remove a task by index (0-based)
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        const removed = tasks.splice(index, 1);
        console.log(`Task removed: "${removed[0]}"`);
    } else {
        console.log("Invalid task index.");
    }
}

// List all tasks
function listTasks() {
    console.log("\nCurrent Tasks:");
    if (tasks.length === 0) {
        console.log("[No tasks yet]");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Example usage
addTask("Buy groceries");
addTask("Walk the dog");
listTasks();

removeTask(0);  // Removes "Buy groceries"
listTasks();

addTask("Read a book");
listTasks();
