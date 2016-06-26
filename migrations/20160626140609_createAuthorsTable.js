exports.up = function(knex, Promise) {
	console.log('create authors table')

	return knex.schema.createTableIfNotExists('authors', function(table) {
		table.increments('id').primary
		table.string('first_name')
		table.string('last_name')
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors').then(function() {
  	console.log('authors table was dropped')
  })
};
