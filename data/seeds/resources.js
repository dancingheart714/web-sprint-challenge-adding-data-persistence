exports.seed = function (knex, Promise) {
  return knex('resources').insert([
    { resource_name: 'computer', resource_description: 'ASUS VivoBook 14' },
    {
      resource_name: 'keyboard',
      resource_description: 'Logitech G Pro Mechanical Gaming Keyboard',
    },
    { resource_name: 'monitor', resource_description: 'Acer 28"' },
  ]);
};
