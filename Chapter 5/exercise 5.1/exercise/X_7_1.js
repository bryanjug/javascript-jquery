$(document).ready (
	function() {
		$('#clickme').click (
			function() {
				var lastName = $('#lastname').val();
				var firstName = $('#firstname').val();
				
				if (firstName != '' && lastName != '') {
					
					$('#message').text('Your Full Name is ' + firstName + ' ' + lastName);
				} else {
					$('#message').text('Please enter your full name.');
				}
			}
		)
	}
)