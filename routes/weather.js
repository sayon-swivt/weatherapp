const router = require('express').Router();

router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Swivt' });
    res.sendFile(public/index.html)
  });



module.export = router;