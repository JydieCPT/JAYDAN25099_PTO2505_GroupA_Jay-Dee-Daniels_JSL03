// Initialize an empty array to hold all tasks
const initialTasks = [];

// Set the maximum number of new tasks that can be added
const maxNewTasks = 3;

// Start the unique ID counter based on existing tasks
let nextId = initialTasks.length + 1;

// Array to store only the newly added tasks
const newTasks = [];

// Function to prompt the user for a valid task status
function getValidStatus() {
  let status;
  const validStatuses = ["todo", "doing", "done"]; // Acceptable status values

  // Keep prompting until a valid status is entered
  do {
    status = prompt("Enter task status (todo / doing / done):").toLowerCase();
  } while (!validStatuses.includes(status));

  return status;
}

// Loop to add up to maxNewTasks number of tasks
for (let i = 0; i < maxNewTasks; i++) {
  // Ask the user if they want to add a new task
  const addTask = confirm("Would you like to add a new task?");
  if (!addTask) break; // Exit loop if user declines

  // Prompt the user for task details
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  const status = getValidStatus(); // Get a validated status input

  // Create a new task object
  const newTask = {
    uniqueId: nextId++, // Assign a unique ID
    title,
    description,
    status,
  };

  // Add the new task to both arrays
  initialTasks.push(newTask);
  newTasks.push(newTask);

  // If this is the last allowed task, notify the user
  if (i === maxNewTasks - 1) {
    alert("There are enough tasks on your board, please check them in the console");
  }
}

// Function to filter and return only completed tasks
function getCompletedTasks(tasks) {
  return tasks.filter((task) => task.status === "done");
}

// Log all newly added tasks to the console
console.log("All tasks:", newTasks);

// Log all tasks marked as "done"
console.log("✅ Completed Tasks:", getCompletedTasks(initialTasks));
