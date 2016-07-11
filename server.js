var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var Bear = require('./app/models/bear');

var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;


mongoose.connect('mongodb://bears:bears@ds031892.mlab.com:31892/bears');



//ROUTES
//========================================================
var router = express.Router();

router.use(function(req, res, next){
  console.log('Something is happening.');
  next();
});

router.get('/', function(req, res){
  res.json({message: 'hooray! welcome to our api!' });
});

//REGISTER THE ROUTES------------------------------------
app.use('/api', router);

//START THE SERVER
//=======================================================
app.listen(port);
console.log('Localhost is on port: ' + port);