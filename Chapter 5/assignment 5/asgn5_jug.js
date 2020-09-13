$(document).ready(function() {
	$('#vacationimages img').mouseover(function() {
		$(this).css('border', 'outset 10px');
	})
	
	$('#vacationimages img').mouseout(function() {
		$(this).css('border', 'none');
	})
	
	$('#vacationimages img').click(function() {
		$('#currentimage').attr('src', $(this).attr('src'));
		$('#imagedesc').text($(this).attr('alt'));
		
		$('#bigimage').show();
	})
	
	$('#showhidebutton').click(function() {
		$('#bigimage').hide();
	})
	
	$('#submitme').click(function() {
		var firstName = $('#firstname').val();
		if (firstName == '') {
			$('#question span').text('Must enter first name!');
			return;
		} else {
			$('#question span').text('');
		}
		
		if (firstName != '') {
			if ($('#bigimage').css("display") != 'none') {
				$('#mymessage').text(firstName + ' you want a ' + $('#imagedesc').text());
			} else {
				if ($('#bigimage').css("display") == 'none') {
					$('#mymessage').text('Please choose a image!');
				}
			}
		}
	})
});