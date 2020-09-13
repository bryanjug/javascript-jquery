var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var cntr = 0;
	var guesses = '';
	
	while (guessnumber != '7') {
		cntr++;
		
		if (cntr > 3) {
			break;
		}
		
		var guessid = 'guess' + cntr;
		var guessnumber = $(guessid).value;
		
		if (guessnumber == 7) {
			$('msg').innerHTML = 'You guessed 7! That is correct!';
		} else {
			$('msg').innerHTML = 'None of these guesses were correct.';
		}
	}
}

window.onload = function () {
    $("guessbutton").onclick = processInfo;
}