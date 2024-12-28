// The goal is to create the tasks object to be used inside a project
// 1. creates a create task function
function createTask (taskName, description = "", dueDate = "", priority = "", projectName = "", done=false) {
    return {
        name: taskName,
        description,
        dueDate,
        priority,
        projectName,
        done
    };
}
// const task1 = createTask('Task 1');

export default createTask;

