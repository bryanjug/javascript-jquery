var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var today = new Date(); //Today's date
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();
	
	var todayformatted = todaymm + '-' + todaydd + '-' + todayyyy;
	
	var myText = "Today's date is " + todayformatted;
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}