$(document).ready(function() {
	$('#mysubmit').click(function() {
		var firstName = $('#first_name').val().trim();
		var age = parseInt($('#age').val());
		
		var addedAge = age + 10;
		$('#first_name').val(firstName);
		
		$('#message').text(firstName + '. You claim you are ' + age + ' but I bet you are really ' + addedAge + ' years old');
		return false;
	})
});