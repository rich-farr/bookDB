exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(),

    // Inserts seed entries
    knex('authors').insert({id: 1, first_name: 'Jack', last_name: 'Kerouac'}),
    knex('authors').insert({id: 2, first_name: 'Hanif', last_name: 'Kureishi'}),
    knex('authors').insert({id: 3, first_name: 'F. Scott', last_name: 'Fitzgerald'}),
    knex('authors').insert({id: 4, first_name: 'John', last_name: 'Steinbeck'}),
    knex('authors').insert({id: 5, first_name: 'Hunter S.', last_name: 'Thompson'}),
    knex('authors').insert({id: 6, first_name: 'Anne', last_name: 'Salmond'}),
    knex('authors').insert({id: 7, first_name: 'Katherine', last_name: 'Mansfield'}),
    knex('authors').insert({id: 8, first_name: 'Thomas', last_name: 'Keneally'}),
    knex('authors').insert({id: 9, first_name: 'William S.', last_name: 'Burroughs'}),
    knex('authors').insert({id: 10, first_name: 'John Kennedy', last_name: 'Toole'}),
    knex('authors').insert({id: 11, first_name: 'Charles', last_name: 'Dickens'}),
    knex('authors').insert({id: 12, first_name: 'Elizabeth', last_name: 'Knox'}),
    knex('authors').insert({id: 13, first_name: 'John', last_name: 'Mulgan'}),
    knex('authors').insert({id: 14, first_name: 'Douglas', last_name: 'Adams'})
  );
};