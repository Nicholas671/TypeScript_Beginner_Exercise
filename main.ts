// A simple TypeScript application to create and manage a to-do list.

enum TaskStatus {
    NotCompleted = "Not Completed",
    Completed = "Completed",
}

enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

interface Task {
    id: number;
    description: string;
    status: TaskStatus;
    priority?: TaskPriority; 
    createdAt: Date;
}

class TaskManager {
    private tasks: Task[] = [];


addTask(description: string, priority: TaskPriority = TaskPriority.Medium): Task {
    const newTask: Task = {
        id: this.tasks.length + 1,
        description,
        status: TaskStatus.NotCompleted,
        createdAt: new Date(),
        priority, // Will default to Medium if not provided
    };
    this.tasks.push(newTask);
    return newTask;
}

sortTasksByPriority(): Task[] {
    const priorityOrder: { [key in TaskPriority]: number } = {
        [TaskPriority.High]: 1,
        [TaskPriority.Medium]: 2,
        [TaskPriority.Low]: 3,
    };

    return [...this.tasks].sort((a, b) => 
        (priorityOrder[a.priority || TaskPriority.Medium] - priorityOrder[b.priority || TaskPriority.Medium])
    );
}

searchTasks(query: string): Task[] {
    return this.tasks.filter(task=> task.description.toLowerCase().includes(query.toLowerCase()));
}
    displayAllTasks(): void {
        this.tasks.forEach(task => {
            console.log(
                `ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}, Status: ${task.status}, Created At: ${task.createdAt}`
            );
        });
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
taskManager.addTask("Fix bugs", TaskPriority.High);
taskManager.addTask("Write documentation", TaskPriority.Medium);
taskManager.addTask("Clean workspace", TaskPriority.Low);
// Marking tasks
taskManager.markTaskAsCompleted(1);

const sortedTasks = taskManager.sortTasksByPriority();
console.log("Sorted tasks by priority:", sortedTasks);

// Displaying tasks
console.log("All tasks:", taskManager.displayAllTasks());
console.log("Completed tasks:", taskManager.displayCompletedTasks());
console.log("Not completed tasks:", taskManager.displayNotCompletedTasks());


// Searching tasks
console.log("Search for 'learn':", taskManager.searchTasks("learn")); // Should return the task with "Learn TypeScript"
console.log("Search for 'build':", taskManager.searchTasks("build")); // Should return the task with "Build a to-do list application"
console.log("Search for 'fix':", taskManager.searchTasks("fix")); // Should return the task with "Fix bugs"
console.log("Search for 'nonexistent':", taskManager.searchTasks("nonexistent")); // Should return an empty array