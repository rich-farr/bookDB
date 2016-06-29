var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
var dbPath = path.join(__dirname, '../dev.sqlite3')
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename:dbPath
  },
  useNullAsDefault: true
})

/* GET home page. */
router.get('/', function(req, res) {
	res.redirect('/home')
})

router.get('/home', function(req, res) {
	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
		.select('title', 'year', 'first_name', 'last_name', 'image_link')
		.then(function(o) {
			var bookObj = {"books": o}
			console.log(bookObj)
			res.render('index', bookObj)
		})
});

// router.get('/books', function(req, res) {

// })

module.exports = router;
