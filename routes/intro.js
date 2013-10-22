var helpers = require('./helpers.js');

exports.show = function(req, res){
	req.track = "intro";
	helpers.get_file_structure(req, function(files){ 
	    res.render('index', {files: files}); 
	});
}

exports.showlab = function(req, res){
	req.track = "intro";
	helpers.get_file_structure(req, function(files){
		helpers.get_file(req, function(result){ 
			res.render('index', {
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
	req.track = "intro";
	helpers.save_file(req, function(callback){
		res.send("HERE");
	});
}