const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req, res) {
    const data = {age: 23, job: 'dev'};
    res.render('profile', {champion : req.params.id, data : data});
});

app.listen(6969);