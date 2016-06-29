var express = require('express');
var router = express.Router();
var fs = require('fs')
//var bookObj = fs.readFileSync('data/db.json', 'utf8')
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
	knex.from('authors').innerJoin('books', 'authors.id', 'books.author_id')
		.select('title', 'year', 'first_name', 'last_name')
		.then(function(keys) {
			console.log(keys)

		})
  res.render('index', bookObj)
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: "Rich's book catalogue" });
// });

module.exports = router;
