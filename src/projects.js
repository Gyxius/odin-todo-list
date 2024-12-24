// The goal is to create the project object then saves it as json
// 1. creates a create projet function
// 2. Creates the projects container which will contain all the project and can create a new object, delete a new one, etc.
// 3. Stores all the projects as json

// 1. creates a create projet function
function createProject (projectName) {
    const name =  projectName;
    const tasks = [];
    return { name, tasks };
}
// const project1 = createProject('Project 1')

// 2. Creates the projects container which will contain all the project and can create a new object, delete a new one, etc.
function Projects() {
    this.allProjects = [];
    this.viewAllProjects = () => {
        for (let i = 0; i < this.allProjects.length; i++) {
            console.log(this.allProjects[i].name);
        }
    };
    this.addNewProject = function (name) {
        const newProject = createProject(name);
        this.allProjects.push(newProject);
    };
    this.removeProject = function(name) {
        this.allProjects = this.allProjects.filter(function(project) {
            return project.name != name; 
        }); 
    }
}


const projects = new Projects();
projects.viewAllProjects();
// projects.addNewProject("Jean");

// // 3. Stores all the projects as json
if (localStorage.getItem("projects") === null) {
    // if the json doesn't exist yet we create it otherwise we return it
    localStorage.setItem("projects", JSON.stringify(projects.allProjects));
}
else {
    projects.allProjects = JSON.parse(localStorage.getItem("projects"));
}

// to remove
// localStorage.removeItem("projects");
export default projects;
