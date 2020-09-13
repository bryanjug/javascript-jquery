var addItem = function() {
	var myInput = document.createElement('input');
	var myBr = document.createElement('br');
	
	var myParent = document.getElementById('todolist');
	//last child of todolist
	myParent.appendChild(myInput).setAttribute('type', 'text');
	myParent.appendChild(myBr);
	
	myParent.appendChild(myInput).setAttribute('class', 'listitem');
}

var sortItems = function() {
	document.getElementById('displayitems').innerHTML = '';
	
	var myInputsList = new Array();
	
	var inputs = document.getElementsByClassName('listitem');
	
	
	for (index = 0; index < inputs.length; index++) {
		myInputsList[index] = '<span>' + inputs[index].value + '</span><br>';
	}
	var listSorted = myInputsList.sort();
	var listJoined = listSorted.join('');
	document.getElementById('displayitems').innerHTML = listJoined;
}

window.onload = function () {
	var today = new Date();
	
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();
	
	var todayFormatted = todaymm + '/' + todaydd + '/' + todayyyy;
	
	document.getElementById('today').innerHTML = todayFormatted;
	
	document.getElementById('additem').onclick = addItem;
	document.getElementById('sortitems').onclick = sortItems;
}