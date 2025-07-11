// Tasks Logic

export let userTasks = [
  { id: 1, content: "My Task 1", completed: true },
  { id: 2, content: "My Task 2", completed: false },
  { id: 3, content: "My Task 3", completed: false },
];

export const createTask = () => {
  // Generate a random ID
  userTasks.push({ id: 1, content: "", completed: false });
};

export const removeTask = () => {
  // Use onMessage to recive the tasks id
  // Find the task with an id that matches the message with filter()
  // Remove the match with splice()
};

export const saveTasks = () => {
  // Use chrome storage to save the array
};
