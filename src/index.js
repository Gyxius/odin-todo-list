import "./styles.css";
import projects from "./projects.js";


let globalProjectName = "All";
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
    let checkbox;
    if(task.done) {
        checkbox = `<input type="checkbox" id="${task.name}" name="${task.name}" data-project="${task.projectName}" checked/>`
    }
    else {
        checkbox = `<input type="checkbox" id="${task.name}" name="${task.name}" data-project="${task.projectName}" />`
    }
    return `
    <div class="left-task">
        <div class="checkbox">
            ${checkbox}
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
            globalProjectName = currentProjectName;

        }
    })
}


let allProjects = document.getElementById("all-projects");
displayProjectName();
displayDefaultTask()
displayTasks()


// Implement Check features
// Description
// When we click on the checkbox 
// We should be able to set the task associated done to true
// Design
// add pointer to the checkbox associated with a task
// when we click we --> 
// extract the project associated
// get the associated task
// set the done property to true
// save the task
// if we click again undo it

// add pointer to the checkbox associated with a task
let taskContainer = document.getElementById('task-container'); 
// when we click we --> 
taskContainer.addEventListener('click', event => {
    let taskName = event.target.name;
    let projectName = event.target.dataset.project;

    // extract the project associated
    projects.allProjects; 
    let projetObject = projects.allProjects.filter(function(project) {
        return project.name === projectName; 
    }); 

    window.project = projetObject;

    // get the associated task
    let taskObject = projetObject[0].tasks.filter(function(task) {
        return task.name === taskName;  // if problem should be called "title"
    }); 

    // set the done property to true
    taskObject[0].done = !taskObject[0].done;

    // save the task
    localStorage.setItem("projects", JSON.stringify(projects.allProjects));
})

// Implement Remove all done todos
// Description
// When we click on the Remove all completed tasks button 
// We should be able to remove all done todos
// Design
// add pointer to the button Remove all completed tasks
// when we click we --> 
// get all the tasks for a given project (if it's not all page)
// remove them
// get all the tasks for every project (if it's all page)
// remove them
// refresh the page

// add pointer to the button Remove all completed tasks
let removeTaskButton = document.getElementById('remove-tasks'); 

// when we click we --> 
removeTaskButton.addEventListener('click', event => {
    if (globalProjectName==='All') {
        console.log("hello");
        projects.allProjects.forEach((project) => {
            project.tasks = project.tasks.filter(
                (task) => !task.done 
              );
        });   
        // save project
        localStorage.setItem("projects", JSON.stringify(projects.allProjects));
        // go to homepage
        location.reload();
    }
    else {
        console.log("here");
        // extract the project associated
        let projectObject = projects.allProjects.filter(function(project) {
            return project.name === globalProjectName; 
        }); 

        projectObject[0].tasks = projectObject[0].tasks.filter(
            (task) => !task.done 
          );
        window.projectObject = projectObject;
        // save project
        localStorage.setItem("projects", JSON.stringify(projects.allProjects));
        // go to homepage
        location.reload();

    }

});

window.allProjects = projects.allProjects;
window.globalProjectName = globalProjectName;
