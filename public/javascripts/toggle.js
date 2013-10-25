$( "#edit-button" ).click(function() {
	$('#edit_foreditcontent').css('display', 'block');
	$('#view_foreditcontent').css('display', 'none');
	$('#asset-mask').css('display', 'block');
	$("#edit-button").attr("disabled", "disabled");
	$("#view-button").removeAttr("disabled", "disabled");
	$("#h1-button").removeAttr("disabled", "disabled");
	$("#h2-button").removeAttr("disabled", "disabled");
	$("#h3-button").removeAttr("disabled", "disabled");
	$("#bold-button").removeAttr("disabled", "disabled");
	$("#italic-button").removeAttr("disabled", "disabled");
	$("#link-button").removeAttr("disabled", "disabled");
	$("#bullet-button").removeAttr("disabled", "disabled");
	$("#code-button").removeAttr("disabled", "disabled");
	$("#upload-button").removeAttr("disabled", "disabled");
	});
$( "#view-button" ).click(function() {
	var editor = ace.edit("editor");
	var code = editor.getSession().getValue();
	$('#view_foreditcontent').css('display', 'block');
	$('#edit_foreditcontent').css('display', 'none');
	$('#asset-mask').css('display', 'none');
	$('#view_foreditcontent').html(marked(code));
	$('#content_to_save').val(code);
	$("#edit-button").removeAttr("disabled", "disabled");
	$("#view-button").attr("disabled", "disabled");
	$("#h1-button").attr("disabled", "disabled");
	$("#h2-button").attr("disabled", "disabled");
	$("#h3-button").attr("disabled", "disabled");
	$("#bold-button").attr("disabled", "disabled");
	$("#italic-button").attr("disabled", "disabled");
	$("#link-button").attr("disabled", "disabled");
	$("#bullet-button").attr("disabled", "disabled");
	$("#code-button").attr("disabled", "disabled");
	$("#upload-button").attr("disabled", "disabled");
});
$( "#save-button" ).click(function() {
	var editor = ace.edit("editor");
	var code = editor.getSession().getValue();
	var blob = $('#blob_to_save').val();
	var url = $('#url_to_save').val();
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
$ ("#table-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("|   Put   |   Headers   |   Here   |\n| ------- | ----------- | -------- |\n|   Put   |    Text     |   Here   |");
})
$ ("#hr-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.moveCursorTo(cursor.row, 0);
	editor.insert("-----");
})

$ ("#collaborate-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Collaborate](https://www.filepicker.io/api/file/zRZXCoRuTGmSlClBZFFQ)");
})
$ ("#create-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Create](https://www.filepicker.io/api/file/I7KpBIhJTUqtC8eHc4bt)");
})
$ ("#deliver-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Deliver](https://www.filepicker.io/api/file/dn5eBe7nQpKzRFerdJbo)");
})
$ ("#discover-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Discover](https://www.filepicker.io/api/file/He9AFZ42TQy4cV9Epbko)");
})
$ ("#download-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Download](https://www.filepicker.io/api/file/0tr8RKTmQvKlVrdqwfIn)");
})
$ ("#feedback-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Feedback](https://www.filepicker.io/api/file/bu9sUmL8RW2898hLaq7J)");
})
$ ("#install-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Install](https://www.filepicker.io/api/file/KXr4ysJGQ7imXNM60TcX)");
})
$ ("#read-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Read](https://www.filepicker.io/api/file/d0zChLE4SFq43UHbIkmk)");
})
$ ("#reflect-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Reflect](https://www.filepicker.io/api/file/ZrqFeG5CSpyNCUfs6abB)");
})
$ ("#spiral-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Spiral](https://www.filepicker.io/api/file/CsUJqHnwSKK5kMZ9HZp5)");
})
$ ("#stretch-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Stretch](https://www.filepicker.io/api/file/U1UTndBSAuxplpGfh7kg)");
})
$ ("#watch-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Watch](https://www.filepicker.io/api/file/PJYQirO4Qa26p8uUMqrP)");
})
