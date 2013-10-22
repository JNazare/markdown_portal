var helpers = require('./helpers.js');

exports.show = function(req, res){
	req.track = "product";
	helpers.get_file_structure(req, function(files){ 
	    res.render('index', {files: files, logged_in: 'true'}); 
	});
}

exports.showlab = function(req, res){
	req.track = "product";
	helpers.get_file_structure(req, function(files){
		helpers.get_file(req, function(result){ 
			res.render('index', {
				logged_in: 'true',
				root: './public', 
				contents: result.contents, 
				files: files, 
				blob: result.blob, 
				saveurl: result.saveurl
			});
		});
	})
}

exports.savelab = function(req, res){
	req.track = "product";
	helpers.save_file(req, function(callback){
		res.send("HERE");
	});
}