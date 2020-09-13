var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myName = $('firstname').value;
	var myNum = $('firstnum').value;
	
	if (myName == '')
	{
		$('message').innerHTML = "Please enter your name";
	} 
	else {
		if (myNum >= '7') {
			$('message').innerHTML = "Congrats you won!";
		}
		else {
			$('message').innerHTML = "Sorry, " + myName + ' please try again...';
		}
	}
}

window.onload = function () {
    $("guessbutton").onclick = processInfo;
}