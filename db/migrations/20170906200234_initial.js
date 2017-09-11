
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.float('latitude');
    table.float('longitude');
    table.string('phone_number');
    table.string('website_url');
    table.timestamps(true, true);
  }),

  knex.schema.createTable('happy_hours', (table) => {
    table.increments('id').primary();
    table.string('timeslot');
    table.text('drink_specials', 'longtext');
    table.text('food_specials', 'longtext');
    table.binary('menu_pictures');
    table.integer('location_id').unsigned();
    table.foreign('location_id').references('locations.id');
  }),

]);


exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('happy_hours'),
  knex.schema.dropTable('locations'),
]);
