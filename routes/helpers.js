var request = require('request');
var fs = require( 'fs' );
var async = require( 'async' );

exports.get_folder_structure = function(req, callback){
	var mypath = '/repos/StartupInstitute/markdown_curriculum/contents?'+req.session.token;
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
	var mypath = '/repos/StartupInstitute/markdown_curriculum/contents/'+req.track+'?'+req.session.token;
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
	var mypath = '/repos/StartupInstitute/markdown_curriculum/contents/'+req.track+'/'+req.params.file+'?'+req.session.token;
	var options = {
    url: 'https://api.github.com'+mypath,
    method: 'GET',
    headers: { 'Accept': 'application/vnd.github.v3.raw' }};
	request(options, function (error, response, contents) {
		if (error) { console.log(error); }
		if (!error && response.statusCode == 200) {
			callback(contents);
		}
	});
}

