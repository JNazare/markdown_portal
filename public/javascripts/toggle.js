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
	editor.insert("![Collaborate](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/collaborate.png)");
})
$ ("#create-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Create](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/create.png)");
})
$ ("#deliver-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Deliver](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/deliver.png)");
})
$ ("#discover-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Discover](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/discover.png)");
})
$ ("#download-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Download](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/download.png)");
})
$ ("#feedback-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Feedback](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/feedback.png)");
})
$ ("#install-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Install](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/install.png)");
})
$ ("#read-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Read](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/read.png)");
})
$ ("#reflect-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Reflect](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/reflect.png)");
})
$ ("#spiral-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Spiral](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/spiral.png)");
})
$ ("#stretch-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Stretch](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/stretch.png)");
})
$ ("#watch-button").click(function(){
	var editor = ace.edit("editor");
	var cursor = editor.getCursorPosition();
	editor.insert("![Watch](https://raw.github.com/StartupInstitute/curriculum_github/master/public/images/watch.png)");
})
