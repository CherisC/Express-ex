const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send('Hello World!');
})

app.get('/cats', function(req, res, next) {
    res.send('Meow');
})

app.get('/dogs', function(req, res, next) {
    res.send('Woof');
})

app.get('/cats_and_dogs', function(req,res, next) {
    res.send('Living together');
});


app.get('/user/greet/:name', function(req, res, next) {
    res.send('Hello, ' + req.params.name + '!');
})

app.get('/year', function(req, res, next) {
    var year = req.query.year || '1970';
    res.send('I was born in ' + ` ${year}` + '.');
})

app.listen(3000, function(){
    console.log('This server is ON and POPPIN.')
})