var express = require('express');
var app = express();
var fs = require('fs')
var bookObj = fs.readFileSync('data/db.json', 'utf8')
var path = require('path');

/* GET home page. */
app.get('/', function(req, res) {
	bookObj = JSON.parse(bookObj)
	// console.log(bookObj)
  res.render('index', bookObj)
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: "Rich's book catalogue" });
// });

module.exports = app;
