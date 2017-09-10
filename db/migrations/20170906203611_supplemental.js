exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('location_type', (table) => {
    table.increments('id').primary();
    table.string('type');
  }),

  knex.schema.createTable('status_type', (table) => {
    table.increments('id').primary();
    table.string('type');
  }),

  knex.schema.table('locations', (table) => {
    table.integer('location_type_id').unsigned();
    table.foreign('location_type_id').references('location_type.id');
  }),

  knex.schema.table('happy_hours', (table) => {
    table.integer('status_type_id').unsigned();
    table.foreign('status_type_id').references('status_type.id');
  }),
]);


exports.down = (knex, Promise) => Promise.all([
  knex.schema.table('happy_hours', (table) => {
    table.dropColumn('status_type_id');
  }),

  knex.schema.table('locations', (table) => {
    table.dropColumn('location_type_id');
  }),

  knex.schema.dropTable('status_type'),
  knex.schema.dropTable('location_type'),
]);
