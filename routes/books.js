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

function booksArray() {
	return knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
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
			books.forEach(function (book) {
				//add LibraryThing key
				book.key = libThingKey
				book.description = ''
				//change "have read?" flag to yes or no:
				if (book.have_read === 0) {
					book.have_read = 'No'
				} else if (book.have_read === 1) {
					book.have_read = 'Yes'
				}
			})
			return books
		})
		.then(function (books) {
			var promises = books.map(function (book) {
				return callApi(book)
			})
			return Promise.all(promises)
		})
		.catch(function(error) {
			console.error(error)
		})
	}


/* GET books page. */
router.get('/', function(req, res) {
	booksArray()
		.then(function(arr) {
			var booksObj = {"books": arr}
			res.render('books', booksObj)
		})
})

/* GET individual book */
router.get('/:id', function (req, res) {
	booksArray()
		.then(function(arr) {
			var thisBook = arr[req.params.id - 1]  //need to refactor later to use .where(book.id, req.params.id)
			res.render('showBook', thisBook)
		})
})

router.get('/edit/:id', function (req, res) {
	booksArray()
		.then(function(arr) {
			var thisBook = arr[req.params.id - 1]  //need to refactor later to use .where(book.id, req.params.id)
			res.render('editBook', thisBook)
		})
})

router.post('/:id', function(req,res) {
	var haveRead = parseInt(req.body.have_read)
	var myDesc = req.body.my_description
	return knex('books')
		.where('id', req.params.id)
		.update({
			'have_read': haveRead,
			'my_description': myDesc
		})
		.then(
			res.redirect('/books/' + req.params.id)
		)
})

module.exports = router;