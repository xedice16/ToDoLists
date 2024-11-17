
const inputBox = document.querySelector("#input-box");
const enterButton = document.querySelector(".enter-button");
const plusButton = document.querySelector(".plus-button");
const listContainer = document.querySelector(".list-container");
const filterIcon = document.querySelector(".filter-icon");
const inputBoxes = document.querySelector(".input-boxes");
const clearButton = document.querySelector(".clear-button");

let tasks = [];
let isSortedAsc = true;

function renderTasks() {
    listContainer.innerHTML = "";

    if (tasks.length > 0) {
        listContainer.style.border = "1px solid #ddd";
        listContainer.style.borderRadius="10px";
    } else {
        listContainer.style.border = "none";
    }

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.innerHTML = `<span><span class="task-number">${index + 1}.</span> ${task}</span>`;

        const clearTaskButton = document.createElement("img");
        clearTaskButton.src = "clear.png";
        clearTaskButton.alt = "Delete button";
        clearTaskButton.className = "delete-task";

        clearTaskButton.addEventListener("mouseenter", () => {
            clearTaskButton.src = "clear2.png";
        });

        clearTaskButton.addEventListener("mouseleave", () => {
            clearTaskButton.src = "clear.png";
        });

        clearTaskButton.addEventListener("click", () => deleteTask(index));

        taskItem.appendChild(clearTaskButton);
        listContainer.appendChild(taskItem);
    });
}

clearButton.addEventListener("mouseenter", () => {
    clearButton.src = "clear2.png";
});

clearButton.addEventListener("mouseleave", () => {
    clearButton.src = "clear.png";
});

function addTask() {
    const task = inputBox.value.trim();
    if (task) {
        tasks.push(task);
        inputBox.value = ""; 
        renderTasks(); 
    }
    inputBoxes.style.display = "none"; 
}

function plusTask() {
    inputBoxes.style.display = "flex"; 

}

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks(); 
};

function updateFilterIcon() {
    if (isSortedAsc) {
        filterIcon.src = "filter.png";
    } else {
        filterIcon.src = "filter4.png";
    }
}

filterIcon.addEventListener("mouseenter", () => {
    if (isSortedAsc) {
        filterIcon.src = "filter3.png";
    } else {
        filterIcon.src = "filter2.png";
    }
});

filterIcon.addEventListener("mouseleave", () => {
    updateFilterIcon();
});

function sortTasks() {
    if (isSortedAsc) {
        tasks.sort(); 
    } else {
        tasks.sort().reverse(); 
    }
    renderTasks();
}

filterIcon.addEventListener("click", () => {
    isSortedAsc = !isSortedAsc; 
    sortTasks(); 
    updateFilterIcon(); 
});

enterButton.addEventListener("click", addTask);
plusButton.addEventListener("click", plusTask);
