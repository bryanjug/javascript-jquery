var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myName = $('firstname').value;
	var myPassword = $('password').value;
	var myNum = $('firstnum').value;
	
	if (myName == '' || myPassword == '')
	{
		$("message").innerHTML = "Please enter both your name and password ";
	} 
	else {
		if (myNum != '7') {
			if (isNaN(myNum) || myNum == '') {
				$("message").innerHTML = myNum + ' must be a number!';
			} else {
				$("message").innerHTML = 'Sorry ' + myName + '...try again';
			}
		} else {
			$('message').innerHTML = 'Correct';
		}
	}
}

window.onload = function () {
    $("guessbutton").onclick = processInfo;
}
