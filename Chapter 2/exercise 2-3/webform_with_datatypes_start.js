var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var currentCentury = false;
	
	var myFirstName = $("firstname").value;
	var myAge = $("age").value;
	
	var myAgeInt = parseInt(myAge);
	
	var myTrueAge = myAgeInt + 10;
	
	var today = new Date(); //Today's date
	
	var todaytext = today.toDateString();
	
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();
	
	var todayformatted = todaymm + '/' + todaydd + '/' + todayyyy;
	
	if (todayyyy >= 2000) {
		currentCentury = true;
	}
	
	var myText = "Well " + myFirstName + " you say you are "
	           + myAge +  " but I bet you are really " + myTrueAge
			   + ' and today is ' + todayformatted;
			   
	if (currentCentury) {
		myText += ' and it is the current century!';
	}
	
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}