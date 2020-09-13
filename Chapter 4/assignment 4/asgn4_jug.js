var BeatlesArray;

var $ = function (id) {
	return document.getElementById(id);
}

var processNames = function() {
	
	for(index in BeatlesArray) {
		BeatlesArray[index] = (parseInt(index) + 1) + '. ' + BeatlesArray[index];
	}
	
	BeatlesArray = BeatlesArray.join(', ');
	
	$('list').innerHTML = BeatlesArray;
}

var johnButton = function() {
	$('paul').border = '0px';
	$('paul').style.color = null;
	$('george').border = '0px';
	$('george').style.color = null;
	$('ringo').border = '0px';
	$('ringo').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'John';
	
	BeatlesArray.push(myBeatle);
}

var paulButton = function() {
	$('john').border = '0px';
	$('john').style.color = null;
	$('george').border = '0px';
	$('george').style.color = null;
	$('ringo').border = '0px';
	$('ringo').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'Paul';
	
	BeatlesArray.push(myBeatle);
}

var georgeButton = function() {
	$('paul').border = '0px';
	$('paul').style.color = null;
	$('john').border = '0px';
	$('john').style.color = null;
	$('ringo').border = '0px';
	$('ringo').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'George';
	
	BeatlesArray.push(myBeatle);
}

var ringoButton = function() {
	$('paul').border = '0px';
	$('paul').style.color = null;
	$('george').border = '0px';
	$('george').style.color = null;
	$('john').border = '0px';
	$('john').style.color = null;
	
	this.border = '4px';
	this.style.color = 'yellow';
	
	var myBeatle = 'Ringo';
	
	BeatlesArray.push(myBeatle);
}

window.onload = function ()
{
	$("showlist").onclick = processNames;
	$('john').onclick = johnButton;
	$('paul').onclick = paulButton;
	$('george').onclick = georgeButton;
	$('ringo').onclick = ringoButton;
	
	BeatlesArray = new Array();
}

