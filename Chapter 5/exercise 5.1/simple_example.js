$(document).ready (
	function() {
	$("#clickme").click (
		function() {
			var myfirst = $("#firstname").val();
			
			if (myfirst == 'Steve') {
				alert('Hi professor');
			
			} else {
				alert('Hi ' + myfirst);
				}
			}
		)
	}
)