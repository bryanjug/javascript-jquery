var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myName = $('firstname').value;
	var myNum = $('firstnum').value;
	var myMessage = $('message');
	
	if (myName == '')
	{
		myMessage.innerHTML = "Please enter your name";
	} else {
	
		if (myNum == '7')
		{
			myMessage.innerHTML = " You Guessed Right, " + myName +"!";
		} else {
			myMessage.innerHTML = "Sorry " + myName + "... try again";
		}
	}
}

window.onload = function () {
    $("guessbutton").onclick = processInfo;
}
