var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Swivt' });
  res.sendFile(public/index.html)
});

module.exports = router;
