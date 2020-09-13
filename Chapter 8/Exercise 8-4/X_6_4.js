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