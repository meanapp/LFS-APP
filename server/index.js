var express = require('express'), 
   mongoose = require('mongoose'),
 bodyParser = require('body-parser'),
 methodOverride = require('method-override'),
 _ = require('lodash');

//Create the application
 var app = express();

 //Add Middleware necessary for REST API's
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());
 app.use(methodOverride('X-HTTP_Method-Override'));

 //CORS Support
 app.use(function (req,res,next){
 	res.header('Access-Control-Allow-Origin','*');
 	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
 	res.header('Access-Control-Allow-Headers','Content-Type');
 	next();

 });



//Connect to Mongo db
 mongoose.connect('mongodb://localhost/moviedb');
 mongoose.connection.once('open',function(){
	
	//Load the models
	app.models =require('./models/index');

	//Load the routes
	var routes = require('./routes');
	_.each(routes,function(controller, route){
		app.use(route,controller(app,route));
	});

 	console.log('Listening on Port 3000');
 	app.listen(3000);
 })