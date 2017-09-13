exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('social_media', table => {
      table.increments('id').primary();
      table.string('yelp');
      table.string('instagram');
      table.string('twitter');
      table.string('pinterest');
      table.string('facebook');
      table.integer('location_id').unsigned();
      table.foreign('location_id').references('locations.id');
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable('social_media')]);
