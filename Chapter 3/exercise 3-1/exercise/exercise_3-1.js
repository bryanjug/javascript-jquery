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

















