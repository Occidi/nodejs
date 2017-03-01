const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    const contact = req.query;
    res.render('contact', {contact : contact});
});

app.get('/profile/:id', function(req, res) {
    const data = {age: 23, job: 'dev', hobbies:['league','coding','netflix']};
    res.render('profile', {champion : req.params.id, data : data});
});

app.listen(6969);