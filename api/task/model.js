const db = require('../../data/dbConfig');

//GET/api/tasks
//Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
//Each task must include project_name and project_description
//Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]

const booleanValue = (task) => {
  if (task.task_completed === 0 || !task.task_completed) {
    return { ...task, task_completed: false };
  } else {
    return { ...task, task_completed: true };
  }
};

async function getAll() {
  const tasks = await db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    );
  const tasksWithBoolean = tasks.map((task) => {
    return booleanValue(task);
  });
  return tasksWithBoolean;
}

//POST/api/tasks
//Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
//Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

async function getById(id) {
  const newTask = await db('tasks as t').where('t.task_id', id).first();
  return booleanValue(newTask);
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
  getById,
  getAll,
  createNewTask,
};
