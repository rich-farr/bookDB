exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),

    // Inserts seed entries
    knex('books').insert({id: 1, title: 'The Great Gatsby', year: 1925, image_link: '"http://www.beautifulbookcovers.com/wp-content/uploads/2013/01/gatsby-original-cover-art.jpg"', have_read: true, author_id: 3}),
    knex('books').insert({id: 2, title: 'On the Road', year: 1957, image_link: '"https://s-media-cache-ak0.pinimg.com/736x/16/d5/e3/16d5e3ddfd15328412f96366e742c3f5.jpg"', have_read: true, author_id: 1}),
    knex('books').insert({id: 3, title: 'The Buddha of Suburbia', year: 1990, image_link: 'http://www.gutenberg-gym.de/redaktion/_data/cover1.jpg', have_read: false, author_id: 2})
  );
};

