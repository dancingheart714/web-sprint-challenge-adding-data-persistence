exports.seed = async function (knex, Promise) {
  await knex('projects').insert([
    {
      project_id: 1,
      project_name: 'Building RESTful APIs with Express',
      project_description:
        'Build web servics based on the REST architectural style',
      project_completed: 1,
    },
    {
      project_id: 2,
      project_name: 'Adding Data Persistence',
      project_description: 'Learn about databases and how to use them',
      project_completed: 1,
    },
    {
      project_id: 3,
      project_name: 'Authentication & Testing',
      project_description: 'A complex and vital topic',
      project_completed: 1,
    },
  ]);
};
