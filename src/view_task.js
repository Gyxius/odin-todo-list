
import "./view_task.css"
import projects from "./projects.js";

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
window.allProjects = projects.allProjects;
window.project = projetObject;


// Add edit task functionality 
// Description
// When we click on the edit task
// We should be able to edit the task due date and priority
// Design
// Pointer to edit task button
// Enable Due date and priority html input
// Change edit button to Confirm edit
// Extract the new value
// Change the task json

/* Purpose: When we click on the edit task we should be able to edit the task due date and priority */
// Pointer to edit task button
let editTaskButton = document.getElementById('edit-task'); 
editTaskButton.addEventListener('click', (event) =>  {
    // We should be able to edit the task due date and priority
    if (editTaskButton.innerText == 'Edit task') {
        console.log("The button was clicked!");
        dueDate.disabled = false;
        priority.disabled = false;
        dueDate.className = "editable-input";
        priority.className = "editable-input";
        // Change edit button to Confirm edit
        editTaskButton.innerText = 'Confirm edit'
    }
    else {
        // Extract the new value
        let newDueDate = dueDate.value;
        let newPriority = priority.value;
        // Change the task json
        taskObject.dueDate = newDueDate;
        taskObject.priority = newPriority;
        editTaskButton.innerText = 'Edit task';
        dueDate.disabled = true;
        priority.disabled = true;
        dueDate.classList.remove("editable-input");
        priority.classList.remove("editable-input");
    }
});


// Remove task functionality 
// Description
// When we click on the remove task
// We should be able to remove the task from the project
// Design
// remove task
// save project
// go to homepage

let removeTaskButton = document.getElementById('remove-task'); 
removeTaskButton.addEventListener('click', (event) =>  {
    const index = projetObject[0].tasks.map(task => task.name).indexOf(taskName);
    // remove task
    projetObject[0].tasks.splice(index, 1);
    // save project
    localStorage.setItem("projects", JSON.stringify(projects.allProjects));
    // go to homepage
    console.log("Redirecting to the homepage...");
    window.location.href = "index.html";
});

