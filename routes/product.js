var helpers = require('./helpers.js');

exports.show = function(req, res){
	req.track = "product";
	helpers.get_file_structure(req, function(files){ 
	    res.render('index', {files: files}); 
	});
}

exports.showlab = function(req, res){
	req.track = "product";
	console.log("PARAMS");
	console.log(req.params.file);
	res.render('index', {root: './public'} );
	// helpers.get_file(req, function(contents){ 
	    
	//     //{root: './public'} 
	// });
}