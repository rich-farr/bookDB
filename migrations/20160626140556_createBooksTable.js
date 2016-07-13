exports.up = function(knex, Promise) {
  console.log('create books table')

  return knex.schema.createTableIfNotExists('books', function(table) {
    table.increments('id').primary
    table.string('title')
    table.integer('year')
    table.string('isbn')
    table.string('my_description')
    table.boolean('have_read')
    table.integer('author_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books').then(function () {
    console.log('books table was dropped')
  })
};
