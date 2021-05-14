exports.seed = function (knex, Promise) {
  return knex('tasks').insert([
    {
      task_description: 'Attend Lecture',
      project_id: 1,
      task_notes: 'Eat lunch beforehand',
      task_completed: 1,
    },

    {
      task_description: 'Do Daily Project',
      project_id: 2,
      task_notes: 'Submit by 8pmEST',
      task_completed: 1,
    },

    {
      task_description: 'Weekly Sprint',
      project_id: 3,
      task_notes: 'Drink lots of coffee!',
    },
  ]);
};
