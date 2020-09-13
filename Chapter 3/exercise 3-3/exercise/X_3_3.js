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
