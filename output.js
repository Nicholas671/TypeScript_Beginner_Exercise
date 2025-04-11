"use strict";
// A simple TypeScript application to create and manage a to-do list.
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["NotCompleted"] = "Not Completed";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    // Add a new task
    addTask(description) {
        const newTask = {
            id: this.tasks.length + 1,
            description,
            status: TaskStatus.NotCompleted, // Default status
            createdAt: new Date(),
        };
        this.tasks.push(newTask);
        return newTask;
    }
    // Remove a task by ID
    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0];
        }
        return undefined;
    }
    // Update the description of a task
    updateTask(id, description) {
        if (description.trim() === "") {
            console.error("Description cannot be empty.");
            return undefined;
        }
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.description = description;
            return task;
        }
        console.error(`Task with ID ${id} not found.`);
        return undefined;
    }
    // Mark a task as completed
    markTaskAsCompleted(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = TaskStatus.Completed;
            return task;
        }
        return undefined;
    }
    // Mark a task as not completed
    markTaskAsIncomplete(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = TaskStatus.NotCompleted;
            return task;
        }
        return undefined;
    }
    // Display all completed tasks
    displayCompletedTasks() {
        return this.tasks.filter(task => task.status === TaskStatus.Completed);
    }
    // Display all not completed tasks
    displayNotCompletedTasks() {
        return this.tasks.filter(task => task.status === TaskStatus.NotCompleted);
    }
    // Display all tasks
    displayAllTasks() {
        return this.tasks;
    }
    // Display tasks within a date range
    displayTasksByDate(startDate, endDate) {
        return this.tasks.filter(task => task.createdAt >= startDate && task.createdAt <= endDate);
    }
    // Save tasks to a file (console for now)
    saveTasksToFile() {
        const json = JSON.stringify(this.tasks);
        console.log("Saving tasks to file:", json);
    }
    // Load tasks from a file (or JSON input)
    loadTasksFromFile(json) {
        const loadedTasks = JSON.parse(json);
        this.tasks.push(...loadedTasks);
        console.log("Loaded tasks from file:", loadedTasks);
    }
}
// Example usage
const taskManager = new TaskManager();
// Adding tasks
taskManager.addTask("Learn TypeScript");
taskManager.addTask("Build a to-do list application");
// Marking tasks
taskManager.markTaskAsCompleted(1);
// Displaying tasks
console.log("All tasks:", taskManager.displayAllTasks());
console.log("Completed tasks:", taskManager.displayCompletedTasks());
console.log("Not completed tasks:", taskManager.displayNotCompletedTasks());
