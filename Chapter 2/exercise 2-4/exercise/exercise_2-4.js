var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function () {
	var myName = $('firstname').value;
	var myAge = $('age').value;
	
	if (myName == '') {
		$('message').innerHTML = "Please enter your name";
	}
	else {
		if (myAge >= 40) {
			$('message').innerHTML = myName + ", you are over 40! It's time for that over the hill party!";
		}
		else {
			$('message').innerHTML = "Keep working, " + myName + "! It's too early to retire.";
		}
	}
}

window.onload = function () {
    $("messagebutton").onclick = processInfo;
}