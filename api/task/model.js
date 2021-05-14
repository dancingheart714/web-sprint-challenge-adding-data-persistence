function getById(id) {
  return Promise.resolve('awesome by id');
}

function getAll() {
  return Promise.resolve('awesome all');
}

function createNewTask() {
  return Promise.resolve('awesome create');
}

module.exports = {
  getById,
  getAll,
  createNewTask,
};
