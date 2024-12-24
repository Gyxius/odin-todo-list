import "./styles.css";
import projects from "./projects.js";

// 1. Get all the projects
let allProjects = document.getElementById("all-projects");
projects.allProjects.forEach((project) => {
    // 2. put the projects names on the left
    let div = document.createElement("div");
    div.innerHTML = `<span class="hashtag">#</span><span class="projects" data-project=${project.name} >${project.name}</span>`;
    allProjects.appendChild(div);
});

// Right side 
// Goal: For each project list the tasks when you click on the project on the left
let currentProjectName;
let taskContainer = document.getElementById('task-container'); 
let rightContainerProjectName = document.getElementById('right-container-project-name'); 

window.allProjects = allProjects;

// When we click on a project name on the left
allProjects.addEventListener('click', (e) => {
    // we get the project name
    currentProjectName = e.target.dataset.project;
    console.log(currentProjectName);
    if(currentProjectName !== undefined) {

        // we get the project object associated with the project name that we clicked on
        let currentProject = projects.allProjects.filter(function(project) {
            return project.name === currentProjectName; 
        }); 
        
        rightContainerProjectName.innerText = currentProjectName;

        // clean the current tasks first
        taskContainer.innerHTML = '';

        // if task is not All
        if(currentProjectName !== "All") {
            // Get all the tasks
            currentProject[0].tasks.forEach((task) => {
                // put the tasks on the right
                let li = document.createElement("li");
                li.innerHTML = `
                                    <div class="left-task">
                                        <div class="checkbox">
                                            <input type="checkbox" id="${task.name}" name="${task.name}" checked />
                                            <label for="${task.name}">${task.name}<span class="priority">${task.priority}</span></label>
                                        </div>
                                        <div class="due">
                                            ${task.dueDate}
                                        </div>
                                    </div>
                                    <div class="right-task">
                                        # ${task.projectName}
                                    </div>
                                `;
                taskContainer.appendChild(li);
            });
        }
        else {
            rightContainerProjectName.innerText = "All Tasks";
            projects.allProjects.forEach((project) => {
                project.tasks.forEach((task) => {
                    // put the tasks on the right
                    let li = document.createElement("li");
                    li.innerHTML = `
                                        <div class="left-task">
                                            <div class="checkbox">
                                                <input type="checkbox" id="${task.title}" name="${task.title}" checked />
                                                <label for="${task.title}">${task.description}<span class="priority">${task.priority}</span></label>
                                            </div>
                                            <div class="due">
                                                ${task.dueDate}
                                            </div>
                                        </div>
                                        <div class="right-task">
                                            # ${task.projectName}
                                        </div>
                                    `;
                    taskContainer.appendChild(li);
                });
            });

        }
    }
})
