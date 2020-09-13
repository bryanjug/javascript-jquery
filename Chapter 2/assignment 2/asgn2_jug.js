var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var petCount = $('numpets').value;
	
	var today = new Date();
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();
	
	var todayFormatted = todaymm + '-' + todaydd + '-' + todayyyy;
	
	var message = 'Your name is listed as ' + lastName + ', ' + firstName + " and today's date is " + todayFormatted + '. ';
	
	if (firstName == '') {
		$('firstname_error').innerHTML = 'Please enter first name';
	} else {
		if (firstName != '') {
			$('firstname_error').innerHTML = '';
		}
	}
	if (lastName == '') {
		$('lastname_error').innerHTML = 'Please enter last name';
	} else {
		if (lastName != '') {
			$('lastname_error').innerHTML = '';
		}
	}
	if (petCount == '') {
		$('numpets_error').innerHTML = 'Please enter the number of pets you have';
	} else {
		if (petCount != '') {
			$('numpets_error').innerHTML = '';
		}
	}
	
	for (cntr = 1; cntr <= petCount; cntr++) {
		
		var myPetId = 'pet' + cntr;
		var myPetName = $(myPetId).value;
		
		if (cntr == '1') {
			if (myPetName != '') {
				message += 'Your Pet #1 is named ' + myPetName + '. ';
			}
		} else {
			if (cntr == '2') {
				if (myPetName != '') {
					message += 'Your Pet #2 is named ' + myPetName + '. ';
				}
			} else {
				if (cntr == '3') {
					if (myPetName != '') {
						message += 'Your Pet #3 is named ' + myPetName + '. ';
					}
				}
			}
		}
	}
	$('message').innerHTML = message;
}

window.onload = function () {
    $("mybutton").onclick = processInfo;
}