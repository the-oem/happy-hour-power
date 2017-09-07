
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('settings', (table) => {
    table.increments('id').primary();
    table.float('default_search_radius');
  }),
]);


exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('settings'),
]);
