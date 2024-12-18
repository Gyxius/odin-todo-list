import "./create_project.css"
import projects from "./projects.js";

// The goal is to create a new project then stores it
// 1. extract the name of the new project (from the webpage input)
// 2. creates a new project using the name extracted (by calling the appropriate module)
// 3. says the project has been created
// 4. goes back to the homepage

document.getElementById('create-button').onclick = function() {
    // 1. extract the name of the new project (from the webpage input)
    let projectName = document.getElementById("project-name").value;

    // 2. creates a new project using the name extracted (by calling the appropriate module)
    projects.addNewProject(projectName);
    localStorage.setItem("projects", JSON.stringify(projects.allProjects));

    // 3. says the project has been created
    window.alert(`The project ${projectName} has been created!`)

    // 4. goes back to the homepage
    console.log("Redirecting to the homepage...");
    window.location.href = "index.html";
};

// Print the current projects
// console.log(JSON.parse(localStorage.getItem("projects")));