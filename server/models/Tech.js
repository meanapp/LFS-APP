var mongoose = require('mongoose');

//Create the Movie Schema

var MovieSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	url:{
		type: String,
		required: true
	}
});

//mongoose.model('posts',MovieSchema);

//Export the model Schema
module.exports = MovieSchema;