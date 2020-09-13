$(document).ready(function() {
	$('#mysubmit').click(function() {
		var firstName = $('#first_name').val().trim();
		$('#first_name').val(firstName);
		
		var lastName = $('#last_name').val().trim();
		$('#last_name').val(lastName);
		
		var male = $('input[name="gender"]:checked').val();
		var female = $('input[name="gender"]:checked').val();
		
		//var years = $('option[id="years"]:selected').val();
		var years = $('#years').val();
		
		if (firstName == '') {
			$('#first_error').text('You must Enter a First Name');
			$('#first_name').focus();
			return;
		} else {
			$('#first_error').text('');
		}
		
		if (lastName == '') {
			$('#last_error').text('You must Enter a Last Name');
			$('#last_name').focus();
			return;
		} else {
			$('#last_error').text('');
		}
		
		if (male != 'M' && female != 'F') {
			$('#gender_error').text('You must pick a gender');
			return;
		} else {
			$('#gender_error').text('');
		}
		
		if (years != parseInt(years) || years == '-') {
			$('#years_error').text('You must choose your years of experience');
			return;
		} else {
			if (years == parseInt(years)) {
				$('#years_error').text('');
			}
		}
		
		if (firstName != '' && lastName != '' && (male == 'M' || female == 'F') && years == parseInt(years)) {
			$('#message').css({'background-color': 'yellow', 'padding-left': '2em'});

			$('#message').html('<h1>Employment Stats for ' + firstName + ' ' + lastName + '</h1><br>');
			if (male == 'M') {
				$('#message').append('You are a: Male<br>');
			}
			
			if (female == 'F') {
				$('#message').append('You are a: Female<br>');
			}
			$('#message').append('You have: ' + years + ' years experience<br><br><br><br>');
		}
	});
	return false;
});