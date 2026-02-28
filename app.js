// app.js

class EmployeeManager {
    constructor() {
        this.employees = JSON.parse(localStorage.getItem('employees')) || [];
    }

    addEmployee(name) {
        const employee = { id: Date.now(), name };
        this.employees.push(employee);
        this.saveToLocalStorage();
    }

    editEmployee(id, newName) {
        const employee = this.employees.find(emp => emp.id === id);
        if (employee) {
            employee.name = newName;
            this.saveToLocalStorage();
        }
    }

    deleteEmployee(id) {
        this.employees = this.employees.filter(emp => emp.id !== id);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('employees', JSON.stringify(this.employees));
    }
}

class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    addTask(title) {
        const task = { id: Date.now(), title };
        this.tasks.push(task);
        this.saveToLocalStorage();
    }

    editTask(id, newTitle) {
        const task = this.tasks.find(tsk => tsk.id === id);
        if (task) {
            task.title = newTitle;
            this.saveToLocalStorage();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(tsk => tsk.id !== id);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

class ProjectManager {
    constructor() {
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
    }

    addProject(name) {
        const project = { id: Date.now(), name };
        this.projects.push(project);
        this.saveToLocalStorage();
    }

    editProject(id, newName) {
        const project = this.projects.find(prj => prj.id === id);
        if (project) {
            project.name = newName;
            this.saveToLocalStorage();
        }
    }

    deleteProject(id) {
        this.projects = this.projects.filter(prj => prj.id !== id);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }
}

// Example usage
const employeeManager = new EmployeeManager();
const taskManager = new TaskManager();
const projectManager = new ProjectManager();
