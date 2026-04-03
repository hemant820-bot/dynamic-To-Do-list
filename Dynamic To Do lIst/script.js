function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const table = document.getElementById("taskList");

    const row = document.createElement("tr");

    const taskCol = document.createElement("td");
    taskCol.innerText = taskText;

    const pendingCol = document.createElement("td");
    pendingCol.innerText = "Pending";

    const completedCol = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function () {
        if (checkbox.checked) {
            taskCol.classList.add("completed");
            pendingCol.innerText = "";
            completedCol.innerText = "Done";
        } else {
            taskCol.classList.remove("completed");
            pendingCol.innerText = "Pending";
            completedCol.innerText = "";
            completedCol.appendChild(checkbox);
        }
    };

    completedCol.appendChild(checkbox);

    const deleteCol = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        row.remove();
    };

    deleteCol.appendChild(deleteBtn);

    row.appendChild(taskCol);
    row.appendChild(pendingCol);
    row.appendChild(completedCol);
    row.appendChild(deleteCol);

    table.appendChild(row);

    input.value = "";
}