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

/*Redirect to Home Page route*/
router.get('/', function(req, res) {
	res.redirect('/home')
})

/* GET home page. */
router.get('/home', function(req, res) {
	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
		.select('title', 'year', 'first_name', 'last_name', 'image_link')
		.then(function(o) {
			var bookObj = {"books": o}
			//console.log(bookObj)
			res.render('index', bookObj)
		})
});

// router.get('/home', function(req, res) {
// 	knex('books')
// 		.where('id', RANDOM)
// 		.select('title', 'year', 'image_link')
// 		.then(function(o) {
// 			var bookObj = {"books": o}
// 			console.log(bookObj)
// 			res.render('index', bookObj)
// 		})
// })

module.exports = router;
