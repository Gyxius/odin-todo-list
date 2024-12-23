import "./styles.css";
import projects from "./projects.js";

console.log("Hello world!");

// The goal is to have the projects on the left and the tasks for the project on the right
// Left side
// 1. Get all the projects 
// 2. put the projects names on the left
// Right side 
// 1. For each project list the tasks when you click on the project on the left
// 2. For each project link to the new task creation when we click on Add task
// 3. For each project link to the task view when we click on each task
// 4. when we click on the all project, we see all the tasks 

// Left side
// window.projects = projects; // to be able to see it in the browser
// 1. Get all the projects
let allProjects = document.getElementById("all-projects");
projects.allProjects.forEach((project) => {
    // 2. put the projects names on the left
    let div = document.createElement("div");
    div.innerHTML = `<span class="hashtag">#</span><span class="projects" data-project=${project.name} >${project.name}</span>`;
    allProjects.appendChild(div);
});

// Right side 
// 1. For each project list the tasks when you click on the project on the left
let allProjectsDiv = document.getElementById('all-projects'); // grab a reference to your element
let currentProjectName;
allProjectsDiv.addEventListener('click', (e) => {
    currentProjectName = e.target.dataset.project;
    console.log(currentProjectName);
    
})

// Tests the list tasks for each project function
projects.allProjects.forEach((project) => {
    console.log(project.tasks)
});
