$(document).ready(function() {
	var image = '';
	$('#john').click(function() {
		image = $('#john').clone(true);
		
		$('#johnbox').prepend(image);
		$('h2').html('<font color="red">John is in the box!</font>');
	})
	
	$('#removejohn').click(function() {
		$('#john').replaceWith('');
		
		$('h2').html('<font>Click John to put him in the Box</font>');
	})
});