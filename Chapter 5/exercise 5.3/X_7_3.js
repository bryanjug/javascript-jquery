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