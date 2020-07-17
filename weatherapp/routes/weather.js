const router = require('express').Router();
const fetch = require('node-fetch');

require('dotenv').config()

//router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Swivt' });
    //res.sendFile(public/index.html)
  //});

router.get('/', (req , res) => {
    res.render('index');
});

router.post('/',(req,res) => {
    const city = req.body.city;
    const url_api = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}';

    fetch(url_api)
    .then(res => res.json())
    .then(data => console.log(data));
})

module.exports = router;