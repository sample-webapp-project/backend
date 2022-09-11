var express = require('express');
var router = express.Router();

// import books.json
var books = require('../mockData/books.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(books);
});

module.exports = router;
