exports.seed = function (knex, Promise) {
  return knex('tasks').insert([
    {
      task_id: 1,
      task_description: 'Attend Lecture',
      task_notes: 'Eat lunch beforehand',
      task_completed: 1,
      project_id: 1,
    },

    {
      task_id: 2,
      task_description: 'Do Daily Project',
      task_notes: 'Submit by 8pmEST',
      task_completed: 1,
      project_id: 2,
    },

    {
      task_id: 3,
      task_description: 'Weekly Sprint',
      task_notes: 'Drink lots of coffee!',
      task_completed: 1,
      project_id: 1,
    },
  ]);
};
