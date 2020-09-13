var $ = function (id) {
		return document.getElementById(id);
}

var displayName = function() {
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var myText = 'Hi ' + firstName + ' ' + lastName;
	$('mymsg').innerHTML = myText;
}

window.onload = function() {
	$('mybutton').onclick = displayName;
}