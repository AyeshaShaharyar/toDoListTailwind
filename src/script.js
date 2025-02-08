// In-Memory Database (Array)
let tasks = [];

// Create Task

function addTask() {
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value.trim();
  if (!taskText) return;
  //push to db
  tasks.push({ id: Date.now, text: taskText, completed: false });
  taskInput.value = "";
  renderTasks();
}

//Render Task
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 border-b";
    li.innerHTML = `
            <span class="${
              task.completed ? "line-through text-gray-500" : ""
            }">${task.text}</span>
            <div>
                <button onclick="toggleComplete(${index})" class="text-green-500 mx-2">✔</button>
                <button onclick="deleteTask(${index})" class="text-red-500">✖</button>
            </div>
        `;
    taskList.appendChild(li);
  });
}

  // Update (Toggle Complete)
  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

