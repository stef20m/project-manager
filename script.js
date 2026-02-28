// script.js

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Task {
    constructor(title, description, assignedTo) {
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.completed = false;
    }
    complete() {
        this.completed = true;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
}

// Example usage:
const emp1 = new Employee('Alice Johnson', 1);
const task1 = new Task('Design Mockup', 'Create a mockup for the new project', emp1);
const project1 = new Project('Website Redesign');
project1.addTask(task1);

console.log(project1);