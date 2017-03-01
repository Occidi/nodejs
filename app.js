const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// create application/x-www-form-urlencoded parser 
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact',  function(req, res) {
    res.render('contact', {contact : req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:id', function(req, res) {
    const data = {age: 23, job: 'dev', hobbies:['league','coding','netflix']};
    res.render('profile', {champion : req.params.id, data : data});
});

app.listen(6969);