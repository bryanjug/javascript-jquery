<!--exercise 1-3-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Simple Web Page</title>
	<link rel="stylesheet" href="simple.css">
	
	<script>
		function changeElement() {
			var myContainer = document.getElementById('container');
			myContainer.setAttribute('style', 'background-color: lightblue;');
			
			var myPara2 = document.getElementById('mypara2');
			myPara2.style.color = 'green';
			myPara2.style.backgroundColor = 'yellow';
		}
	</script>
</head>

<body onload='changeElement();'>
	<div id="container">
		<header>
			<h1 class="headcolor">Main Heading</h1>
		</header>

		<main>
			<h4 class="headcolor">Section Heading</h4>
			
			<p>This is the 1st paragraph</p>
			<p id="mypara2">This is the 2nd paragraph</p>
		</main>
	</div>
</body>
</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Simple Web Page</title>

	<style>
		body {
			font-family: Ariel, Verdana, sans-serif;
			background-color: white;
		}

		p {
			padding: 10px;
		}

		#container {width:80%; margin: auto;}


		.headcolor {
			color: saddlebrown;
			background-color: palegoldenrod;
			padding: 10px;
		}

	</style>
	<script>
		function changeColor() {
			var exerciseBox = document.getElementById('container');
			exerciseBox.style.backgroundColor = 'saddlebrown';
			
			var listItem1 = document.getElementById('mypara1');
			listItem1.style.color = 'palegoldenrod';
			
			var listItem2 = document.getElementById('mypara2');
			listItem2.style.color = 'palegoldenrod';
		}
	</script>

</head>

<body onload='changeColor();'>
	<div id="container">
		<header>
			<h1 class="headcolor">Exercise 1</h1>
		</header>

		<main>
			<h4 class="headcolor">Really Important Stuff</h4>

			<p id="mypara1">1. Read about this exercise</p>
			<p id="mypara2">2. Do it right</p>
		</main>
	</div>
</body>
</html>
<!--1.4-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form</title>
	<link rel="stylesheet" href="webform.css">
	<script src="webform.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Web Form</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">
				<p>First Name: <input type="text" id="firstname" size="30">
				<p><input type="button" id="mybutton" value="Submit Name">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Simple Web Page</title>


	<style>
		body {
			font-family: Ariel, Verdana, sans-serif;
			background-color: lightblue;
		}

	</style>
	
	<script src='exercise_4.js'></script>

</head>

<body>
	<div id="container">
		<header>
			<h1>Exercise 4</h1>
		</header>

		<main>
			<h4>Apply .js file exercise</h4>

			<p id="somepara">This paragraph should have a yellow background!</p>
		</main>
	</div>
</body>
</html>

function changePara() {
	myParagraph = document.getElementById("somepara");
	myParagraph.style.backgroundColor = "yellow";
}

window.onload = function()
{
	changePara();
}
<!--1.5-->
<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Adding a Class</title>

	<style>
		.bluetext {
			color: blue;
			font-size: 2em;
		}
	</style>

	<script>
	
		var $ = function (id) {
			return document.getElementById(id);
		}
	
		var addClass = function()
		{
			$("mypara").setAttribute("class", "bluetext");
		}
		
		/*
			Here is where I use an onload event
		*/
		
		window.onload = function ()
		{
			$("mybutton").onclick = addClass;   //Do NOT use () here!
		}
		
	</script>

</head>

<body>

	<h1>Add Class Example</h1>

	<main>
		<p id="mypara">Some Content</p>
		<input type="button" id="mybutton" value="Change Text Color">
	</main>

</body>
</html>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Exercise 1-5</title>
	
	<style>
		.redtext {
			color: red;
			font-size: 30px;
		}
	</style>
	
	<script src='class.js'></script>
</head>

<body>
	<h1>Exercise 1-5</h1>
	
	<main>
		<p id='paragraph'>Let's Razzle-Dazzle Them!</p>
		<input type='button' id='mybutton' value='Change Text Color'>
	</main>
</body>

var $ = function (id) {
	return document.getElementById(id);
}
	
var addClass = function()
{
	$("paragraph").setAttribute("class", "redtext");
}
	
window.onload = function ()
{
	$("mybutton").onclick = addClass;
}

<!--1.6-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form</title>
	<link rel="stylesheet" href="webform.css">
	<script src="webform.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Web Form</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">
				<p>First Name: <input type="text" id="firstname" size="30">
				<p><input type="button" id="mybutton" value="Submit Name">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

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

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Say Hi</title>
	<link rel="stylesheet" href="exercise_6.css">
	<script src='exercise_6.js'></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Say Hi</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">
				<p>First Name: <input type="text" id="firstname" size="30">
				<p>Last Name: <input type="text" id="lastname" size="30">
				<p><input type="button" id="mybutton" value="Submit Name">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

var $ = function (id) {
		return document.getElementById(id);
}

var displayName = function() {
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var myText = 'Hi ' + firstName + ' ' + lastName;
	$('mymsg').innerHTML = myText;
}

window.onload = function() {
	$('mybutton').onclick = displayName;
}
<!--1.7-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Assignment 1: Calculate unconciousness</title>
	<link rel="stylesheet" href="style.css">
	<script src="webform_math_corrected.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Web Form with Math Corrected</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">
			
				<p>First Name: <br><input type="text" id="firstname" size="30">
				
				<p>Enter Your Age:  <br><input type="text" id="age" size="3">
				
				<p><input type="button" id="mybutton" value="Check It Out">
			</form>
			
			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var myFirstName = $("firstname").value;
	var myAge = $("age").value;
	
	var myAgeInt = parseInt(myAge); //turns this into a true int
	
	var myTrueAge = myAgeInt + 10;
	
	var myText = "Well " + myFirstName + " you say you are "
	           + myAge + " but I bet you are really " + myTrueAge
			   
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;  //Remember no ()!!
}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Area of a Rectangle</title>
	<link rel="stylesheet" href="exercise_7.css">
	<script src='exercise_7.js'></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Area of a Rectangle</h1>
		</header>

		<main>
			<form id="myform">

				<p>Enter Width (in feet): <br><input type="text" id="width" size="3">

				<p>Enter Length (in feet):  <br><input type="text" id="length" size="3">

				<p><input type="button" id="mybutton" value="Calculate">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

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

<!--assignment 1-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form Math</title>
	<link rel="stylesheet" href="style.css">
	<script src="asgn1_jug.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Assignment 1</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">
			
				<p>First Name: <br><input type="text" id="firstname" size="30">
				
				<p>Enter Your Age: <br><input type="text" id="age" size="3">
				
				<p>Hours Slept Each Night: <br><input type="text" id="hours" size="3">
				
				<p><input type="button" id="mybutton" value="Calculate Conciousness">
			</form>
			
			<p id="msg"></p>
		</main>
	</div>
</body>
</html>

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

<!--2.1-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form with Errors</title>
	<link rel="stylesheet" href="webform.css">
	<script src="webform_with_errors_start.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Web Form with Errors</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">

				<p>First Name: <br><input type="text" id="firstname" size="30">

				<p>Enter Your Age:  <br><input type="text" id="age" size="3">

				<p><input type="button" id="mybutton" value="Check It Out">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

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

<!--2.3-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form with Datatypes</title>
	<link rel="stylesheet" href="webform.css">
	<script src="webform_with_datatypes_start.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Web Form with Datatypes</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">

				<p>First Name: <br><input type="text" id="firstname" size="30">

				<p>Enter Your Age:  <br><input type="text" id="age" size="3">

				<p><input type="button" id="mybutton" value="Check It Out">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

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

<!--exercise 2.3-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form with Datatypes</title>
	<script src="exercise_2-3.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Exercise 2-3</h1>
		</header>

		<main>
			<form id="myform" method="post" action="someprogram.php">

				<p>What's today's date?</p>

				<p><input type="button" id="mybutton" value="Get Date">
			</form>

			<p id="mymsg"></p>
		</main>
	</div>
</body>
</html>

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

<!--exercise 2.4-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Simple IF Statement</title>
	<link rel="stylesheet" href="webform.css">
	<script src="simple_if_start.js"></script>
</head>

<body>

<header>
	<h2 class="headcolor">Simple IF Statement</h2>
</header>

<section>

	<p>What is your name?: <input type="text" id="firstname" size="30">	</p>
	
    <p>Guess a Number Between 1-10: <input type="text" id="firstnum" size="3"></p>
	
	<p><input type="button" id="guessbutton" value="Guess a Number"></p>
	
	<p id="message"></p>

</section>

</body>
</html>

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

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Simple IF Statement</title>
	<link rel="stylesheet" href="webform.css">
	<script src="exercise_2-4.js"></script>
</head>

<body>

<header>
	<h2 class="headcolor">Exercise 2-4</h2>
</header>

<section>
	
	<p>What should I do at my age?</p>
	<p>First Name: <input type="text" id="firstname" size="30">	</p>
	
    <p>Age: <input type="text" id="age" size="3"></p>
	
	<p><input type="button" id="messagebutton" value="Display Message"></p>
	
	<p id="message"></p>

</section>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function () {
	var myName = $('firstname').value;
	var myAge = $('age').value;
	
	if (myName == '') {
		$('message').innerHTML = "Please enter your name";
	}
	else {
		if (myAge >= 40) {
			$('message').innerHTML = myName + ", you are over 40! It's time for that over the hill party!";
		}
		else {
			$('message').innerHTML = "Keep working, " + myName + "! It's too early to retire.";
		}
	}
}

window.onload = function () {
    $("messagebutton").onclick = processInfo;
}

<!--2.5-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Logical Operators</title>
	<link rel="stylesheet" href="webform.css">
	<script src="logical_operators_start.js"></script>
</head>

<body>

<header>
	<h2 class="headcolor">Logical Operators</h2>
</header>

<section>

	<p>What is your name?: <input type="text" id="firstname" size="30"></p>
	
	<p>What is your password?: <input type="text" id="password" size="10"></p>
	
    <p>Guess a Number Between 1-10: <input type="text" id="firstnum" size="3"></p>
	
	<p><input type="button" id="guessbutton" value="Guess a Number"></p>
	
	<p id="message"></p>

</section>

</body>
</html>

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
	else
	{	
		if (myNum != '7')
		{
			if (isNaN(myNum) || myNum == '')
			{
				$("message").innerHTML = myNum + " must be a number!";
			}
			else
			{
				$("message").innerHTML = "Sorry " + myName + "... try again";
			}
		}
		else
		{
			$("message").innerHTML = "Correct";
		}
	}
}

window.onload = function () {
    $("guessbutton").onclick = processInfo;
}

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Exercise 2-5</title>
	<script src="exercise_2-5.js"></script>
</head>

<body>

<header>
	<h2 class="headcolor">Exercise 2-5</h2>
</header>

<section>
	<p>What does it mean to be my age?</p>
	
	<p>First Name: <input type='text' id='firstname' size='30'></p>
	
	<p>Age: <input type="text" id='age' size='3'></p>
	
	<p><input type="button" id="displaybutton" value="Display Message"></p>
	
	<p id="message"></p>
	<p id='message2'></p>
</section>
</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var myName = $('firstname').value;
	var myAge = $('age').value;
	
	if (myName == '' || myAge == '') {
		$('message').innerHTML = 'Please enter both your name and age!';
	} else {
		if (myName == 'steve' || myName == 'stephen') {
			$('message2').innerHTML = 'You have the same first name as the instructor.';
		} else {
			if (myName != 'stephen' || myName != 'steve') {
				$('message2').innerHTML = '';
			}
		}
		if (myAge < 18) {
			$('message').innerHTML = myName + ', you are still a minor.';
		} else {
			if (myAge == 18) {
				$('message').innerHTML = myName + ', you are now voting age!';
			} else {
				if (myAge > 18 && myAge < 65) {
					$('message').innerHTML = myName + ', you are in your prime working years.';
				} else {
					if (myAge >= 65) {
						$('message').innerHTML = myName + ', it is time to retire.';
					}
				}
			}
		}
	}
}

window.onload = function () {
    $("displaybutton").onclick = processInfo;
}
<!--2.6-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>The WHILE Loop</title>
	<link rel="stylesheet" type="text/css" href="webform.css" />
	
	<script>
	
	var $ = function (id) {
		return document.getElementById(id);
	}

	var processNames = function ()
	{
		var cntr = 0;
		var members = "";
		
		while (membername != 'stop')
		{
			cntr++;
			
			if (cntr > 5)
			{
				break;
			}
			
			var memberid = "member" + cntr;
			var membername = $(memberid).value;
			
			if (membername == 'skip')
			{
				continue;
			}
			
			members += membername + "<br>";
		}
		
		$("msg").innerHTML = members;
	
	}

	window.onload = function ()
	{
		$("mybutton").onclick = processNames;  //Remember no ()!!
	}
	
	</script>
</head>

<body>

<h3 class="headcolor">The WHILE Loop</h3>

<form>

<p>Enter Team Member Names
<br />1. <input type="text" id="member1" size="30">
<br />2. <input type="text" id="member2" size="30">
<br />3. <input type="text" id="member3" size="30">
<br />4. <input type="text" id="member4" size="30">
<br />5. <input type="text" id="member5" size="30">
</p>

<input type="button" id="mybutton" value="Submit Names">

<p id="msg"></p>

</form>


</body>
</html>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>The FOR Loop</title>
	<link rel="stylesheet" type="text/css" href="webform.css" />
	
	<script>
	
	var $ = function (id) {
		return document.getElementById(id);
	}

	var processNames = function ()
	{
		var members = "";
		
		for (cntr = 1; cntr <= 5; cntr++) 
		{		
			var memberid = "member" + cntr;
			console.log("MID " + memberid);
			var membername = $(memberid).value;
			
			members += membername + "<br>";
		}
		
		$("msg").innerHTML = members;
	}

	window.onload = function ()
	{
		$("mybutton").onclick = processNames;  //Remember no ()!!
	}
	
	</script>
</head>

<body>

<h3 class="headcolor">The FOR Loop</h3>

<form>

<p>Enter Team Member Names
<br />1. <input type="text" id="member1" size="30">
<br />2. <input type="text" id="member2" size="30">
<br />3. <input type="text" id="member3" size="30">
<br />4. <input type="text" id="member4" size="30">
<br />5. <input type="text" id="member5" size="30">
</p>

<input type="button" id="mybutton" value="Submit Names">

<p id="msg"></p>

</form>


</body>
</html>

<!DOCTYPE html>

<!--WHILE LOOP-->
<html>
<head>
	<title>Exercise 2-6</title>
	<script src="exercise_2-6.js"></script>
</head>

<body>
<header>
	<h2 class="headcolor">Exercise 2-6</h2>
</header>

<section>
	<p>Guess a number between 1-20</p>
	<p>First Guess: <input type='text' id='guess1' size='5'>
	Second Guess: <input type='text' id='guess2' size='5'>
	Third Guess: <input type='text' id='guess3' size='5'></p>
	<p><input type="button" id="guessbutton" value="Guess"></p>
	<p id='msg'></p>
</section>
</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var cntr = 0;
	var guesses = '';
	
	while (guessnumber != '7') {
		cntr++;
		
		if (cntr > 3) {
			break;
		}
		
		var guessid = 'guess' + cntr;
		var guessnumber = $(guessid).value;
		
		if (guessnumber == 7) {
			$('msg').innerHTML = 'You guessed 7! That is correct!';
		} else {
			$('msg').innerHTML = 'None of these guesses were correct.';
		}
	}
}

window.onload = function () {
    $("guessbutton").onclick = processInfo;
}

<!--assignment 2-->
<!DOCTYPE HTML>

<html>
<head>
	<title>Assignment 2 HTML</title>
	<style>

		body {
			background-color: silver;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 16px;
		}

		span {
			color: red;
		}

		#message {
			color: blue;
		}

	</style>
	<script src="asgn2_jug_remake.js"></script>
</head>

<body style="background-color: silver">

	<h1>Assignment 2</h1>

	<p>Enter First Name: <input type="text" id="firstname">  <span id="firstname_error"></span></p>
	<p>Enter Last Name: <input type="text" id="lastname">  <span id="lastname_error"></span>
	</p>

	<p>How Many Pets do you have?  (0-3): <input type="text" id="numpets" size="1" maxlength="1">
	<span id="numpets_error"></span>
	</p>

	<p>List your Pet's names:
		<input type="text" id="pet1">
		<input type="text" id="pet2">
		<input type="text" id="pet3">
	</p>

	<p><input id="mybutton" type="button" value="Submit Information"></p>

	<p id="message"></p>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var petCount = $('numpets').value;
	
	var today = new Date();
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();
	
	var todayFormatted = todaymm + '-' + todaydd + '-' + todayyyy;
	
	var message = 'Your name is listed as ' + lastName + ', ' + firstName + " and today's date is " + todayFormatted + '. ';
	
	if (firstName == '') {
		$('firstname_error').innerHTML = 'Please enter first name';
	} else {
		if (firstName != '') {
			$('firstname_error').innerHTML = '';
		}
	}
	if (lastName == '') {
		$('lastname_error').innerHTML = 'Please enter last name';
	} else {
		if (lastName != '') {
			$('lastname_error').innerHTML = '';
		}
	}
	if (petCount == '') {
		$('numpets_error').innerHTML = 'Please enter the number of pets you have';
	} else {
		if (petCount != '') {
			$('numpets_error').innerHTML = '';
		}
	}
		
	for (cntr = 1; cntr <= petCount; cntr++) {
		
		var myPetId = 'pet' + cntr;
		var myPetName = $(myPetId).value;
		
		if (myPetName != '') {
			message += ' Your pet #' + cntr + ' is named ' + myPetName + '. ';
		}
	}
	if (firstName == 'steven' || firstName == 'stephen') {
		message += '<br>You have the same name as the professor!';
	}
	
	$('message').innerHTML = message;
}

window.onload = function () {
    $("mybutton").onclick = processInfo;
}

<!--3.1-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>String Functions</title>
	<link rel="stylesheet" type="text/css" href="webform.css">
	<script src="string_functions.js"></script>
	
</head>

<body>

	<h3 class="headcolor">String Functions</h3>

	<p>Enter Grocery Item and Click Button:</p>
	<p><input type="text" id="item" size="30"></p>
	<p><input type="button" id="mybutton" value="Add Item to List">
       <input type="button" id="mysearchbutton" value="Search for Item on List">
    </p>
	<p id="msg"></p>
	<p id="paragraph">Chicago, Boston, Toronto</p>
</body>
</html>

var groceryItems = "";  //Global Variable
	
var $ = function (id) {
    return document.getElementById(id);
}

var addItem = function ()
{
    var item = $("item").value;
    
    groceryItems += item + "<br>";
    
    $("msg").innerHTML = groceryItems;
    
    $("item").value = "";
    $("item").focus();   //puts cursor on field
}

var searchItem = function ()
{
    var item = $("item").value;
	
	//case-sensitive by default
	
	var itemLower = item.toLowerCase();
	var groceryItemsLower = groceryItems.toLowerCase();
    
   	var foundStartPos = groceryItemsLower.indexOf(itemLower);
	
	if (foundStartPos >= 0)
	{
		var itemLen = item.length;
		
		var firstPart = groceryItems.substr(0, foundStartPos);
		var middlePart = "<b><span style='color: red;'>" + item + "</span></b>";
		var lastPart =  groceryItems.substr(foundStartPos + itemLen);
		
		$("msg").innerHTML = firstPart + middlePart + lastPart;
		
	}
	else
	{
		$("msg").innerHTML = "Item: '" + item + "' not found!<br><br>" + groceryItems;
	}
               
    $("item").value = "";
    $("item").focus();   //puts cursor on field
}

window.onload = function ()
{
    $("mybutton").onclick = addItem;  //Remember no ()!!
	$("mysearchbutton").onclick = searchItem;  //Remember no ()!!
    $("item").focus();   //puts cursor on field
}

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Exercise 3-1</title>
	<link rel="stylesheet" type="text/css" href="webform.css">
	<script src="exercise_3-1.js"></script>
	
</head>

<body>

	<h3 class="headcolor">String Functions</h3>

	<p>Search For City in List below:</p>
	<p><input type="text" id="city" size="30"></p>
	<p>
       <input type="button" id="mysearchbutton" value="Search for City">
    </p>
	<p id="citylist">Chicago, Boston, Toronto</p>
	<p id="msg"></p>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var searchCity = function () {
	
	var cityList = $("citylist").innerHTML;
	var city = $('city').value;
	var cityLower = city.toLowerCase();
	var cityListLower = cityList.toLowerCase();
	
	var foundStartPos = cityListLower.indexOf(cityLower);
	
	if (foundStartPos >= 0) {
		
		var cityLen = city.length;
		
		var firstPart = cityList.substr(0, foundStartPos);
		var middlePart = "<b><span style='color: red;'>" + city + "</span></b>";
		var lastPart = cityList.substr(foundStartPos + cityLen);

		$('msg').innerHTML = firstPart + middlePart + lastPart + '<br>' + city + ' was found in the city list!';

	} else {
		$('msg').innerHTML = 'City: ' + city + ' was not found in the city list!';
	}
	$("city").focus();   //puts cursor on field
}

window.onload = function ()
{
	$("mysearchbutton").onclick = searchCity;  //Remember no ()!!
    $("city").focus();   //puts cursor on field
}

<!--3.2-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Function Demonstration</title>
	<link rel="stylesheet" href="webform.css">
	<script src="function_demo.js"></script>
</head>

<body>

<header>
	<h1 class="headcolor">Function Demonstration</h1>
</header>

<section>
	<p>First Number: <input type="text" id="firstnum" size="30">
	<p>Second Number: <input type="text" id="secondnum" size="30">
	<p><span id="totalfield">Total: </span>
	<p><input type="button" id="addbutton" value="Add the Numbers">

</section>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myFirstNum = $('firstnum').value;
	var mySecondNum = $('secondnum').value;

	var myTotal = addNumbers(myFirstNum, mySecondNum);
	
	var myTotalStr = "Total: " + myTotal;

	$('totalfield').innerHTML = myTotalStr;
}


function addNumbers(aFirstNum, aSecondNum)
{
	var firstNum = parseFloat(aFirstNum);
	var secondNum = parseFloat(aSecondNum);
	
	var total = firstNum + secondNum;
	return total;
}

window.onload = function () {
    $("addbutton").onclick = processInfo;
}

<!DOCTYPE>

<html>
<head>
	<title>X-3-2</title>
	<link rel="stylesheet" href="X_3_2_css.css">
	<script src="X_3_2.js"></script>
</head>

<body>

<header>
	<h1>Exercise 3-2</h1>
</header>

<section>
	<p>First Number: <input type="text" id="firstnum" size="30">
	<p>Second Number: <input type="text" id="secondnum" size="30">
	<p><span id="total">Total: </span>
	<p><input type="button" id="addbutton" value="Add the Numbers" onClick="processInfo();">

</section>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var myFirstNum = $('firstnum').value;
	var mySecondNum = $('secondnum').value;
	
	var myTotal = addNumbers(myFirstNum, mySecondNum);
	
	$('total').innerHTML += myTotal;
}

function addNumbers(aFirstNum, aSecondNum) {
	var firstNum = parseFloat(aFirstNum);
	var secondNum = parseFloat(aSecondNum);
	
	var total = firstNum + secondNum;
	return total;
}

window.onload = function () {
    $("addbutton").onclick = processInfo;
}

<!--3.3-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
	<title>Web Form - Events</title>
	<link rel="stylesheet" href="webform_events.css">
	<script src="events_demo.js"></script>
</head>

<body>
	<div id="container">
		<header>
			<h1 class="headcolor">Web Form - Events</h1>
		</header>

		<main>
        	<div id="myformdiv">
                <form id="myform" method="post" action="http://profperry.com/Classes20/JQueryNew/Chapter_3/jsdemoform.php">
                
                    <p>First Name: <br><input type="text" 
					id="firstname" name="firstname" size="30">
                    
                    <p>Select Your Age:  <br>
                    
                    <select id="age" name="age" size="1">
                    	<option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                    	<option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                    </select>
                    
                    
                    <p>
                    
                    <!-- <input type="submit" id="mybutton" value="Check It Out"> -->
                    
                    <input type="submit" id="mybutton" value="Check It Out">
                    
                    <p id="msg"></p>
                </form>
            </div>
			
            <div id="myimagediv">
				<img id="steveimage" src="Steve_jacket_tie.jpg" alt="Steve with Jacket and Tie">
            </div>
		</main>
	</div>
</body>
</html>

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

<!DOCTYPE html>

<html>
<head>
	<title>Detect Event</title>
	<link rel="stylesheet" type="text/css" href="webform.css">
	<script src="X_3_3.js"></script>
	
</head>

<body>

	<h3 class="headcolor">Detect Event</h3>

<p>Select Gender:  <br>
 
<p>
	
	<select id="gender" name="gender" size="1">
		<option value="none">None</option>
		<option value="male">Male</option>
		<option value="female">Female</option>
		<option value="droid">Droid</option>
	</select>
</p>

<div>
	<img id="myimg" src="http://profperry.com/testimages/default.jpg" style="display: block;">
</div>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}

var alertGender = function() {
	var myGender = $('gender').value;
	
	if (myGender == 'none') {
		$('myimg').src = '';
	}
	if (myGender == 'male') {
		$('myimg').src = 'http://profperry.com/testimages/male.jpg';
	}
	if (myGender == 'female') {
		$('myimg').src = 'http://profperry.com/testimages/female.jpg';
	}
	if (myGender == 'droid') {
		$('myimg').src = 'http://profperry.com/testimages/droid.jpg';
	}
}

window.onload = function () 
{
	$("gender").onchange = alertGender;
}

<!--assignment 3-->
<!DOCTYPE HTML>

<html>
<head>
	<title>Assignment 3 - Register</title>

	<script src="asgn_3.js"></script>
	
	<style>
	
		body {
			background-color: #E6E6D3;
			font-family: Ariel, Helvetica, sans-serif;
		}
		
		.errormsg {color: red;}
		
		#patron {
			background-color: lightblue;
			width: 780px;
			padding: 10px;
		}
		
	</style>

</head>

<body>

<div id="logo">
	<img src="http://profperry.com/Classes20/JQueryNew/Assignment_3/KingLibLogo.jpg" alt="King Real Estate Logo">
</div>

<div id="patron">
	<form method="post" id="myform" action="http://profperry.com/Classes20/JQueryNew/Assignment_3_PHP/assignment_3.php">

	<p class="topofdiv">Please sign up</p>

	<p>
	First Name:<br>
	<input type="text" name="firstname" id="firstname" size="30">
	<span class="errormsg" id="firstnameerror"></span>
	</p>

	<p>
	Last Name:<br>
	<input type="text" name="lastname" id="lastname" size="30">
	<span class="errormsg" id="lastnameerror"></span>
	</p>

	<p>
	Email:<br>
	<input type="text" name="email" id="email" size="40">
	<span class="errormsg" id="emailerror"></span>
	</p>

	<p>
	City of Residence<br>
	<select name="city" id="city" size="1" >
		<option value="-">-</option>
		<option value="Chicago">Chicago</option>
		<option value="Detroit">Detroit</option>
		<option value="Toronto">Toronto</option>
	</select>
	<span class="errormsg" id="cityerror"></span>
	</p>

	<p>
		Donation for the "Books for Kids" program  (Enter 0 if none): <br>
		<input type="text" name="donation" id="donation" size="7">
		<span class="errormsg" id="donationerror"></span>
	</p>

	<p>
		<input type="button" id="addpatron" value="Add Patron">&nbsp;&nbsp;&nbsp;
		<input type="button" id="clearfields" value="Clear Fields">&nbsp;&nbsp;&nbsp;
		<span class="errormsg" id="endmessage"></span>
	</p>

	</form>
	
	<br><br>

</div>

</body>
</html>

var $ = function (id) {
    return document.getElementById(id);
}
	
var addPatron = function() {
	
	validateItems();
	var isValid = validateItems();
	
	if (isValid == false) {
		$('endmessage').innerHTML = 'Patron Not Added!';
	} else {
		if (isValid == true) {
			$('endmessage').innerHTML = '';
			$('myform').submit();
		}
	}
}

function validateItems() {
	
	var firstName = $('firstname').value;
	var lastName = $('lastname').value;
	var email = $('email').value;
	var city = $('city').value;
	var donation = $('donation').value;

	var donationInt = parseInt(donation);

	if (firstName == '') {
		$('firstnameerror').innerHTML = 'Enter First Name';
	} else {
		if (firstName != '') {
			$('firstnameerror').innerHTML = '';
		}
	}
	if (lastName == '') {
		$('lastnameerror').innerHTML = 'Enter Last Name';
	} else {
		if (lastName != '') {
			$('lastnameerror').innerHTML = '';
		}
	}
	if (email == '') {
		$('emailerror').innerHTML = 'Enter Email';
	} else {
		if (email != '') {
			$('emailerror').innerHTML = '';
		}
	}
	if (city == '-') {
		$('cityerror').innerHTML = 'Select a City from the list';
	} else {
		if (city != '-') {
			$('cityerror').innerHTML = '';
		}
	}
	if (donation == '') {
		$('donationerror').innerHTML = 'Enter Donation Amount';
	} else {
		if (Number.isInteger(donationInt) == false) {
			$('donationerror').innerHTML = 'Amount must be numeric';
		} else {
			if (donationInt) {
				$('donationerror').innerHTML = '';
			} else {
				if (donation != '') {
					$('donationerror').innerHTML = '';
				}
			}
		}
	}
	
	if (firstName == '' || lastName == '' || email == '' || city == '-' || donation == '' || Number.isInteger(donationInt) == false) {
		return false;
	} else {
		return true;
	}
}

var clearFields = function() {
	
	$('firstname').value = '';
	$('lastname').value = '';
	$('email').value = '';
	$('city').value = '-';
	$('donation').value = '';
	
	$('firstnameerror').innerHTML = '';
	$('lastnameerror').innerHTML = '';
	$('emailerror').innerHTML = '';
	$('cityerror').innerHTML = '';
	$('donationerror').innerHTML = '';
	$('endmessage').innerHTML = '';
	
	$('firstname').focus();
}

window.onload = function () 
{
	$('addpatron').onclick = addPatron;
	$('clearfields').onclick = clearFields;
	$('firstname').focus();
}

//exercise 4.1
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Array Demonstration</title>
	<link rel="stylesheet" href="webform.css">
	<script src="array_demo_for_in.js"></script>
</head>

<body>

<header>
	<h1 class="headcolor">Array Demonstration</h1>
</header>

<section>
    <p>Item: <input type="text" id="item"></p>
    <p>Amount: <input type="text" id="amount"></p>

	<p><input type="button" id="addbutton" value="Add Item"></p>

	<p id="msg"></p>

</section>

</body>
</html>

//for in loop
var myTransactions;  //global

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myTranStr = "";
	var myTran = "";

	var myItem = $("item").value;
	var myAmount = $("amount").value;

	var myTran = myItem + ":" + myAmount;

	myTransactions[myTransactions.length] = myTran;
	
	for(index in myTransactions)
	{
		myTranStr += myTransactions[index] + "<br>";
	}

	$("msg").innerHTML = myTranStr;

	$("item").value = "";
	$("amount").value = "";
}

window.onload = function () {
    $("addbutton").onclick = processInfo;
    myTransactions = new Array();
}

//exercise 4.2
//ARRAY JOIN

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Array Demonstration - Join</title>
	<link rel="stylesheet" href="webform.css">
	<script src="array_demo_join.js"></script>
</head>

<body>

<header>
	<h1 class="headcolor">Array Demonstration - Join</h1>
</header>

<section>
    <p>Item: <input type="text" id="item"></p>
    <p>Amount: <input type="text" id="amount"></p>

	<p><input type="button" id="addbutton" value="Add Item"></p>

	<p id="msg"></p>

</section>

</body>
</html>

var myTransactions;  //global

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myTranStr = "";
	var myTran = "";

	var myItem = $("item").value;
	var myAmount = $("amount").value;

	var myTran = myItem + ":" + myAmount;

	myTransactions.push(myTran); //puts this as last element on array

	myTranStr = myTransactions.join("<br>");

	$("msg").innerHTML = myTranStr;

	$("item").value = "";
	$("amount").value = "";
}

window.onload = function () {
    $("addbutton").onclick = processInfo;
    myTransactions = new Array();
}

//ARRAY CLASS

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Array Demonstration using Class</title>
	<link rel="stylesheet" type="text/css" href="webform.css" />
	
	<script src="array_demo_class.js"></script>
</head>

<body>

<h3 class="headcolor">Array Demonstration using Class</h3>

<form>

<p>Enter Team Member Names
<br />1. <input type="text" class="member" size="30">
<br />2. <input type="text" class="member" size="30">
<br />3. <input type="text" class="member" size="30">
<br />4. <input type="text" class="member" size="30">
<br />5. <input type="text" class="member" size="30">
</p>

<input type="button" id="mybutton" value="Submit Names">

<p id="msg"></p>

</form>


</body>
</html>

var myMembersStr = "";

var $ = function (id) {
	return document.getElementById(id);
}

var processNames = function ()
{
	var myMembers = document.getElementsByClassName('member');
	
	
	//Wrong Way - myMembers is a nodeList, not an actual Array
	
	//for(index in myMembers)
	//{
	//	myMembersStr += myMembers[index].value + "<br>";
	//}
	
	
	
	
	// Right Way - nodeLists have elements and index positions like an Array
	
	var myMembersArray = new Array();
	
	for(cntr = 0; cntr < myMembers.length; cntr++)
	{
		myMembersArray[cntr] = myMembers[cntr].value;
	}
	
	myMembersArray.sort();

	myMembersStr = myMembersArray.join("<br>");
	
	$("msg").innerHTML = myMembersStr;

}

window.onload = function ()
{
	$("mybutton").onclick = processNames;  //Remember no ()!!
}

//assignment 4
<html>
<head>
   	<title>Assignment 4</title>
   	<link rel="stylesheet" type="text/css" href="asgn_4.css">
	<script src="asgn_4.js"></script>
</head>

<body>
<h1>Assignment 4</h1>

<h4>The Beatles</hr>

<table border='1' cellpadding='8px'>
<tr>
	<td>
		<img id="john" src="http://profperry.com/Classes20/JQuery/beatles_john.jpg" alt="Picture of John">
		<br>John
	</td>
	<td>
		<img id="paul" src="http://profperry.com/Classes20/JQuery/beatles_paul.jpg" alt="Picture of Paul">
		<br>Paul
	</td>
	<td>
		<img id="george" src="http://profperry.com/Classes20/JQuery/beatles_george.jpg" alt="Picture of George">
		<br>George
	</td>
	<td>
		<img id="ringo" src="http://profperry.com/Classes20/JQuery/beatles_ringo.jpg" alt="Picture of Ringo">
		<br>Ringo
	</td>
</table>
<br><br>
<input type="button" id="showlist" value="Show Me the List">
<br>
<p id="list"></p>

</body>
</html>

var BeatlesArray;

var $ = function (id) {
	return document.getElementById(id);
}

var processNames = function() {

	for(index in BeatlesArray) {
		BeatlesArray[index] = (parseInt(index) + 1) + '. ' + BeatlesArray[index];
	}
	BeatlesArray = BeatlesArray.join(', ');

	$('list').innerHTML = BeatlesArray;
}

var johnButton = function() {
	$('paul').border = '0px';
	$('paul').style.color = null;
	$('george').border = '0px';
	$('george').style.color = null;
	$('ringo').border = '0px';
	$('ringo').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'John';
	
	BeatlesArray.push(myBeatle);
}

var paulButton = function() {
	$('john').border = '0px';
	$('john').style.color = null;
	$('george').border = '0px';
	$('george').style.color = null;
	$('ringo').border = '0px';
	$('ringo').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'Paul';
	
	BeatlesArray.push(myBeatle);
}

var georgeButton = function() {
	$('paul').border = '0px';
	$('paul').style.color = null;
	$('john').border = '0px';
	$('john').style.color = null;
	$('ringo').border = '0px';
	$('ringo').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'George';
	
	BeatlesArray.push(myBeatle);
}

var ringoButton = function() {
	$('paul').border = '0px';
	$('paul').style.color = null;
	$('george').border = '0px';
	$('george').style.color = null;
	$('john').border = '0px';
	$('john').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'Ringo';
	
	BeatlesArray.push(myBeatle);
}

window.onload = function ()
{
	$("showlist").onclick = processNames;
	$('john').onclick = johnButton;
	$('paul').onclick = paulButton;
	$('george').onclick = georgeButton;
	$('ringo').onclick = ringoButton;
	
	BeatlesArray = new Array();
}

//exercise 5-1
<!DOCTYPE HTML>
<head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
</head>
<h1>Simple Example</h1>
<br>
<div>
	<p>What is your Name?
		<input type='text' id='firstname' size='30' />
	</p>
	<p>
		<input type='button' id='clickme' value='Click Me'>
	</p>
</div>

$(document).ready (
	function() {
	$("#clickme").click (
		function() {
			var myfirst = $("#firstname").val();
			
			if (myfirst == 'Steve') {
				alert('Hi professor');
			
			} else {
				alert('Hi ' + myfirst);
				}
			}
		)
	}
)

//Descendants: All <p> elements that are descendants of the section element
$("#faqs p");
//Adjacent siblings: All div elements that are adjacent siblings of h2 elements
$("h2 + div")
//General siblings: All <p> elements that are siblings of ul elements
$("ul ~ p")
//Children: All ul elements that are children of div elements
$("div > ul")

//How to get the value from a text box
var gallons = $("#gallons").val();
//How to set the value for an input element
$("#gallons").val("");
//How to set the text in an element
$("#email_address_error").text("Email is required");
//How to submit a form
$("#join_list").submit();
//How to move the focus to a form control or link
$("#email_address").focus();

//exercise 5.1
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Exercise 7.1</title>
	<link rel="stylesheet" href="X_7_1.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   	<script src="X_7_1.js"></script>
</head>

<body>
	<section id="example">
		<h1>Exercise 7.1 - Fullname</h1>
		<br />
		<form method="post">
		<div>
				<p>
					What is your Last Name?
					<input type="text" id="lastname" size="30" />
				</p>
				<p>
					What is your First Name?
					<input type="text" id="firstname" size="30" />
				</p>
				<p>
					<input type="button" id="clickme" value="Click Me">
				</p>
				<p id="message">
				</p>
		</div>
	</section>
</body>
</html>

$(document).ready (
	function() {
		$('#clickme').click (
			function() {
				var lastName = $('#lastname').val();
				var firstName = $('#firstname').val();
				
				if (firstName != '' && lastName != '') {
					
					$('#message').text('Your Full Name is ' + firstName + ' ' + lastName);
				} else {
					$('#message').text('Please enter your full name.');
				}
			}
		)
	}
)

<h1>Data Validation Example</h1>
<br />
<div>
<p>
What is your Name?
<input type="text" id="firstname" size="30" />
<span id="errorfirst" style="color: red;"></span>
</p>
<p>
<input type="button" id="clickme" value="Click Me">
</p>
<p id="message">
</p>
</div>

$(document).ready(function() {
	$("#clickme").click(function () {
		
		$("#errorfirst").text("");
		$("#message").text("");
		
		var myfirst = $("#firstname").val();
		
		if (myfirst == '')
		{
			$("#errorfirst").text("Name is required");
			return;
		}
		$("#message").text("Hi " + myfirst);
	}) //end of click handler
}); // END OF READY

//exercise 5.2
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Exercise 7.2</title>
	<link rel="stylesheet" href="X_7_2.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
   	<script src="X_7_2.js"></script>
</head>

<body>
	<section id="example">
		<h1>Exercise 7.2 - Data Validation</h1>
		<br />
		<form method="post">
		<div>
				<p>
					What is your Name?
					<input type="text" id="firstname" size="30" />
					<span id="errorfirst" style="color: red;"></span>
				</p>
				<p>
					What is your Age?
					<input type="text" id="age" size="2" />
					<span id="errorage" style="color: red;"></span>
				</p>
				<p>
					<input type="button" id="clickme" value="Click Me">
				</p>
				<p id="message">
				</p>
		</div>
	</section>
</body>
</html>

$(document).ready(function() {
	$("#clickme").click(function () {
		
		var myFirst = $('#firstname').val();
		var myAge = $('#age').val();
		
		if (myFirst == '') {
			$('#errorfirst').text('Name is required');
			return;
		} else {
			$('#errorfirst').text('');
		}
		if (myAge == '') {
			$('#errorage').text('Age is required');
			return;
		} else {
			$('#errorage').text('');
		}
		if (myAge > 40) {
			$('#message').text('Hi ' +  myFirst + '. You are over the hill.');
		} else {
			if (myAge < 40) {
				$('#message').text('Hi ' + myFirst + ". You are still young, don't sleep so much");
			}
		}
	})
});

//Some of the most useful jQuery selectors
[attribute]
[attribute=value]
:eq(n)
:even
:first
:first-child
:gt(n)
:header
:last
:last-child
:lt(n)
:not(selector)
:odd
:text

//Select the li elements that are the first child of their parent element
$("li:first-child")
//Select the even tr elements of a table
$("tr:even") // numbering starts at 0
//Select the third descendant <p> element of an element
$("#faqs p:eq(2)") // numbering starts at 0
//Select all input elements with “text” as the type attribute
$(":text")

//A summary of the most useful jQuery methods
next([selector])
prev([selector])
attr(attributeName)
attr(attributeName, value)
css(propertyName)
css(propertyName, value)
addClass(className)
removeClass([className])
toggleClass(className)
hide([duration])
show([duration])
each(function)

//Get the value of the src attribute of an image
$("#image").attr("src");
//Set the value of the src attribute of an image
to the value of a variable
$("#image").attr("src", imageSource);
//Set the value of the color property of the h2 elements
$("h2").css("color", "blue");
//Add a class to the h2 descendants of the “faqs” element
$("#faqs h2").addClass("minus");
//Run a function for each <a> element within an “image_list” element
$("#image_list a").each(function() {
 // the statements of the function
});


//Some of the most useful jQuery event methods
ready(handler)
unload(handler)
error(handler)
click(handler)
dblclick(handler)
mouseenter(handler)
mouseover(handler)
mouseout(handler)
hover(handlerIn, handlerOut)

//A handler for the double-click event of all text boxes that clears the clicked box
$(":text").dblclick(function () {
 $(this).val("");
}

//A handler for the hover event of each img element within a list
$("#image_list img").hover(
 function() {
 alert("The mouse pointer has moved into an img element");
 },
 function() {
 alert("The mouse pointer has moved out of an img element);
 }
); // end hover

<h1>Event-Method Example</h1>
<br />
<div>
<p>
What is your Name?
<input type="text" id="firstname" size="30" />
<span id="errorfirst" style="color: red;"></span>
<span id="errorfirst" style="color: black;">
 (Double-click to clear text)</span>
</p>
<p>
<input type="button" id="clickme" value="Click Me">
</p>
<p id="message">
</p>
</div>

$(document).ready(function() {
	$("#clickme").click(function () {
		
		$("#errorfirst").text("");
		$("#message").text("");
		
		var myfirst = $("#firstname").val();
		
		if (myfirst == '') {
			$("#errorfirst").text("Name is required");
			return;
		}
		
		$("#message").text("Hi " + myfirst);
	}) //end of click handler
	
	$(":text").dblclick(function () {
		$(this).val("");
	}) //end of dblclick handler
	
	$("img").mouseover(
		function() {
			$(this).attr("src", "…/Examples/unbirthdayov.jpg");
	})
	
	$("img").mouseout(
		function() {
			$(this).attr("src", "…/Examples/unbirthday.jpg");
	})
}) // END OF READY

//exercise 5-3
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Exercise 7.3</title>
	<link rel="stylesheet" href="X_7_3.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   	<script src="X_7_3.js"></script>
</head>

<body>
	<section id="example">
		<h1>Exercise 7.3 - Alternate Colored Rows</h1>
		<br />
		<div>
				<table border="1">
				<caption><strong>SOFTBALL TEAM</strong></caption>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Position</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Jane</td>
						<td>Smith</td>
						<td>First Base</td>
					</tr>
					<tr>
						<td>George</td>
						<td>Jones</td>
						<td>Pitcher</td>
					</tr>
					<tr>
						<td>Sally</td>
						<td>Parks</td>
						<td>Center Field</td>
					</tr>
					<tr>
						<td>Bob</td>
						<td>Barker</td>
						<td>Right Field</td>
					</tr>
					<tr>
						<td>Claude</td>
						<td>Busey</td>
						<td>Left Field</td>
					</tr>
				</tbody>
				</table>
		</div>
	</section>
</body>
</html>

$(document).ready(function() {
	$('tbody > tr:even').css('background-color', 'lightblue');
	
	$('table').mouseover(function() {
		$('tbody > tr:odd').css('background-color', 'lightblue');
		$('tbody > tr:even').css('background-color', 'silver');
	})
	
	$('table').mouseout(function() {
		$('tbody > tr:odd').css('background-color', 'silver');
		$('tbody > tr:even').css('background-color', 'lightblue');
	})
})

//assignment 5
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Assignment 5 - JQuery Chapter 5</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="JQuery_Asgn5.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   	<script src="asgn5_jug.js"></script>
</head>

<body>


<div id="question">
	<h2>Assignment 5</h2>
	<p>What is your first name?
	<input type="text" id="firstname" size="30">
	<span></span>
	</p>
</div>

<div id="vacationimages">
	<p>Click on the Image that best represents the kind of vacation you want</p>
	<p><img src="http://profperry.com/Classes20/JQuery/mountain.jpg" alt="Mountain Vacation"><br /><br /></p>
	<p><img src="http://profperry.com/Classes20/JQuery/desert.jpg" alt="Desert Vacation"><br /><br /></p>
	<p><img src="http://profperry.com/Classes20/JQuery/ocean.jpg" alt="Ocean Vacation"><br /><br /></p>
</div>

<div id="bigimage">
	<img id="currentimage" src="http://profperry.com/Classes20/JQuery/ocean.jpg" alt="ocean vacation" width="300" height="225" border="0">
	<p id="imagedesc"></p>
</div>

<div id="showhidebuttondiv">
	<input id="showhidebutton" type="button" value="Hide Image">
</div>


<div id="submitdiv">
	<input id="submitme" type="button" value="Submit ME">
	<p id="mymessage"></p>
</div>




</body>
</html>

$(document).ready(function() {
	$('#vacationimages img').mouseover(function() {
		$(this).css('border', 'outset 10px');
	})
	
	$('#vacationimages img').mouseout(function() {
		$(this).css('border', 'none');
	})
	
	$('#vacationimages img').click(function() {
		$('#currentimage').attr('src', $(this).attr('src'));
		$('#imagedesc').text($(this).attr('alt'));
		
		$('#bigimage').show();
	})
	
	$('#showhidebutton').click(function() {
		$('#bigimage').hide();
	})
	
	$('#submitme').click(function() {
		var firstName = $('#firstname').val();
		if (firstName == '') {
			$('#question span').text('Must enter first name!');
			return;
		} else {
			$('#question span').text('');
		}
		
		if (firstName != '') {
			if ($('#bigimage').css("display") != 'none') {
				$('#mymessage').text(firstName + ' you want a ' + $('#imagedesc').text());
			} else {
				if ($('#bigimage').css("display") == 'none') {
					$('#mymessage').text('Please choose a image!');
				}
			}
		}
	})
});

//exercise 6.1
//Set the value of the src attribute of an image to the value of a variable
$("#image").attr("src", "book1.jpg");
//Use a map to set the values of two attributes
$("#image").attr( {"src": "book1.jpg", "alt": "Book 1" } );
//Remove the id attribute from all h2 elements within the “faqs” element
$("#faqs h2").removeAttr("id");

//The methods for DOM replacement
val()
val(value)
val(function)
text()
text(textString)
text(function)
html()
html(htmlString)
html(function)
replaceWith(content)
replaceAll(target)

//Display all of the HTML in the aside element
alert($("aside").html());
//Put an h2 element into an aside element
$("aside").html("<h2>Table of contents</h2>");

//The methods for DOM insertion, removing, and cloning
prepend(content)
prepend(function)
prependTo(target)
append(content)
append(function)
appendTo(target)
before(content)
before(function)
insertBefore(target)
after(content)
after(function)
insertAfter(target)
clone([withEvents])
remove([selector])

//Insert an h2 element at the end of an aside element
$("aside").append("<h2>Table of contents</h2>");
//Insert an <a> element after the last <p> element in an article
$("article p:last").after(
 "<a href='#top'>Back to top</a>");
//Remove a p element with an id of "mypara"
$("#mypara").remove();
//Clone an img element and store the copy in a variable
Var myImageCopy = $("#myimage").clone(false);

<!DOCTYPE html>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Exercise 6-1</title>
	<link rel="stylesheet" href="X_9_1.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
   	<script src="X_9_1.js"></script>
</head>

<body style="background-color: silver;">
<h1>Exercise 6-1</h1>

<h2>Click John to put him in the Box</h2>

<div id="johntable">

<table border='3'>
<tr>
	<td id="johnbox" width="200px" height="200px"></td>
</tr>
</table>

<p><input type="button" id="removejohn" value="Remove John From Box"></p>


</div>

<div>
<p><img id="john" src="http://profperry.com/Classes20/JQuery/beatles_john.jpg"></p>
</div>

</body>
</html>

$(document).ready(function() {
	var image = '';
	$('#john').click(function() {
		image = $('#john').clone(true);
		
		$('#johnbox').prepend(image);
		$('h2').html('<font color="red">John is in the box!</font>');
	})
	
	$('#removejohn').click(function() {
		$('#john').replaceWith('');
		
		$('h2').html('<font>Click John to put him in the Box</font>');
	})
});

//exercise 6.2
//The HTML for the form
<form id="email_form" name="email_form" action="join.php"
 method="POST">
 <label for="email_address">Email Address:</label>
 <input type="text" id="email_address" name="email_address">
 <br>
 <label for="first_name">First Name:</label>
 <input type="text" id="first_name" name="first_name">
 <br>
 <label>&nbsp;</label>
 <input type="submit" id="join_list" value="Join our List">
 <br>
</form>

//The jQuery methods for getting, setting, and trimming control values
val()
val(value)
trim()

//How to get the value of a numeric entry from a text box
var age = parseInt($("#age").val());
//How to trim the value of an entry and put it back into the same text box
var firstName = $("#first_name").val().trim();
$("#first_name").val(firstName);

//HTML5 controls for input data
email – gets an email address with validation
url - gets a URL with validation
tel - gets a phone number (no validation)
number - gets a numeric entry (+ more)
range - gets a numeric entry (+ more)
date - gets a date entry (+ more)
time - gets a date entry (+ more)

//HTML5 Email Validation
<!DOCTYPE html>
<html lang="en">
<head>
<title>Email Validation Example</title>
</head>
<body>
<form method=“post” action=“myprogram.php”>
 <input type="email" placeholder="me@example.com">
 <input type="submit">
</form>
</body>
</html>

//HTML5 Number Validation (Chrome, not FF)
<!DOCTYPE html>
<html lang="en">
<head>
<title>Email Validation Example</title>
</head>
<body>
<form method=“post” action=“myprogram.php”>
 Age: <input type="number" size="6" name="age">
 <input type="submit">
</form>
</body>
</html>

//The primary HTML5 attributes for working with forms
autofocus - Boolean true when has focus
placeholder - A message is removed when has focus
required - true for required field
title - title is shown in tooltip
pattern - regular expression validation

//HTML5 Required Validation
<!DOCTYPE html>
<html lang="en">
<head>
<title>Email Validation Example</title>
</head>
<body>
<form method=“post” action=“myprogram.php”>
 Age: <input type="number" size="6" name="age" required>
 <input type="submit">
</form>
</body>
</html>

//The HTML for the form – with Validations
<form id="email_form" name="email_form" action="join.php"
 method="POST">
 <label for="email_address">Email Address:</label>
 <input type="email" id="email_address" name="email_address"
required>
 <br>
 <label for="first_name">First Name:</label>
 <input type="text" id="first_name" name="first_name"
required>
 <br>
 <label>&nbsp;</label>
 <input type="submit" id="join_list" value="Join our List">
 <br>
</form>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Exercise 6-2</title>
	<link rel="stylesheet" href="X_10_1.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
   	<script src="X_10_1.js"></script>
</head>

<body>
	<h2>Exercise 6-2</h2>
	<form method='POST'>
		<br>
		<label for="first_name">First Name:</label>
		<input type="text" id="first_name" name="first_name" required>
		<br>
		<label for="age">What is your Age?</label>
		<input type="number" id="age" name="age" required>
		<br>
		<label>&nbsp;</label>
		<br><br>
		<input type="button" id="mysubmit" value="Click Me">
		<br>
		<p id="message"></p>
	</form>
</body>
</html>

$(document).ready(function() {
	$('#mysubmit').click(function() {
		var firstName = $('#first_name').val().trim();
		var age = parseInt($('#age').val());
		
		var addedAge = age + 10;
		$('#first_name').val(firstName);
		
		$('#message').text(firstName + '. You claim you are ' + age + ' but I bet you are really ' + addedAge + ' years old');
		return false;
	})
});

//The jQuery selectors for form controls
:input
:text
:radio
:checkbox
:file
:password
:submit
:reset
:image
:button
:disabled
:enabled
:checked
:selected

//How to get the value of the checked radio button in a group
var radioButton = $("input[name='contact_by']:checked").val();

//How to get an array of the selected options from a list
var selectOptions = [];
selectOptions = $("#select_list :selected");

//How to see if a particular checkbox is checked
if($("#Student").is(':checked'))
{
	alert("I am checked");
}
//For this HTML…
<input type="checkbox" id="Student"> Student

//The jQuery event methods for forms
//The jQuery methods for triggering events
focus(handler)
blur(handler)
change(handler)
select(handler)
submit(handler)

//exercise 6-3
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Exercise 10-2</title>
	<link rel="stylesheet" href="X_10_2.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
   	<script src="X_10_2.js"></script>
</head>

<body>
	<form method='POST'>
	<div id="top">
		<h2>Exercise 10-2</h2>
		<h3>Check Box for Each Degree You Have</h3>
		<br>
		<label for="first_name">First Name:</label>
		<input type="text" id="first_name" name="first_name" required>
		<br>
	</div>

	<div id="mycbxs">
		<br><strong>&nbsp;</strong>
		<br><input type="checkbox" id="BAcbx" value="B"> BA
		<br><input type="checkbox" id="MAcbx" value="M"> MA
		<br><input type="checkbox" id="PHDcbx" value="P"> PHD
	</div>

	<div id="myinputs">
		<br><strong>Discipline</strong>
		<br><input type="text" id="BAText" size="30">
		<br><input type="text" id="MAText" size="30">
		<br><input type="text" id="PHDText"  size="30">

		<br><br>
		<input type="submit" id="myclick" value="Submit Degree Info">
		<br>
		<p id="message"></p>
	</div>

	</form>

</body>
</html>

$(document).ready(function() {
	$("input[type='checkbox']").click(function() {
		
		if ($('#BAcbx').is(':checked')) {
			$('#BAText').focus();
		}
		if ($('#MAcbx').is(':checked')) {
			$('#MAText').focus();
		}
		if ($('#PHDcbx').is(':checked')) {
			$('#PHDText').focus();
		}
		
	});
	
	$('#myclick').click(function() {
		var firstName = $('#first_name').val().trim();
		$('#first_name').val(firstName);
		
		var myMsg = firstName + ', you have the following degrees:<br>';
		
		var myString = '';
		
		var degreeBA = $('#BAText').val();
		var degreeMA = $('#MAText').val();
		var degreePHD = $('#PHDText').val();
		
		var degree = $('#myinputs input[type="text"]').val();
		var buttonCheckVal = $('input[type="checkbox"]:checked').val();
		
		var buttonCheck = $('input[type="checkbox"]:checked');
		if (firstName == '') {
			$('#message').html("<span style='color: red;'>Please enter a first name</span>");
			return;
		}
		if (buttonCheckVal == '') {
			$('#message').html(firstName + ", you have yet to earn any degrees");
			return;
		}

		if ($('#BAcbx').is(':checked')) {
			myMsg += "BA in " + degreeBA + '<br>';
		}
		if ($('#MAcbx').is(':checked')) {
			myMsg += "MA in " + degreeMA + '<br>';
		}
		if ($('#PHDcbx').is(':checked')) {
			myMsg += "PHD in " + degreePHD + '<br>';
		}

		$('#message').html(myMsg);
		return false;
	});
});

//assignment 6
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Assignment 6</title>
	<link rel="stylesheet" href="Assignment_6.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   	<script src="Assignment_6_jug.js"></script>
</head>

<body>
    <div id="top">
	<h1>Assignment 6</h1>
	<h3>Enter Employment Statistics</h3>
	<form>
		<br>
		<label for="first_name">First Name:</label>
		<input type="text" id="first_name" name="first_name" required> <span class="error" id="first_error"></span>
		<br>
		<label for="last_name">Last Name:</label>
		<input type="text" id="last_name" name="last_name" required> <span class="error" id="last_error"></span>
		<br>
		Male <input type="radio" name="gender" value="M">
		Female <input type="radio" name="gender" value="F"> <span class="error" id="gender_error"></span>
		<br>
		Years Experience:
		<select id="years" size="1">
			<option value="-">-</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
		</select>

		<span class="error" id="years_error"></span>

		<br><br>
		<input type="button" id="mysubmit" value="Submit Form">
		<br>
	</form>
	</div>

	<div id="message">
	</div>
</body>
</html>

$(document).ready(function() {
	$('#mysubmit').click(function() {
		var firstName = $('#first_name').val().trim();
		$('#first_name').val(firstName);
		
		var lastName = $('#last_name').val().trim();
		$('#last_name').val(lastName);
		
		var male = $('input[name="gender"]:checked').val();
		var female = $('input[name="gender"]:checked').val();
		
		//var years = $('option[id="years"]:selected').val();
		var years = $('#years').val();
		
		if (firstName == '') {
			$('#first_error').text('You must Enter a First Name');
			$('#first_name').focus();
			return;
		} else {
			$('#first_error').text('');
		}
		
		if (lastName == '') {
			$('#last_error').text('You must Enter a Last Name');
			$('#last_name').focus();
			return;
		} else {
			$('#last_error').text('');
		}
		
		if (male != 'M' && female != 'F') {
			$('#gender_error').text('You must pick a gender');
			return;
		} else {
			$('#gender_error').text('');
		}
		
		if (years != parseInt(years) || years == '-') {
			$('#years_error').text('You must choose your years of experience');
			return;
		} else {
			if (years == parseInt(years)) {
				$('#years_error').text('');
			}
		}
		
		if (firstName != '' && lastName != '' && (male == 'M' || female == 'F') && years == parseInt(years)) {
			$('#message').css({'background-color': 'yellow', 'padding-left': '2em'});

			$('#message').html('<h1>Employment Stats for ' + firstName + ' ' + lastName + '</h1><br>');
			if (male == 'M') {
				$('#message').append('You are a: Male<br>');
			}
			
			if (female == 'F') {
				$('#message').append('You are a: Female<br>');
			}
			$('#message').append('You have: ' + years + ' years experience<br><br><br><br>');
		}
	});
	return false;
});

//exercise 7.1
//Widgets
• Accordion • Autocomplete • Button • Dialog • Slider • Tabs • Datepicker • Progressbar

//Interactions
• Draggable
• Droppable
• Resizable
• Selectable
• Sortable

//Effects
• Effects core • Fold
• Blind • Highlight
• Bounce • Pulsate
• Clip • Scale
• Drop • Shake
• Explode • Slide
• Fade • Transfer

//The jQuery for using a widget
$(document).ready(function(){
 $("selector").widgetMethod({
 // option settings
 });
});

//The HTML for the tabs
<div id="tabs">
 <ul>
 <li><a href="#tabs-1">Book description</a></li>
 <li><a href="#tabs-2">About the author</a></li>
 <li><a href="#tabs-3">Who this book is for</a></li>
 </ul>
 <div id="tabs-1"><!-- the content --></div>
 <div id="tabs-2"><!-- the content --></div>
 <div id="tabs-3"><!-- the content --></div>
</div>

//The jQuery for the tabs
$(document).ready(function(){
 $("#tabs").tabs();
});

<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>jQuery UI Tabs Demo</title>

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

	<style>
		h1 { font-family: Ariel, Helvetica, san-serif;
	</style>

	<script>
		$(document).ready(function() {
			$( "#tabs" ).tabs();
		});
	</script>

</head>

<body>
	<h1>News You Need to Know</h1>

	<div id="tabs">
		<ul>
		<li><a href="#tabs-1">Cannonball Run</a></li>
		<li><a href="#tabs-2">New Species</a></li>
		<li><a href="#tabs-3">Mac & Cheese</a></li>
		</ul>

		<div id="tabs-1">
			<p>
			(CNN) -- Before the transcontinental race in "Cannonball Run," the starter tells the gathered racers, "You all are certainly the most distinguished group of highway scofflaws and degenerates ever gathered together in one place."
			</p><p>Ed Bolian prefers the term "fraternity of lunatics."
			</p><p>Where the 1981 Burt Reynolds classic was a comedic twist on a race inspired by real-life rebellion over the mandated 55-mph speed limits of the 1970s, Bolian set out on a serious mission to beat the record for driving from New York to Los Angeles.
			</p><p>The mark? Alex Roy and David Maher's cross-country record of 31 hours and 4 minutes, which they set in a modified BMW M5 in 2006.
			</p>
		</div>

		<div id="tabs-2">
			<p>
			(CNN) -- The recent discoveries of a stunning trove of new vertebrate species from the Cape Melville area of northeast Queensland, Australia, show that we still have a lot to learn about life on this planet.
			</p><p>Even though no place on Earth can be described as "pristine" any longer, these creatures live in habitats that have been relatively little disturbed. They include a spectacular gecko and a frog whose eggs develop without a tadpole stage.
			</p><p>New frogs from heavily explored Australia are somewhat surprising (there are now 239 species, with 25 added in the last 10 years). New species are more likely to turn up in less-explored and more humid lands such as New Guinea. Papua New Guinea, 6% the size of Australia, has 349 species of amphibians, 123 described in the last 10 years.
			</p>
		</div>

		<div id="tabs-3">
			<p>(CNN) -- When SpongeBob SquarePants skips onto shelves in boxes of Kraft Macaroni & Cheese next year, he may be a little less, well, yellow than your kids are used to.
			</p><p>Kraft has revamped its character-shaped product line for 2014, according to company spokeswoman Lynne Galia. The new versions will have six additional grams of whole grains, be lower in sodium and saturated fat, and will use spices instead of artificial food dyes to recreate the pasta's famous yellow-orange color.
			</p><p>"Parents have told us that they would like fun Mac & Cheese varieties with the same great taste, but with improved nutrition," Galia said in an e-mail.
			</p>
		</div>

	</div>

</body>
</html>

//exercise 7-2
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Chapter 7 Exercise 2</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_12_2.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_12_2.js" type="text/javascript"></script>
</head>

<body>
	<h1>Chapter 7 Exercise 2: Top Most Dangerous Viruses</h1>
	<div id='tabs'>
		<ul>
			<li><a href='#tabs-1'>ILOVEYOU</a></li>
			<li><a href='#tabs-2'>Code Red</a></li>
			<li><a href='#tabs-3'>Melissa</a></li>
			<li><a href='#tabs-4'>Sasser</a></li>
		</ul>
		
		<div id='tabs-1'>
			<p>
				ILOVEYOU is viewed as one of the most harmful PC infection at any point made. It figured out how to wreck ruin on PC frameworks everywhere throughout the world with around $10 billion worth of harms. 10% of the world's PCs were accepted to have been contaminated. It was awful to such an extent that legislatures and enormous partnerships took their mailing framework disconnected to avert disease. The infection was made by two Filipino developers, Reonel Ramones and Onel de Guzman. What it did was utilize social designing to get individuals to tap on the connection; for this situation, an affection admission. The connection was really a content that postures as a TXT record, because of Windows at the time concealing the real augmentation of the document. Once clicked, it will send itself to everybody in the client's mailing rundown and continue to overwrite documents with itself, making the PC unbootable. The two were rarely charged, as there were no laws about malware. This prompted the institution of the E-Commerce Law to address the issue.
			</p>
		</div>
		
		<div id='tabs-2'>
			<p>
				Code Red originally surfaced on 2001 and was found by two eEye Digital Security workers. It was named Code Red in light of the fact that the pair were drinking Code Red Mountain Dew at the hour of revelation. The worm focused on PCs with Microsoft IIS web server introduced, abusing a cradle flood issue in the framework. It leaves next to no follow on the hard circle as it can run completely on memory, with a size of 3,569 bytes. When tainted, it will continue to make a hundred duplicates of itself yet because of a bug in the programming, it will copy considerably more and winds up eating a great deal of the frameworks assets. It will at that point dispatch a disavowal of administration assault on a few IP address, popular among them was the assault on the White House site . It likewise permits secondary passage access to the server, taking into consideration remote access to the machine. The most critical manifestation is the message it abandons on influenced site pages, "Hacked By Chinese!", which has turned into an image itself. A fix was later discharged and it was gauge that it caused $2 billion in lost profitability. A sum of 1-2 million servers were influenced, which is stunning when you consider there were 6 million IIS servers at the time.
			</p>
		</div>
		
		<div id='tabs-3'>
			<p>
				Named after a fascinating artist from Florida, it was made by David L. Smith in 1999. It began as a contaminated Word report that was posted up on the alt.sex usenet gathering, professing to be a rundown of passwords for explicit locales. This got individuals inquisitive and when it was downloaded and opened, it would trigger the full scale inside and release its payload. The infection will mail itself to the best 50 individuals in the client's email address book and this caused an expansion of email traffic, upsetting the email administrations of governments and companies. It likewise at times debased reports by embeddings a Simpsons reference into them. Smith was in the long run gotten when they followed the Word report to him. The record was transferred utilizing a taken AOL account and with their assistance, law implementation had the option to capture him not exactly seven days since the episode started. He participated with the FBI in catching different infection makers, well known among them the maker of the Anna Kournikova infection. For his participation, he served just 20 months and paid a fine of $5000 of his multi year sentence. The infection purportedly caused $80 million in harms.
			</p>
		</div>
		
		<div id='tabs-4'>
			<p>
				A Windows worm initially found in 2004, it was made by software engineering understudy Sven Jaschan, who additionally made the Netsky worm. While the payload itself might be viewed as essentially irritating (it backs off and crashes the PC, while making it difficult to reset without cutting the power), the impacts were extraordinarily problematic, with a great many PCs being contaminated, and significant, basic framework influenced. The worm exploited a cushion flood defenselessness in Local Security Authority Subsystem Service (LSASS), which controls the security strategy of neighborhood records making crashes the PC. It will likewise utilize the framework assets to spread itself to different machines through the Internet and contaminate others consequently. The impacts of the infection were broad as while the endeavor was at that point fixed, numerous PCs haven't refreshed. This prompted in excess of a million diseases, taking out basic frameworks, for example, aircrafts, news organizations, open transportation, medical clinics, open vehicle, and so forth. By and large, the harm was evaluated to have cost $18 billion. Jaschen was attempted as a minor and got a multi month suspended sentence.
			</p>
		</div>
	</div>
</body>
</html>

p { 
	font-family: Ariel, Helvetica, san-serif;
	font-size: 20px;
	background-color: lightblue;
	padding: 1em;
}

$(document).ready(function() {
	$("#tabs").tabs();
});

//The HTML for the Datepicker widget
<label>Arrival date:</label>
<label><input type="text" id="datepicker"></label>

//The jQuery for the Datepicker widget
//With no options
$(document).ready(function(){
 $("#datepicker").datepicker();
});
//With three options
$(document).ready(function(){
 $("#datepicker").datepicker({
 minDate: new Date(),
 maxDate: +45,
 showButtonPanel: true
 });
});

//Exercise 7-3
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />

	<title>jQuery UI Datepicker - Default functionality</title>

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

	<script>
		$(document).ready(function() {
			$( "#datepicker" ).datepicker();
		});
	</script>
</head>

<body>
	<p>Date: <input type="text" id="datepicker" /></p>
</body>

</html>

//exercise 7-3 remastered DATE CALENDAR PICKER
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Chapter 7 Exercise 3</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_12_3.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_12_3.js" type="text/javascript"></script>
</head>

<body>
	<p>Start Date: <input type='text' id='datepickerstart' /></p>
	
	<p>End Date: <input type='text' id='datepickerend' /></p>

</body>
</html>

$(document).ready(function() {
	$('#datepickerstart').datepicker();
	$('#datepickerend').datepicker();
});

.ui-datepicker {
	background-color: lightblue;
	color: darkblue;
	border: 1px;
}

//The HTML for the resizable element
<div id="dialog" class="ui-widget-content">
	<h3 class="ui-widget-header">Resizable Element</h3>
</div>

//The jQuery for the resizable interaction
$(document).ready(function() {
	 $("#dialog").resizable({
		 maxHeight: 250,
		 maxWidth: 350,
		 minHeight: 150,
		 minWidth: 200
	 });
});

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Resizable - Default functionality</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css" />
<style>
#resizable { width: 200px; height: 150px; padding: 0.5em; }
#resizable h3 { text-align: center; margin: 0; }
</style>
<script>
$(function() {
	$( "#resizable" ).resizable({
	      maxHeight: 250,
	      maxWidth: 350,
	      minHeight: 150,
	      minWidth: 200
    });

});
</script>
</head>
<body>
<div id="resizable" class="ui-widget-content">
<h3 class="ui-widget-header">Resizable</h3>
</div>
</body>
</html>

<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Chapter 7 Exercise 3</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_13_1.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_13_1.js" type="text/javascript"></script>
</head>

<body>
	<div id='dialog' class='ui-widget-content'>
		<h3 class='ui-widget-header'>Resizeable</h3>
	</div>
</body>
</html>

#resizable { width: 200px; height: 150px; padding: 0.5em; }
#resizable h3 { text-align: center; margin: 0; }

$(document).ready(function() {
	 $("#dialog").resizable({
		 maxHeight: 250,
		 maxWidth: 350,
		 minHeight: 150,
		 minWidth: 200
	 });
});

//The five jQuery UI interactions
• Draggable
• Droppable
• Resizable
• Selectable
• Sortable

//HTML for the draggable and droppable elements
<div id="vprospect"><img src="images/vprospect.png"></div>
<div id="vconvert"><img src="images/vconvert.png"></div>
<div id="vretain"><img src="images/vretain.png"></div>
<div id="cart"><p>Your Cart</p></div> 

$(document).ready(function() {
 ("#vprospect, #vconvert, #vretain").draggable(
	{ cursor: "move" });
 $("#cart").droppable({
	drop: function() {
		$(this)
		.addClass("ui-state-highlight")
		.find("p")
		.html("vSolution added!");
		}
	});
});

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>jQuery UI Droppable - Default functionality</title>

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

	<style>
		#draggable { width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0; }
		#droppable { width: 150px; height: 150px; padding: 0.5em; float: left; margin: 10px; }

	</style>

	<script>
	$(document).ready(function() {
		$( "#draggable" ).draggable();

		$( "#droppable" ).droppable({
			drop: function( event, ui )
			{
				$( this )
				.addClass( "ui-state-highlight" )
				.find( "p" )
				.html( "Dropped!" );
			}
		});
	});
	</script>
</head>

<body>
	<div id="draggable" class="ui-widget-content">
		<p>Drag me to my target</p>
	</div>

	<div id="droppable" class="ui-widget-header">
		<p>Drop here</p>
	</div>

</body>
</html>

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>jQuery UI Droppable - Make a Choice</title>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css" />

<style>
	.draggable { width: 100px; height: 100px; padding: 0.5em; margin: 10px 10px 10px 0; background-color: yellow;}
	#droppable { width: 150px; height: 150px; padding: 0.5em; float: left; margin: 10px; }
</style>

<script>

$(function() {

	$( ".draggable" ).draggable();
	
	$( "#droppable" ).droppable({
	
		drop: function( event, ui ) {
		
			if (ui.draggable.attr("id") == "One")
			{
				alert("One is Dropped");
			}
			
			if (ui.draggable.attr("id") == "Two")
			{
				alert("Two is Dropped");
			}
			
			if (ui.draggable.attr("id") == "Three")
			{
				alert("Three is Dropped");
			}
	}
	});
});

</script>
</head>
<body>

<h2>Drag a yellow box into the "Drop here" box to see what was selected</h2>

<div id="One" class="ui-widget-content, draggable">
<p>Drag One</p>
</div>

<div id="Two" class="ui-widget-content, draggable">
<p>Drag Two</p>
</div>

<div id="Three" class="ui-widget-content, draggable">
<p>Drag Three</p>
</div>

<div id="droppable" class="ui-widget-header">
<p>Drop here</p>
</div>

</body>
</html>

//jQuery UI core effects
• Color transitions
• Class transitions
• Easing
• Visibility transitions

//jQuery UI individual effects
blind
bounce
clip
drop
explode
fade
fold
highlight
puff
pulsate
scale
shake
size
slide
transfer
//The URL for demonstrations of the easings
http://jqueryui.com/effect/#easing
//exercise 13-2
<!doctype html>
<html lang="en">
<head>
	<head>
	<meta charset="utf-8" />
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

	<style>
		#draggable { width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0; }
		#droppable { width: 150px; height: 150px; padding: 0.5em; float: left; margin: 10px; }

	</style>

	<script>
	$(document).ready(function() {
		$( "#draggable" ).draggable();

		$( "#droppable" ).droppable({
			drop: function( event, ui )
			{
				$( this )
				.addClass( "ui-state-highlight" )
				.find( "p" )
				.html( "Success!" );
			}
		});
	});
	</script>
</head>

<body>
	<div id="draggable" class="ui-widget-content">
		<p>Drag me to my target</p>
	</div>

	<div id="droppable" class="ui-widget-header">
		<p>Drop here</p>
	</div>

</body>
</html>

//jQuery UI core effects
• Color transitions
• Class transitions
• Easing
• Visibility transitions

//jQuery UI individual effects
blind
bounce
clip
drop
explode
fade
fold
highlight
puff
pulsate
scale
shake
size
slide
transfer
//The URL for demonstrations of the easings
http://jqueryui.com/effect/#easing

//The Syntax of the Methods for Visibility Transitions
Selector.effect[“specific-effect”, {options}][, duration][, callback])

//The Blind Effect
Selector.effect("blind" [, {options}][, duration][, callback])
//EXAMPLE:
$( "#button" ).click(
 function runEffect()
 {
 var options = [];
 $( "#effect" ).effect( "blind", options, 1000, callback );
 }
);

//bounce 
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>jQuery UI - Bounce</title>

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

	<style>

		body { background-color: lightblue; }

		#effect { width: 500px; }
		#mystate { font-size: 36px }

		h2 { font-family: Ariel, Helvetica, san-serif; }

	</style>

	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

	<script>
		$(document).ready(function()
		{
			var callback = function()
			{
				setTimeout(function()
				{
					$( "#effect" ).removeAttr( "style" ).fadeIn();
				}, 100 );
			}

			window.onload = function()
			{

				$( "#button" ).click(
					 function runEffect()
					 {
					 	var options = [];
						$( "#effect" ).effect( "bounce", options, 1000, callback );
					 }
				);
			}
		});
	</script>

</head>

<body >
<h2>Bounce Example</h2>

	<p><input type="button" id="button" value="Bounce Effect"></p>

	<div id="effect" class="ui-widget-content ui-corner-all">
		<p id="mypara">
			Here I am!
		</p>
	</div>

</div>

</body>
</html>

//blind
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>jQuery UI - Bounce</title>

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

	<style>

		body { background-color: lightblue; }

		#effect { width: 500px; }
		#mystate { font-size: 36px }

		h2 { font-family: Ariel, Helvetica, san-serif; }

	</style>

	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

	<script>
		$(document).ready(function()
		{
			var callback = function()
			{
				setTimeout(function()
				{
					$( "#effect" ).removeAttr( "style" ).fadeIn();
				}, 100 );
			}

			window.onload = function()
			{

				$( "#button" ).click(
					 function runEffect()
					 {
					 	var options = [];
						$( "#effect" ).effect( "blind", options, 1000, callback );
					 }
				);
			}
		});
	</script>

</head>

<body >
<h2>Blind Example</h2>

	<p><input type="button" id="button" value="Blind Effect"></p>

	<div id="effect" class="ui-widget-content ui-corner-all">
		<p id="mypara">
			Here I am!
		</p>
	</div>

</div>

</body>
</html>

//exercise 13-3 / 7-6
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Bounce Example</title>
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
		<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
		
		<style>
			body {
				background-color: lightblue;
			}
			
			#effect {
				width: 500px;
			}
			
			#mypara {
				font-size: 36px;
			}
			
			h2 {
				font-family: Ariel, Helvetica, san-serif;
			}
		</style>
		
		<script>
			$(document).ready(function() {
				var callback = function() {
					setTimeout(function() {
						$('#effect').removeAttr('style').fadeIn();
					}, 100 );
				}
				
				window.onload = function() {
					$('#button').click(
						function runEffect() {
							var options = [];
							$('#effect').effect('bounce', options, 1000, callback);
							$('#mypara').html('Bounce, Bounce');
						}
					);
				}
			});
		</script>
	</head>

	<body>
		<h2>Bounce Example</h2>
		
		<p><input type='button' id='button' value='Bounce Effect'></p>
		
		<div id='effect' class='ui-widget-content ui-corner-all'>
			<p id='mypara'>
				Here I am!
			</p>
		</div>
	</body>
</html>

//assignment 7
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Chapter 7 Assignment</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="asgn7.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="asgn7.js" type="text/javascript"></script>
</head>

<body>
	<h1>Health Care Exchange - First Draft</h1>
	
	<main>
		<div id='tabs'>
			<ul>
				<li><a href='#tabs-1'>Sign Up</a></li>
				<li><a href='#tabs-2'>Pick a Plan</a></li>
				<li><a href='#tabs-3'>How do you Feel?</a></li>
			</ul>
			
			<div id='tabs-1'>
				<h2>Sign Up</h2>
				<p>First Name:<br>
				<input type='text' id='firstname' size='30'>
				<span class='error' id='first_error'></span></p>
				
				<p>Last Name:<br>
				<input type='text' id='lastname' size='30'>
				<span class='error' id='last_error'></span></p>
				
				<p>Start Date:<br>
				<input type='text' id='datepicker'>
				<span class='error' id='date_error'></span></p>
				
				<p><input type='button' id='createaccount' value='Create an Account'></p>
				<p id='accountmessage'></p>
			</div>
			
			<div id='tabs-2'>
				<div id='great' class='ui-widget-content, draggable'>
					<p>Great Plan!</p>
				</div>
				<div id='poor' class='ui-widget-content, draggable'>
					<p>Poor Plan!</p>
				</div>
				<div id='droppable' class='ui-widget-header'>
					<p><strong>Drop your plan here</strong></p>
				</div>
			</div>
			
			<div id='tabs-3'>
				<p><input type='button' id='showfeelings' value='Show My Feelings'></p>
				<div id='feelings' class='ui-widget-content ui-corner-all'>
					<p></p>
				</div>
			</div>
		</div>
	</main>
</body>
</html>

h1 {
	color: blue;
	font-family: Ariel, Helvetica, san-serif;
}

h2 {
	font-family: Ariel, Helvetica, san-serif;
}
body {
	background-color: #FFF8D2;
}

#tabs {
	background-color: #D0D0D0;
}

.error {
	color: red;
}

.draggable {
	width: 100px;
	height: 100px;
	padding: 0.5em;
	margin: 30px 10px 10px 0;
	background-color: white;
	float: left;
	border: solid;
	border-color: #D0D0D0;
}

#droppable {
	width: 150px;
	height: 300px;
	padding: 0.5em;
	margin: 25px 25px;
	float: right;
	background-color: none;
	border: none;
}

#tabs-2 {
	background-color: white;
}

#tabs-3 {
	background-color: white;
}

#feelings {
	border: solid;
	border-color: grey;
	height: 100px;
	width: 500px;
	font-size: 30px;
}

$(document).ready(function() {
	$("#tabs").tabs();
	$('#datepicker').datepicker();
	
	var myFeelings = "I don't know";
	
	var callback = function() {
		setTimeout(function() {
			$('#feelings').removeAttr( "style" ).fadeIn();
		}, 100 );
	}
	
	$('#createaccount').click(function() {
		var firstName = $('#firstname').val();
		var lastName = $('#lastname').val();
		var startDate = $('#datepicker').val();
		
		if (firstName == '') {
			$('#first_error').html('Please Enter First Name');
			$('#accountmessage').html('Please Correct Errors and Try Again');
			$('#accountmessage').css({'color': 'red', 'font-weight': 'bold'});
		} else {
			if (firstName != '') {
				$('#first_error').html('');
			}
		}
		
		if (lastName == '') {
			$('#last_error').html('Please Enter Last Name');
			$('#accountmessage').html('Please Correct Errors and Try Again');
			$('#accountmessage').css({'color': 'red', 'font-weight': 'bold'});
		} else {
			if (lastName != '') {
				$('#last_error').html('');
			}
		}
		
		if (startDate == '') {
			$('#date_error').html('Please Enter the Start Date');
			$('#accountmessage').html('Please Correct Errors and Try Again');
			$('#accountmessage').css({'color': 'red', 'font-weight': 'bold'});
		} else {
			if (startDate != '') {
				$('#date_error').html('');
			}
		}
		
		if (firstName != '' && lastName != '' && startDate != '') {
			$('#accountmessage').html('<span>Success: ' + firstName + ' ' + lastName + '<br>Use the Start Date as your Password</span>');
			$('#accountmessage').css({'color': 'green', 'font-weight': 'bold'});
		}
	});
	
	$('.draggable').draggable({
		cursor: "move"
	});
	
	$('#droppable').droppable({
		drop: function(event, ui) {
			if(ui.draggable.attr('id') == 'great') {
				$('#droppable p').html('Great Plan Picked!');
				myFeelings = 'Great!';
			} else {
				if(ui.draggable.attr('id') == 'poor') {
					$('#droppable p').html('Poor Plan Picked!');
					myFeelings = 'My Head Hurts!';
				}
			}
		}
	});

	$('#showfeelings').click(function() {
		
		var options = [];
		
		if (myFeelings == 'My Head Hurts!') {
			
			$('#feelings p').html(myFeelings);
			$('#feelings').effect('shake', options, 1000, callback);
			$('#feelings p').css('color', 'red');
		} else {
			if (myFeelings == "I don't know") {
				
				$('#feelings p').html(myFeelings);
				$('#feelings').effect('bounce', options, 1000, callback);
			} else {
				if (myFeelings == 'Great!') {

					$('#feelings p').html(myFeelings);
					$('#feelings').effect('blind', options, 1000, callback);
					$('#feelings p').css('color', 'green');
				}
			}
		}
	});
});

//DOM , and . == text node
<!DOCTYPE HTML>
<html>
<head>
<title>DOMinating JavaScript</title>
</head>
<body>
	<h1> DOMinating JavaScript </h1>
	<p id='para1'> If you need some help with your JavaScript read this
		<a href=http://www.danwebb.net/ rel="external">Dan Webb</a>,
		<a href="http://www.quirksmode.org/" rel="external">PPK</a> and
		<a href="http://adactio.com/" rel="external">Jeremy Keith</a>.
	</p>
</body>
</html>

<script>
	var target = document.getElementById('para1');
	alert(target.nodeName); //displays "p"
	alert(target.nodeType); //displays "1" - Element Object
	alert(target.firstChild.nodeType); //displays "3" - Text Object
</script>

//Examples: nodeName and nodeType
 <p id="para1">Hi There</p>
var target = $("para1");
alert(target.nodeName); //displays "p"
alert(target.nodeType); //displays "1" - Element Object
alert(target.firstChild.nodeType); //displays "3" - Text Object

//Finding an element by a specific ID
<p id="uniqueElement">
 Hi There
</p>
//Use getElementById() method
var myPara1 = document.getElementById("uniqueElement");
//We use the $ shortcut
var myPara1 = $("uniqueElement");

//exercise 8-1
<!DOCTYPE HTML>

<html>
<head>
	<title>X-6-1</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_6_1.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_6_1.js"></script>
</head>

<body>

	<h1>Exercise 6-1</h1>

	<p id="mypara"> If you need some help with your JavaScript read this
		<a href="http://www.cnn.com">CNN</a>
	</p>

	<p>
		<input type="button" id="showbutton" value="Show Properties">
	</p>

	<p id="messagearea">
	&nbsp;
	</p>


</body>
</html>

$(document).ready(function() {
	$('#showbutton').click(function() {
		var myPara = $('#mypara').get();
		var nodeName = $('#mypara').get(0).nodeName;
		var nodeType = $('#mypara').get(0).nodeType;

		$('#messagearea').html('Element is: ' + myPara + '<br>Element NodeName is: ' + nodeName + '<br>Element NodeType is: ' + nodeType);
	});
});

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #E6E6E6;
    margin: 10px auto;
    width: 500px;
    border: 3px solid blue;
}

header {
    padding: 0 1em .5em;
}

section {
    padding: 0 1em .5em;
}

h1 {
	margin: .5em 0;
}

label {
	float: left;
    width: 10em;
    text-align: right;
    text-align: right;
    padding-bottom: .5em;
}

input {
    margin-left: 1em;
    margin-bottom: .5em;
}

//navigating DOM tree

Finding a Parent
//Finding Children
//Finding Siblings
//Getting Attributes
//Setting Attributes
					parentNode
					|
previousSibling <- li -> nextSibling
					|
					childNodes, firstChild, lastChild
//Finding a parent node
<p>
<a id="oliver" href="someURL">Oliver Twist</a>
</p>

var myOliver = $("oliver");
var myPara = myOliver.parentNode;

//Finding children nodes
<ul id="baldwins">
<li>Alec</li>
<li>Daniel</li>
<li>William</li>
<li>Stephen</li>
</ul>

var baldwins = $("baldwins");

var alec = baldwins.firstChild;
var stephen = baldwins.lastChild;

var william = baldwins.childNodes[2];
var stephen = william.nextSibling;
var daniel = william.previousSibling;

//Use getElementsByTagName()
var myParaList =
	document.getElementsByTagName("p");
alert(myParaList.length); // displays "2"

<p>Hi There</p>
<p>How are you?</p>
//myParaList is a node list

//node list
//A node list can be treated much like an Array
//You can use a for-loop to process each item in list
var myParaList =
	document.getElementsByTagName("p");
	
for (var i=0; i<myParaList.length; i++)
{
 alert(myParaList[i].firstChild.nodeValue);
}

//Finding Elements by Name
//Use getElementsByName()
<input type="radio" name="choice" checked value"Y">Yes
<input type="radio" name="choice" value"N">No

var targets = document.getElementsByName("choice");

alert(targets[0].nextSibling.nodeValue); // displays "Yes"
alert(targets[1].nextSibling.nodeValue); // displays "No" 

//Finding Elements by ClassName
//Use getElementsByClassName()
<p class="special">Hello</p>
<p class="special">There</p>

var targets =
	document.getElementsByClassName("special");
	
alert(targets[0].firstChild.nodeValue); // displays "Hello"
alert(targets[1].firstChild.nodeValue); // displays "There"

//chapter 8 exercise 6-2
<!DOCTYPE HTML>

<html>
<head>
	<title>X-6-2</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_6_2.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_6_2.js"></script>
</head>

<body>

<h1>Exercise 6-2</h1>

<div>
	<p id="mypara">Hi There</p>
	<p>How are you?</p>
</div>

<hr>

<div>
	<p>I'm fine</p>
	<p>Thanks for asking</p>
	<p>How are you?</p>
</div>

<p>
	<input type="button" id="changecolor" value="Change Colors">
</p>


</body>
</html>

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #E6E6E6;
    margin: 10 auto;
    width: 500px;
    border: 3px solid blue;
}

header {
    padding: 0 1em .5em;
}

section {
    padding: 0 1em .5em;
}

h1 {
	margin: .5em 0;
}

label {
	float: left;
    width: 10em;
    text-align: right;
    padding-bottom: .5em;
}

input {
    margin-left: 1em;
    margin-bottom: .5em;
}

$(document).ready(function() {
	$('#changecolor').click(function() {
		var myPara = $('#mypara');
		
		myPara.css('color', 'blue');
		
		var myParent = document.getElementById('mypara').parentNode.nodeName; //string of div node
		
		var myParaList = document.getElementsByTagName(myParent); //list of divs
		
		for (var i = 0; i < myParaList.length; i++) { //loops to find divs in order to make background yellow
			myParaList[i].style.backgroundColor = 'yellow';
		}
	});
});

//Element Attributes
//Interacting with Attributes

//Getting an Attribute
//Use the getAttribute() function
<a id="koko" href="http://koko.org">Koko</a>
var koko = $("koko");
var kokoHref = koko.getAttribute("href");
//The variable kokoHref will now be "http://koko.org"

//setAttribute Example
<a id="koko" href="http://koko.org">Koko</a>
var koko = $("koko");
koko.setAttribute("title", "Web site for Koko!");
//Now the HTML is changed to …
<a id="koko" title="Web site for Koko!"
 href="http://koko.org">Koko</a>

//exercise 6-3 chapter 8
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />

	<title>X-6-3</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_6_3.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_6_3.js"></script>
</head>

<body>

	<h1>Exercise 6-3</h1>

	<p id="mypara">
		<br>&nbsp;&nbsp;&nbsp;<a id="news" href="http://www.cnn.com" target="_blank">CNN</a>
	</p>

	<p>
		<input type="button" id="goLeft" value="Go Left"  >
		<input type="button" id="goRight" value="Go Right" >
	</p>


</body>
</html>

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #E6E6E6;
    margin: 10 auto;
    width: 500px;
    border: 3px solid blue;
}

header {
    padding: 0 1em .5em;
}

section {
    padding: 0 1em .5em;
}

h1 {
	margin: .5em 0;
}

label {
	float: left;
    width: 10em;
    text-align: right;
    padding-bottom: .5em;
}

input {
    margin-left: 1em;
    margin-bottom: .5em;
}

$(document).ready(function() {
	
	var myPara = document.getElementById('news');
	
	$('#goLeft').click(function() {
		myPara.setAttribute('href', 'http://tv.msnbc.com/');
		$('#news').text('MSNBC');
	});
	
	$('#goRight').click(function() {
		myPara.setAttribute('href', 'http://foxnews.com');
		$('#news').text('FOX NEWS');
		
	});
});

//Create an Element
//To create an element use the DOM method createElement, e.g.
var mypara = document.createElement("p");

//Adding a Child Element
var mypara = document.createElement("p");
var myparent = $("body");
myparent.appendChild(mypara);

//Adding Text to the Paragraph
var myText = document.createTextNode("Hello World!");
mypara.appendChild(myText); //cannot append text alone REQUIRES VARIABLE

function addMe() {
	var myPara = document.createElement('p');
	var myBody = document.getElementById('mybody'); //this is the parent
	myBody.appendChild(mypara);
	
	var myText = document.createTextNode('I did it!');
	myPara.appendChild(myText);
}

//Removing Elements
//To remove elements use the removeChild method
//– NOTE: If an Element that you remove has children then all children are removed as well
var message = $('msg');
var container = message.parentNode;
container.removeChild(message);

function(removeMe() {
	var beatles = document.getElementById('beatles');
	var myPaul = document.getElementById('paul');
	beatles.removeChild(myPaul);
}

//exercise 6-4 chapter 8
<!DOCTYPE HTML>

<html>
<head>
	<title>X-6-4</title>
	
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" >
	<link rel="stylesheet" href="X_6_4.css">
	
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="X_6_4.js"></script>
</head>

<body>

	<div id="mydiv">

		<h1>Exercise 6-4</h1>

		<p>Hi There</p>
		<p>How are you?</p>

		<p>
			<input type="text" id="myresponse">
			<br><input type="button" id="showresponse" value="Show Response">
			<input type="button" id="removeresponse" value="Remove Response">
		</p>

		<hr>

	</div>


</body>
</html>


body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #E6E6E6;
    margin: 10 auto;
    width: 500px;
    border: 3px solid blue;
}

header {
    padding: 0 1em .5em;
}

section {
    padding: 0 1em .5em;
}

h1 {
	margin: .5em 0;
}

label {
	float: left;
    width: 10em;
    text-align: right;
    padding-bottom: .5em;
}

input {
    margin-left: 1em;
    margin-bottom: .5em;
}

$(document).ready(function() {
	$('#myresponse').focus();
	
	$('#showresponse').click(function() {
		
		var userText = $('#myresponse').val();
		var myPara = document.createElement('p');
		var myParent = document.getElementById('mydiv');
		
		myParent.appendChild(myPara);
		
		$('#mydiv p:last-child').attr('id', 'displayedresponse');
		
		var myText = document.createTextNode(userText);
		
		myPara.appendChild(myText);
		$('#myresponse').val('');
	});
	
	$('#removeresponse').click(function() {
		
		var myParent = document.getElementById('mydiv');
		var displayedResponse = document.getElementById('displayedresponse');
		myParent.removeChild(displayedResponse);
	});
});

//unsorted turns to sorted array
window.onload = function()
{
	var myDisplay = "";

	//unsorted Array

	var fruitArray = new Array("Oranges", "Apples", "Bananas");

	fruitArray.sort();   //sorts the array in place


	//builds the HTML for a sorted list into the myDisplay variable

	for (index in fruitArray)
	{
		myDisplay += "<br>" + fruitArray[index];
	}


	//sets the HTML for the "display" paragraph to the HTML in myDisplay

	document.getElementById("display").innerHTML = myDisplay;
}