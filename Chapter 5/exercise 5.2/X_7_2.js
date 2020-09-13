$(document).ready(function() {
	$("#clickme").click(function () {
		
		var myFirst = $('#firstname').val();
		var myAge = $('#age').val();
		
		if (myFirst == '') {
			$('#errorfirst').text('Name is required');
			return;
		} else {
			$('#errorfirst').text('');
		}
		if (myAge == '') {
			$('#errorage').text('Age is required');
			return;
		} else {
			$('#errorage').text('');
		}
		if (myAge > 40) {
			$('#message').text('Hi ' +  myFirst + '. You are over the hill.');
		} else {
			if (myAge < 40) {
				$('#message').text('Hi ' + myFirst + ". You are still young, don't sleep so much");
			}
		}
	})
})