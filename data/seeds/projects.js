exports.seed = function (knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'Building RESTful APIs with Express',
      project_description:
        'Build web servics based on the REST architectural style',
      project_completed: 1,
    },
    {
      project_name: 'Adding Data Persistence',
      project_description: 'Learn about databases and how to use them',
      project_completed: 1,
    },
    {
      project_name: 'Authentication & Testing',
      project_description: 'A complex and vital topic',
    },
  ]);
};
