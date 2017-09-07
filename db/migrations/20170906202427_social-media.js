
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('social_media', (table) => {
    table.increments('id').primary();
    table.string('yelp');
    table.string('instagram');
    table.string('twitter');
    table.string('pinterest');
    table.string('facebook');
  }),

  knex.schema.table('location', (table) => {
    table.integer('social_media_id').unsigned();
    table.foreign('social_media_id').references('social_media.id');
  }),
]);


exports.down = (knex, Promise) => Promise.all([
  knex.schema.table('location', (table) => {
    table.dropColumn('social_media_id');
  }),
  knex.schema.dropTable('social_media'),
]);
