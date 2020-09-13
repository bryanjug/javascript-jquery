var displayName = function ()
{
	var myFirstName = document.getElementById("firstname").value;
	var myText = "Hi there, " + myFirstName;
	document.getElementById("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	document.getElementById("mybutton").onclick = displayName;
}