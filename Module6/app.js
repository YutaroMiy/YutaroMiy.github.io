var express = require('express');

//require the controller
var surveyController = require('./surveyController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
surveyController(app);
//listen to port
app.listen(3000);
console.log('Listening on port 3000:');