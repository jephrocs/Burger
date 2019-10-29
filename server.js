var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express()
var PORT = process.env.PORT || 3030;



app.use(express.static("public"));


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

//handle bars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//Routes
var routes = require('./controllers/burger_controllers.js');
app.use(routes);


app.listen(PORT, function(){
console.log('Server is up on ' + PORT)
});