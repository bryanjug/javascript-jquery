$(document).ready(function() {
	$('#showbutton').click(function() {
		var myPara = $('#mypara').get();
		var nodeName = $('#mypara').get(0).nodeName;
		var nodeType = $('#mypara').get(0).nodeType;

		$('#messagearea').html('Element is: ' + myPara + '<br>Element NodeName is: ' + nodeName + '<br>Element NodeType is: ' + nodeType);
	});
});