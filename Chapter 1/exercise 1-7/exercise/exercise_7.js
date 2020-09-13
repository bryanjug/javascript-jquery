var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function() {
	var myWidth = $('width').value;
	var myLength = $('length').value;
	
	var myWidthInt = parseInt(myWidth);
	var myLengthInt = parseInt(myLength);
	
	var myArea = myWidthInt * myLengthInt;
	
	var myText = 'The area of the rectangle is: ' + myArea + '.'
	
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}