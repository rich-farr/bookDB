exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(),

    // Inserts seed entries
    knex('authors').insert({id: 1, first_name: 'Jack', last_name: 'Kerouac'}),
    knex('authors').insert({id: 2, first_name: 'Hanif', last_name: 'Kureishi'}),
    knex('authors').insert({id: 3, first_name: 'F. Scott', last_name: 'Fitzgerald'})
  );
};