$( "#edit-button" ).click(function() {
	$('#edit_foreditcontent').css('display', 'block');
	$('#view_foreditcontent').css('display', 'none');
	});

	$( "#view-button" ).click(function() {
	var editor = ace.edit("editor");
	var code = editor.getSession().getValue();
	console.log(code);
	  $('#view_foreditcontent').css('display', 'block');
	  $('#edit_foreditcontent').css('display', 'none');
	  $('#view_foreditcontent').html(marked(code));
});