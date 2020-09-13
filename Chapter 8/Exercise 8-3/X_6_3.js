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