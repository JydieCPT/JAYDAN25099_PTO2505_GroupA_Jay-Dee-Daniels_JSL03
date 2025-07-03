const initialTasks = []

const maxNewTasks = 3;
let nextId = initialTasks.length + 1;

// Array to store only the newly added tasks
const newTasks = [];

function getValidStatus() {
  let status;
  const validStatuses = ["todo", "doing", "done"];
  do {
    status = prompt("Enter task status (todo / doing / done):").toLowerCase();
  } while (!validStatuses.includes(status));
  return status;
}

for (let i = 0; i < maxNewTasks; i++) {
  const addTask = confirm("Would you like to add a new task?");
  if (!addTask) break;

  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  const status = getValidStatus();

  const newTask = {
    uniqueId: nextId++,
    title,
    description,
    status,
  };

  initialTasks.push(newTask);
  newTasks.push(newTask);

  if (i === maxNewTasks - 1) {
    alert("There are enough tasks on your board, please check them in the console");
  }
}

function getCompletedTasks(tasks) {
  return tasks.filter((task) => task.status === "done");
}

// ✅ Log only new tasks under "All tasks"
console.log("All tasks:", newTasks);
console.log("✅ Completed Tasks:", getCompletedTasks(initialTasks));
