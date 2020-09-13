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