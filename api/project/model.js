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

function getById(id) {
  return db('projects').where('project_id', id).first();
}

async function createNewTask(task) {
  const [task_id] = await db('projects').insert(convertToBoolean(task));
  return getById(task_id);
}

module.exports = {
  getAll,
  createNewTask,
};
