$(document).ready(function() {
	$('#changecolor').click(function() {
		var myPara = $('#mypara');
		
		myPara.css('color', 'blue');
		
		var myParent = document.getElementById('mypara').parentNode.nodeName;
		
		var myParaList = document.getElementsByTagName(myParent); //list of divs
		
		for (var i = 0; i < myParaList.length; i++) {
			myParaList[i].style.backgroundColor = 'yellow';
		}
	});
});