var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var myFirstName = $("firstname").value;
	var myAge = $("age").value;
	
	var myAgeInt = parseInt(myAge);
	
	var myTrueAge = myAgeInt + 10;
	
	//console.log("My True Age is: " + myTrueAge);
	
	var myText = "Well " + myFirstName + " you say you are "
	           + myAge +  " but I bet you are really " + myTrueAge
			   
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}