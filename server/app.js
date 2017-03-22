var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var cors = require('cors');


var users = require('./routes/users');
var questions = require('./routes/questions')
var answers = require('./routes/answers')
var votes = require('./routes/votes')
var auths = require('./routes/auths')

var app = express();

app.use(cors());
app.use(logger('dev'))
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/stackover');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/register/login', auths)
app.use('/api/questions', questions);
app.use('/api/user', users);
app.use('/api/answer', answers);
app.use('/api/vote', votes);

module.exports = app
