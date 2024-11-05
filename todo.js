document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Function to create a new task element
    const createTaskElement = (taskText) => {
        const task = document.createElement("li");
        task.classList.add("task");

        // Task text with strike-through
        const taskSpan = document.createElement("span");
        taskSpan.classList.add("task-text");
        taskSpan.innerText = taskText;
        task.appendChild(taskSpan);

        // Toggle complete on task text click
        taskSpan.addEventListener("click", () => {
            task.classList.toggle("completed");
        });

        // Delete button with "X"
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&#x2716;"; // "X" symbol
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            task.remove();
        });
        task.appendChild(deleteBtn);

        return task;
    };

    // Add task event listener
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const task = createTaskElement(taskText);
            taskList.appendChild(task);
            taskInput.value = "";
        }
    });

    // Enter key to add task
    taskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
