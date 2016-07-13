exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),

    // Inserts seed entries
    knex('books').insert({id: 1, title: 'The Great Gatsby', year: 1925, isbn: '0141182636', my_description: '', have_read: true, author_id: 3}),
    knex('books').insert({id: 2, title: 'Fear and Loathing in Las Vegas', year: 1971, isbn: '000655136X', my_description: '', have_read: true, author_id: 5}),
    knex('books').insert({id: 3, title: 'The Buddha of Suburbia', year: 1990, isbn: '0571200435', my_description: '', have_read: false, author_id: 2}),
    knex('books').insert({id: 4, title: 'The Dharma Bums', year: 1958, isbn: '9780143039600', my_description: '', have_read: true, author_id: 1}),
    knex('books').insert({id: 5, title: 'Harry Potter and the Deathly Hallows', year: 2007, isbn: '9780747591054', my_description: '', have_read: true, author_id: 14})
    // knex('books').insert({id: 6, title: 'The Rum Diary', year: 1998, isbn: '0747542945', my_description: '', have_read: true, author_id: 5}),
    // knex('books').insert({id: 7, title: 'Desolation Angels', year: 1965, isbn: '0586089071', my_description: '', have_read: true, author_id: 1}),
    // knex('books').insert({id: 8, title: 'East of Eden', year: 1952, isbn: '0330300016', my_description: '', have_read: true, author_id: 4}),
    // knex('books').insert({id: 9, title: 'Schindler\'s Ark', year: 1982, isbn: '0340335017', my_description: '', have_read: false, author_id: 8}),
    // knex('books').insert({id: 10, title: 'On the Road', year: 1957, isbn: '0141037482', my_description: '', have_read: true, author_id: 1}),
    // knex('books').insert({id: 11, title: 'The Trial of the Cannibal Dog', year: 2003, isbn: '0141010037', my_description: '', have_read: true, author_id: 6}),
    // knex('books').insert({id: 12, title: 'Travels With Charley', year: 1962, isbn: '0553029665', my_description: '', have_read: true, author_id: 4}),
    // knex('books').insert({id: 13, title: 'Junky', year: 1953, isbn: '0140043519', my_description: '', have_read: true, author_id: 9}),
    // knex('books').insert({id: 14, title: 'Naked Lunch', year: 1959, isbn: '0586085602', my_description: '', have_read: true, author_id: 9}),
    // knex('books').insert({id: 15, title: 'A Confederacy of Dunces', year: 1980, isbn: '014010934X', my_description: '', have_read: true, author_id: 10}),
    // knex('books').insert({id: 16, title: 'Doctor Sax', year: 1959, isbn: '0586091564', my_description: '', have_read: false, author_id: 1}),
    // knex('books').insert({id: 17, title: 'The Diamond as Big as the Ritz', year: 1922, isbn: '014001733X', my_description: '', have_read: false, author_id: 3}),
    // knex('books').insert({id: 18, title: 'A Tale of Two Cities', year: 1859, isbn: '0141439602', my_description: '', have_read: true, author_id: 11}),
    // knex('books').insert({id: 19, title: 'Glamour and the Sea', year: 1996, isbn: '0864733054', my_description: '', have_read: true, author_id: 12}),
    // knex('books').insert({id: 20, title: 'Man Alone', year: 1939, isbn: '0143204343', my_description: '', have_read: true, author_id: 13}),
  );
};

