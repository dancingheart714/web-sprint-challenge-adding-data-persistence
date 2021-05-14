function getById(id) {
  return Promise.resolve('awesome by id');
}

function getAll() {
  return Promise.resolve('awesome all');
}

function createNewResource() {
  return Promise.resolve('awesome create');
}

module.exports = {
  getById,
  getAll,
  createNewResource,
};
