var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
var dotenv = require('dotenv')
dotenv.load()
var dbPath = path.join(__dirname, '../dev.sqlite3')
var libThingKey = process.env.LIBRARY_THING_KEY
var callApi = require('../callApi')
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename:dbPath
  },
  useNullAsDefault: true
})

/*Redirect to Home Page route*/
router.get('/', function(req, res) {
	res.redirect('/home')
})

/* GET home page. */
router.get('/home', function(req, res) {
	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
		.select(
			'books.id',
			'title',
			'year',
			'first_name',
			'last_name',
			'isbn',
			'have_read',
			'my_description'
			)
		.then(function (books) {
			var promises = books.map(function (book) {
				return callApi(book)
			})
			return Promise.all(promises)
		})
		.then(function(o) {
			var randomBook = o[Math.floor(Math.random() * o.length)]
			randomBook.key = libThingKey
			//change "have read?" flag to yes or no:
			if (randomBook.have_read === 0) {
				randomBook.have_read = 'No'
			} else if (randomBook.have_read === 1) {
				randomBook.have_read = 'Yes'
			}
			res.render('index', randomBook)
		})
});

module.exports = router;
