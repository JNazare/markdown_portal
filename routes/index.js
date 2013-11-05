var helpers = require('./helpers.js');

exports.index = function(req, res){
	helpers.getLandingPage(req, function(content){
		console.log(content);
  		res.render('index', {landingText: content, FILEPICKER_KEY: process.env.FILEPICKER_KEY});
  	});
};