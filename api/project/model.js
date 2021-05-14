function getById(id) {
  return Promise.resolve('awesome by id');
}

function getAll() {
  return Promise.resolve('awesome all');
}

function createNewProject() {
  return Promise.resolve('awesome create');
}

module.exports = {
  getById,
  getAll,
  createNewProject,
};
