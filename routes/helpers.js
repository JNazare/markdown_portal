var request = require('request');
var fs = require( 'fs' );
var async = require( 'async' );

exports.newlab = function(req, callback){
	this.get_file_structure(req, function(files){
		this.get_file(req, function(result){ 
			callback.render('index', {
				logged_in: 'true',
				root: './public', 
				contents: result.contents, 
				files: files, 
				blob: result.blob, 
				saveurl: result.saveurl,
				FILEPICKER_KEY: process.env.FILEPICKER_KEY
			});
		});
	})
}

exports.getLandingPage = function(req, callback){
	fs.readFile("welcome.md", 'utf8', function(err, data){
		if (err) { throw err; }
		callback(data);
	});
}

exports.get_folder_structure = function(req, callback){
	var mypath = '/repos/StartupInstitute/curriculum/contents?'+req.session.token;
	var options = {
    url: 'https://api.github.com'+mypath,
    method: 'GET'};
	request(options, function (error, response, contents) {
		if (error) { console.log(error); }
		if (!error && response.statusCode == 200) {
			contents = JSON.parse(contents);
			var folders = []
			for (var i=0;i<contents.length;i++){
				folders[i] = contents[i].name;
			}
			callback(folders);
		}
	});
}

exports.get_file_structure = function(req, callback){
	var mypath = '/repos/StartupInstitute/curriculum/contents/'+req.track+'?'+req.session.token;
	var options = {
    url: 'https://api.github.com'+mypath,
    method: 'GET'};
	request(options, function (error, response, contents) {
		if (error) { console.log(error); }
		if (!error && response.statusCode == 200) {
			contents = JSON.parse(contents);
			var files = []
			for (var i=0;i<contents.length;i++){
				var fullfile = contents[i].name.split(".")[0];
				var splitfile = fullfile.split("-");
				var month = splitfile[0];
				var day = splitfile[1];
				var year = splitfile[2];
				var name = splitfile[3];
				files[i] = {"name": name, "month": month, "day": day, "year": year, "url": "/"+req.track+"/"+fullfile};
			}
			callback(files);
		}
	});
}

exports.get_file = function(req, callback){
	var mypath = '/repos/StartupInstitute/curriculum/contents/'+req.track+'/'+req.params.file+'.md?'+req.session.token;
	var options = {
    url: 'https://api.github.com'+mypath,
    method: 'GET',
    headers: { 'Accept': 'application/vnd.github.v3.raw' }};
	request(options, function (error, response, contents) {
		if (error) { console.log(error); }
		if (!error && response.statusCode == 200) {
			request('https://api.github.com'+mypath, function (error, reply, metadata){
				var blob = JSON.parse(metadata).sha; 
				callback({"contents": contents, "blob": blob, "saveurl": "/"+req.track+"/"+req.params.file+"/save"});
			})
		}
	});
}

exports.save_file = function(req, callback){
	var relative_path = '/repos/StartupInstitute/curriculum/contents/'+req.track+'/'+req.params.file+'.md?'+req.session.token;
	var content = new Buffer(req.body.content_to_save).toString('base64');
	content = String(content);
	var full_path = 'https://api.github.com'+relative_path;
	var message = 'Update file';
	var sha = req.body.blob_to_save;

	var options = {
		"method" : "PUT",
		"url" : full_path,
		"json" : {
			"message" : "my commit message",
			"content" : content,
			"sha" : sha
		}
	}
	console.log(options);
    request(options, function (error, response, body) {
		if (error) { console.log(error); }
		if (response.statusCode != 200) {
			console.log(response.statusCode);
		}
		if (!error && response.statusCode == 200) {
			callback("SAVED");
		}
	});
}
