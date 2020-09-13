var $ = function (id) {
    return document.getElementById(id);
}
	
var addPatron = function() {
	
	validateItems();
	var isValid = validateItems();
	
	if (isValid == false) {
		$('endmessage').innerHTML = 'Patron Not Added!';
	} else {
		if (isValid == true) {
			$('endmessage').innerHTML = '';
			$('myform').submit();
		}
	}
}

function validateItems() {
	
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var email = $('email').value;
	var city = $('city').value;
	var donation = $('donation').value;

	var donationInt = parseInt(donation);

	if (firstName == '') {
		$('firstnameerror').innerHTML = 'Enter First Name';
	} else {
		if (firstName != '') {
			$('firstnameerror').innerHTML = '';
		}
	}
	if (lastName == '') {
		$('lastnameerror').innerHTML = 'Enter Last Name';
	} else {
		if (lastName != '') {
			$('lastnameerror').innerHTML = '';
		}
	}
	if (email == '') {
		$('emailerror').innerHTML = 'Enter Email';
	} else {
		if (email != '') {
			$('emailerror').innerHTML = '';
		}
	}
	if (city == '-') {
		$('cityerror').innerHTML = 'Select a City from the list';
	} else {
		if (city != '-') {
			$('cityerror').innerHTML = '';
		}
	}
	if (donation == '') {
		$('donationerror').innerHTML = 'Enter Donation Amount';
	} else {
		if (Number.isInteger(donationInt) == false) {
			$('donationerror').innerHTML = 'Amount must be numeric';
		} else {
			if (donationInt) {
				$('donationerror').innerHTML = '';
			} else {
				if (donation != '') {
					$('donationerror').innerHTML = '';
				}
			}
		}
	}
	
	if (firstName == '' || lastName == '' || email == '' || city == '-' || donation == '' || Number.isInteger(donationInt) == false) {
		return false;
	} else {
		return true;
	}
}

var clearFields = function() {
	
	$('firstname').value = '';
	$('lastname').value = '';
	$('email').value = '';
	$('city').value = '-';
	$('donation').value = '';
	
	$('firstnameerror').innerHTML = '';
	$('lastnameerror').innerHTML = '';
	$('emailerror').innerHTML = '';
	$('cityerror').innerHTML = '';
	$('donationerror').innerHTML = '';
	$('endmessage').innerHTML = '';
	
	$('firstname').focus();
}

window.onload = function () 
{
	$('addpatron').onclick = addPatron;
	$('clearfields').onclick = clearFields;
	$('firstname').focus();
}