var $ = function (id) {
    return document.getElementById(id);
}

var validateForm = function()
{
	var myName = $("firstname").value;
	
	if (myName == '')
	{
		$("msg").innerHTML = "You must enter a name!";
	} 
	else
	{
		$("myform").submit();
	}
}

var alertAge = function()
{
	var myAge = $("age").value;
	
	if (myAge > 39)
	{
		$("msg").innerHTML = "You're getting up there!";
	}
	else
	{
		$("msg").innerHTML = "";
	}
}

var switchImage = function()
{
	$("steveimage").src = "steve_with_headset.jpg";
}

var switchImageBack = function()
{
	$("steveimage").src = "Steve_jacket_tie.jpg";
}

window.onload = function () 
{
	//$("mybutton").onclick = validateForm;
	$("age").onchange = alertAge;
    $("steveimage").onmouseover = switchImage;
	$("steveimage").onmouseout = switchImageBack;
}
