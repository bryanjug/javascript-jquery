
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