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