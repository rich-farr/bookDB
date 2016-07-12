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
			'have_read'
			)
		.then(function (o) {
			o.forEach(function (i) {
				//add LibraryThing key
				//callApi(i.isbn)
				i.key = libThingKey
				//change "have read?" flag to yes or no:
				if (i.have_read === 0) {
					i.have_read = 'No'
				} else if (i.have_read === 1) {
					i.have_read = 'Yes'
				}
			})
			return o
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

// router.get('/edit/:id', function (req, res) {
// 	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
// 		.select(
// 			'books_id',
// 			'title',
// 			'year',
// 			'first_name',
// 			'last_name',
// 			'isbn',
// 			'have_read'
// 			)
// 		.where('books.id', req.params.id)
// 		.then(function(o) {
// 			//console.log(callApi('isbn'))
// 			var thisBook = o[0]
// 			thisBook.key = libThingKey
// 			//change "have read?" flag to yes or no:
// 			if (thisBook.have_read === 0) {
// 				thisBook.have_read = 'No'
// 			} else if (thisBook.have_read === 1) {
// 				thisBook.have_read = 'Yes'
// 			}
// 			res.render('editBook', thisBook)
// 		})
// })

// router.post('/books/:id', function(req,res) {
// 	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
// 		.select(
// 			'books_id',
// 			'title',
// 			'year',
// 			'first_name',
// 			'last_name',
// 			'isbn',
// 			'have_read'
// 			)
// 		.where('books.id', req.params.id)
// 		.then(function(o) {
// 			//console.log(callApi('isbn'))
// 			var thisBook = o[0]
// 			thisBook.key = libThingKey
// 			//change "have read?" flag to yes or no:
// 			if (thisBook.have_read === 0) {
// 				thisBook.have_read = 'No'
// 			} else if (thisBook.have_read === 1) {
// 				thisBook.have_read = 'Yes'
// 			}
// 			res.render('editBook', thisBook)
// 		})
//   var updateBook = req.body

//   var bookFilter = catsObj.cats[req.params.id - 1]

//   bookFilter.title = updateBook.title
//   bookFilter.year = updateBook.year
//   bookFilter.first_name = updateBook.first_name
//   bookFilter.last_name = updateBook.last_name
//   bookFilter.have_read = updateBook.have_read
//   res.render('showBook', bookFilter)
// })

module.exports = router;