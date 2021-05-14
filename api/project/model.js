const db = require('../../data/dbConfig');

const convertToBoolean = (project) => {
  if (project.project_completed === 0 || !project.project_completed) {
    return { ...project, project_completed: false };
  } else {
    return { ...project, project_completed: true };
  }
};

async function getAll() {
  const projects = await db('projects as p');
  const projectsWithBoolean = projects.map((project) => {
    return convertToBoolean(project);
  });
  return projectsWithBoolean;
}

async function createNewTask(task) {
  const convertFromBoolean = (task) => {
    if (task.task_completed === false || !task.task_completed) {
      return { ...task, task_completed: 0 };
    } else {
      return { ...task, task_completed: 1 };
    }
  };

  const [task_id] = await db('tasks').insert(convertFromBoolean(task));
  return getById(task_id);
}

module.exports = {
  getAll,
  createNewTask,
};
