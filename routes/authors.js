var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
var dbPath = path.join(__dirname, '../dev.sqlite3')
var libThingKey = process.env.LIBRARY_THING_KEY
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename:dbPath
  },
  useNullAsDefault: true
})

/* GET authors page. */

router.get('/', function(req, res) {
	knex.from('authors')
		.select('*')
		.then(function(o) {
			var authorsObj = {"authors": o}
			//console.log(o)
			res.render('authors', authorsObj)
		})
})

router.get('/:id', function (req, res) {
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
		.where('authors.id', req.params.id)
		.then(function(o) {
			//change "have read?" flag to yes or no:
			o.forEach(function (i) {
				i.key = libThingKey
				if (i.have_read === 0) {
					i.have_read = 'No'
				} else if (i.have_read === 1) {
					i.have_read = 'Yes'
				}
			})
			var thisAuthor = {"books": o}
			thisAuthor.first_name = o[0].first_name
			thisAuthor.last_name = o[0].last_name
			//console.log(thisAuthor)
			res.render('showAuthor', thisAuthor)
		})
})

module.exports = router;