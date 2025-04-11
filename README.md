# TypeScript Task Manager

This is a simple task management application built with TypeScript. The application is designed to manage tasks effectively, allowing users to create, update, delete, and sort tasks with ease.

---

## **Features**

### **1. Task Management**

- **Add Tasks**: Create new tasks with a description, status, and optional priority.
- **Remove Tasks**: Delete tasks by their unique ID.
- **Update Task Description**: Modify the description of any existing task.
- **Mark Tasks**: Change a task’s status to `Completed` or `Not Completed`.

### **2. Task Sorting and Filtering**

- **Filter Completed Tasks**: Display tasks marked as `Completed`.
- **Filter Incomplete Tasks**: Display tasks marked as `Not Completed`.
- **Sort by Priority**: Arrange tasks in order of importance (`High`, `Medium`, `Low`).

### **3. Date-Based Functionality**

- **Filter Tasks by Date Range**: Display tasks created within a specific date range.

### **4. Persistent Storage**

- **Save Tasks**: Serialize tasks into JSON for saving locally.
- **Load Tasks**: Load tasks from a JSON file or string.

---

## **Getting Started**

### **Requirements**

- Node.js installed on your machine.
- TypeScript installed globally (`npm install -g typescript`).

### **How to Run**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TypeScript_Beginner_Exercise
   ```
2. Install TypeScript (if not installed):
   ```bash
   npm install -g typescript
   ```
3. Compile TypeScript files:
   ```bash
   tsc
   ```
4. Run the application:
   ```bash
   node output.js
   ```

---

## **Future Enhancements**

- Task prioritization and notifications.
- Web-based interface using React and TypeScript.
- Enhanced persistent storage options (e.g., database integration).

---

## **Contributing**

Feel free to fork this project, submit issues, or open pull requests!

---
