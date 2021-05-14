const db = require('../../data/dbConfig');

function getAll() {
  return db('resources');
}

function getById(id) {
  return db('resources').where('resource_id', id).first();
}

async function createNewResource(resource) {
  const [id] = await db('resources').insert(resource);
  return getById(id);
}

module.exports = {
  getAll,
  createNewResource,
};
