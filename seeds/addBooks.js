exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),

    // Inserts seed entries
    knex('books').insert({id: 1, title: 'The Great Gatsby', year: 1925, image_link: 'http://www.beautifulbookcovers.com/wp-content/uploads/2013/01/gatsby-original-cover-art.jpg', have_read: true, author_id: 3}),
    knex('books').insert({id: 2, title: 'On the Road', year: 1957, image_link: 'https://s-media-cache-ak0.pinimg.com/736x/16/d5/e3/16d5e3ddfd15328412f96366e742c3f5.jpg', have_read: true, author_id: 1}),
    knex('books').insert({id: 3, title: 'The Buddha of Suburbia', year: 1990, image_link: 'http://www.gutenberg-gym.de/redaktion/_data/cover1.jpg', have_read: false, author_id: 2}),
    knex('books').insert({id: 4, title: 'The Dharma Bums', year: 1958, image_link: '#', have_read: true, author_id: 1}),
    knex('books').insert({id: 5, title: 'East of Eden', year: 1952, image_link: '#', have_read: true, author_id: 4}),
    knex('books').insert({id: 6, title: 'The Trial of the Cannibal Dog', year: 2003, image_link: '#', have_read: true, author_id: 6}),
    knex('books').insert({id: 7, title: 'Schindler\'s Ark', year: 1982, image_link: '#', have_read: false, author_id: 8}),
    knex('books').insert({id: 8, title: 'Travels With Charley', year: 1962, image_link: '#', have_read: true, author_id: 4}),
    knex('books').insert({id: 9, title: 'Fear and Loathing in Las Vegas', year: 1971, image_link: '#', have_read: true, author_id: 5}),
    knex('books').insert({id: 10, title: 'The Rum Diary', year: 1998, image_link: '#', have_read: true, author_id: 5}),
    knex('books').insert({id: 11, title: 'Desolation Angels', year: 1965, image_link: '#', have_read: true, author_id: 1}),
    knex('books').insert({id: 12, title: 'Junkie', year: 1953, image_link: '#', have_read: true, author_id: 9}),
    knex('books').insert({id: 13, title: 'Naked Lunch', year: 1959, image_link: '#', have_read: true, author_id: 9}),
    knex('books').insert({id: 14, title: 'A Confederacy of Dunces', year: 1980, image_link: '#', have_read: true, author_id: 10}),
    knex('books').insert({id: 15, title: 'Doctor Sax', year: 1959, image_link: '#', have_read: false, author_id: 1}),
    knex('books').insert({id: 16, title: 'The Diamond as Big as the Ritz', year: 1922, image_link: '#', have_read: false, author_id: 3}),
    knex('books').insert({id: 17, title: 'A Tale of Two Cities', year: 1859, image_link: '#', have_read: true, author_id: 11}),
    knex('books').insert({id: 18, title: 'Glamour and the Sea', year: 1996, image_link: '#', have_read: true, author_id: 12}),
    knex('books').insert({id: 19, title: 'Man Alone', year: 1939, image_link: '#', have_read: true, author_id: 13}),
    knex('books').insert({id: 20, title: 'Dirk Gently\'s Holistic Detective Agency', year: 1987, image_link: '#', have_read: true, author_id: 14})
  );
};

