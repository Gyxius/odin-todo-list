import "./add_task.css"
import createTask from "./tasks.js";
import projects from "./projects.js";

// window.projects = projects;

// put all the projects on project input
// 0. Gets the input
// 1. extracts the projects
// 2. put them 

// 0. Gets the input
let projectHTML = document.getElementById("projectName");
// 1. extracts the projects and 2. put them 
projects.allProjects.forEach((project) => {
    let option = document.createElement("option");
    option.innerText = project.name;
    projectHTML.appendChild(option);
});

// The main goal is to create a new task then saves it
// 0.Once you click on create button it saves it 
// 1. Extract title, description, duedate, priority 
// 2. Choose the project name 
// 3. Creates the task
// 4. retrieves the project associated
// 5. associate the task with the project
// 6. says the task has been created
// 7. saves the project
// 8. goes back to the homepage

// 0.Once you click on create button it saves it 
document.getElementById('create-button').onclick = function() {
    // 1. Extract title, description, duedate, priority 
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;

    // 2. Choose the project name on HTML drag for the names
    let projectName = document.getElementById("projectName").value;

    // 3. Creates the task
    let task1  = createTask(title, description, dueDate, priority, projectName);

    // 4. retrieves the project associated
    let currentProject = projects.allProjects.filter(function(project) {
        return project.name === projectName; 
    }); 

    window.currentProject = currentProject;
    console.log("Window currentProject:", window.currentProject);
    // 5. associate the task with the project
    currentProject[0].tasks.push(task1);
    
    // 6. says the task has been created
    window.alert(`The task ${title} has been created!`)

    // 7. saves the project
    localStorage.setItem("projects", JSON.stringify(projects.allProjects));

    // 8. goes back to the homepage
    console.log("Redirecting to the homepage...");
    window.location.href = "index.html";
}


window.projects = projects;
