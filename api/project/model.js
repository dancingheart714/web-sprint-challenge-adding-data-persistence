const db = require('../../data/dbConfig');

const convertToBoolean = (project) => {
  if (project.project_completed === false || !project.project_completed) {
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

const result = (boolean) => {
  if (boolean === true || boolean === 1 || boolean === '1') {
    return 1;
  } else {
    return 0;
  }
};

async function createNewTask(project) {
  const [id] = await db('projects').insert({
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: result(project.project_completed),
  });

  let projects = await db('projects')
    .select('*')
    .where('project_id', id)
    .first();

  if (projects.project_completed === 1) {
    projects.project_completed = true;
  } else {
    projects.project_completed = false;
  }
  return projects;
}

module.exports = {
  getAll,
  createNewTask,
};
