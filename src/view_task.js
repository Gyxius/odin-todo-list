
import "./view_task.css"
import projects from "./projects.js";


// TODO THIS PART

// 1. extract the task and project from url
// 2. extract the project associated
// 3. extract the task 
// 3.1 get the title, description etc. associated
// 4. point to the input elements
// 5. change the value and put the actual tasks values
// make edit button work
// remove task button

// 1. extract the task and project from url
const queryString = window.location.search;
// 1.2 Create a URLSearchParams object
const urlParams = new URLSearchParams(queryString);
// 1.3. Extract the values you need
const projectName = urlParams.get('project_name'); // "MyProject"
const taskName = urlParams.get('task_name');       // "MyTask"

// 2. extract the project associated
projects.allProjects; 
let projetObject = projects.allProjects.filter(function(project) {
    return project.name === projectName; 
}); 
// 3. extract the task 
let taskObject = projetObject[0].tasks.filter(function(task) {
    return task.name === taskName;  // if problem should be called "title"
}); 

// 4. point to the input elements
let taskTitle = document.getElementById('task-title'); 
let description = document.getElementById('Description'); 
let dueDate = document.getElementById('dueDate'); 
let priority = document.getElementById('priority'); 
let project = document.getElementById('project'); 
taskTitle.innerText = taskName;
description.value = taskObject[0].description;
dueDate.value = taskObject[0].dueDate;
priority.value = taskObject[0].priority;
project.value = projectName;

window.tasks = taskObject;

// // 1.4. Display them (or do whatever you need in your code)
// document.getElementById('project-name').textContent = `Project: ${projectName}`;
// document.getElementById('task-name').textContent = `Task: ${taskName}`;

// Add edit task functionality 
