var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function() {
	var myName = $('firstname').value;
	var myAge = $('age').value;
	var myHoursSlept = $('hours').value;
	
	var myAgeInt = parseInt(myAge);
	var myHoursSleptInt = parseInt(myHoursSlept);
	
	var yearsSlept = myAgeInt * (myHoursSleptInt / 24);
	
	var myText = 'Hi ' + myName + '. You have slept ' + Math.round(yearsSlept) + ' years of your life away.'
	
	$('msg').innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}