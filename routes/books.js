var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
var dbPath = path.join(__dirname, '../dev.sqlite3')
var callApi = require('../callApi')
var libThingKey = process.env.LIBRARY_THING_KEY
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename:dbPath
  },
  useNullAsDefault: true
})

/* GET books page. */
router.get('/', function(req, res) {
	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
		.select(
			'books.id',
			'title',
			'year',
			'first_name',
			'last_name',
			'isbn',
			'have_read'
			)
		.then(function (o) {
			o.forEach(function (i) {
				i.key = libThingKey
				//var extraStuff = callApi(i.isbn)
				//change "have read?" flag to yes or no:
				if (i.have_read === 0) {
					i.have_read = 'No'
				} else if (i.have_read === 1) {
					i.have_read = 'Yes'
				}
			})
			var booksObj = {"books": o}
			//console.log(booksObj)
			res.render('books', booksObj)
		})
})

router.get('/:id', function (req, res) {
	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
		.select(
			'title',
			'year',
			'first_name',
			'last_name',
			'isbn',
			'have_read'
			)
		.where('books.id', req.params.id)
		.then(function(o) {
			//console.log(callApi('isbn'))
			var thisBook = o[0]
			thisBook.key = libThingKey
			//change "have read?" flag to yes or no:
			if (thisBook.have_read === 0) {
				thisBook.have_read = 'No'
			} else if (thisBook.have_read === 1) {
				thisBook.have_read = 'Yes'
			}
			res.render('showBook', thisBook)
		})
})

module.exports = router;