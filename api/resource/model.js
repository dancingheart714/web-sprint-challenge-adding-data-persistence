const db = require('../../data/dbConfig');

//GET/api/resources
//Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]

function getAll() {
  return db('resources');
}

//POST/api/resources
//Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}//

function getById(id) {
  return db('resources').where('resource_id', id).first();
}

async function createNewResource() {
  const [id] = await db('resources').insert(resource);
  return getById(id);
}

module.exports = {
  getById,
  getAll,
  createNewResource,
};
