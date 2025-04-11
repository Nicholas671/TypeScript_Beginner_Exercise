// A simple TypeScript application to create and manage a to-do list.

enum TaskStatus {
    NotCompleted = "Not Completed",
    Completed = "Completed",
}

interface Task {
    id: number;
    description: string;
    status: TaskStatus;
    createdAt: Date;
}

class TaskManager {
    private tasks: Task[] = [];

    // Add a new task
    addTask(description: string): Task {
        const newTask: Task = {
            id: this.tasks.length + 1,
            description,
            status: TaskStatus.NotCompleted, 
            createdAt: new Date(),
        };
        this.tasks.push(newTask);
        return newTask;
    }

    // Remove a task by ID
    removeTask(id: number): Task | undefined {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0];
        }
        return undefined;
    }

    // Update the description of a task
    updateTask(id: number, description: string): Task | undefined {
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
    markTaskAsCompleted(id: number): Task | undefined {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = TaskStatus.Completed;
            return task;
        }
        return undefined;
    }

    // Mark a task as not completed
    markTaskAsIncomplete(id: number): Task | undefined {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = TaskStatus.NotCompleted;
            return task;
        }
        return undefined;
    }

    // Display all completed tasks
    displayCompletedTasks(): Task[] {
        return this.tasks.filter(task => task.status === TaskStatus.Completed);
    }

    // Display all not completed tasks
    displayNotCompletedTasks(): Task[] {
        return this.tasks.filter(task => task.status === TaskStatus.NotCompleted);
    }

    // Display all tasks
    displayAllTasks(): Task[] {
        return this.tasks;
    }

    // Display tasks within a date range
    displayTasksByDate(startDate: Date, endDate: Date): Task[] {
        return this.tasks.filter(task => task.createdAt >= startDate && task.createdAt <= endDate);
    }

    // Save tasks to a file (console for now)
    saveTasksToFile(): void {
        const json = JSON.stringify(this.tasks);
        console.log("Saving tasks to file:", json);
    }

    // Load tasks from a file (or JSON input)
    loadTasksFromFile(json: string): void {
        const loadedTasks: Task[] = JSON.parse(json);
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