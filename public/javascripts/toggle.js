$( "#edit-button" ).click(function() {
	$('#edit_foreditcontent').css('display', 'block');
	$('#view_foreditcontent').css('display', 'none');
	});
$( "#view-button" ).click(function() {
	var editor = ace.edit("editor");
	var code = editor.getSession().getValue();
	  $('#view_foreditcontent').css('display', 'block');
	  $('#edit_foreditcontent').css('display', 'none');
	  $('#view_foreditcontent').html(marked(code));
	  $('#content_to_save').val(code);
});
$( "#save-button" ).click(function() {
	var editor = ace.edit("editor");
	var code = editor.getSession().getValue();
	var blob = $('#blob_to_save').val();
	var url = $('#url_to_save').val()
	$('#saved').css('display', 'block');
	$.post(url, {content_to_save: code, blob_to_save: blob}, function(response){
		console.log("Saved");
	});
});
$ ("#upload-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	filepicker.pickAndStore({mimetype:"image/*"},
    {location:"S3"}, function(InkBlobs){
    	var url = JSON.stringify(InkBlobs[0].url);
    	var urlslice = url.slice(1, (url.length-1));
   		editor.insert("![Text to link]("+urlslice+")");
    });
})
$ ("#h1-button").click(function(){
	var editor = ace.edit("editor");
	editor.splitLine();
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("#");
})
$ ("#h2-button").click(function(){
	var editor = ace.edit("editor");
	editor.splitLine();
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("##");
})
$ ("#h3-button").click(function(){
	var editor = ace.edit("editor");
	editor.splitLine();
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("###");
})
$ ("#bold-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("**Insert bolded text here**");
})
$ ("#italic-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("*Insert italic text here*");
})
$ ("#link-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("[Text to link](Insert URL here)");
})
$ ("#bullet-button").click(function(){
	var editor = ace.edit("editor");
	editor.splitLine();
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("* \n* \n* ");
})
$ ("#code-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("```\nInsert code here\n```");
})
$ ("#create-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Create](https://www.filepicker.io/api/file/bH8xsvAMS1qtRi2NTnny)");
})
$ ("#discover-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Discover](https://www.filepicker.io/api/file/kYd18f95RhydTD69InvX)");
})
$ ("#feedback-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Feedback](https://www.filepicker.io/api/file/5tgZQb3uRtCaU7zrXbHO)");
})
$ ("#read-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Read](https://www.filepicker.io/api/file/JyipiCMT56UHL7px5xtY)");
})
$ ("#stretch-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Stretch](https://www.filepicker.io/api/file/6vaf7cMoTi60a0WbK6tg)");
})
$ ("#watch-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Watch](https://www.filepicker.io/api/file/FJN8VOmQQuyDhgg0tEMH)");
})