var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var myName = $('firstname').value;
	var myAge = $('age').value;
	
	if (myName == '' || myAge == '') {
		$('message').innerHTML = 'Please enter both your name and age!';
	} else {
		if (myName == 'steve' || myName == 'stephen') {
			$('message2').innerHTML = 'You have the same first name as the instructor.';
		} else {
			if (myName != 'stephen' || myName != 'steve') {
				$('message2').innerHTML = '';
			}
		}
		if (myAge < 18) {
			$('message').innerHTML = myName + ', you are still a minor.';
		} else {
			if (myAge == 18) {
				$('message').innerHTML = myName + ', you are now voting age!';
			} else {
				if (myAge > 18 && myAge < 65) {
					$('message').innerHTML = myName + ', you are in your prime working years.';
				} else {
					if (myAge >= 65) {
						$('message').innerHTML = myName + ', it is time to retire.';
					}
				}
			}
		}
	}
}

window.onload = function () {
    $("displaybutton").onclick = processInfo;
}