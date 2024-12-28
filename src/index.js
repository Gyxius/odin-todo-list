import "./styles.css";
import projects from "./projects.js";



function displayProjectName() {
    // purpose: list the projects names on the left section of the homepage
    projects.allProjects.forEach((project) => {
        let div = document.createElement("div");
        div.innerHTML = `<span class="hashtag">#</span><span class="projects" data-project=${project.name} >${project.name}</span>`;
        allProjects.appendChild(div);
    });
}

function displayAllTasks(taskContainer) {
    projects.allProjects.forEach((project) => {
        project.tasks.forEach((task) => {
            // put the tasks on the right
            let li = document.createElement("li");
            li.innerHTML = printTask(task);
            taskContainer.appendChild(li);
        });
    });   
}

function displayDefaultTask() {
    let currentProjectName = "All"
    let taskContainer = document.getElementById('task-container'); 
    let rightContainerProjectName = document.getElementById('right-container-project-name'); 
    rightContainerProjectName.innerText = currentProjectName;
    taskContainer.innerHTML = '';
    rightContainerProjectName.innerText = "All Tasks";
    displayAllTasks(taskContainer);  
}

function printTask(task) {
    return `
    <div class="left-task">
        <div class="checkbox">
            <input type="checkbox" id="${task.name}" name="${task.name}" checked />
            <label for="${task.name}">${task.name}<span class="priority">${task.priority}</span></label>
        </div>
        <div class="due">
           Due: ${task.dueDate}
        </div>
        <div class="due">
                <a href="view_task.html?project_name=${task.projectName}&task_name=${task.name}"><u>View Tasks</u></a>
        </div>
    </div>
    <div class="right-task">
        # ${task.projectName}
    </div>
`;
};

function displayTasks() {
    // For each project list the tasks when you click on the project on the left
    let currentProjectName;
    let taskContainer = document.getElementById('task-container'); 
    let rightContainerProjectName = document.getElementById('right-container-project-name'); 
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
                    li.innerHTML = printTask(task);
                    taskContainer.appendChild(li);
                });
            }
            else {
                rightContainerProjectName.innerText = "All Tasks";
                displayAllTasks(taskContainer);  
            }
        }
    })
}


let allProjects = document.getElementById("all-projects");
displayProjectName();
displayDefaultTask()
displayTasks()


