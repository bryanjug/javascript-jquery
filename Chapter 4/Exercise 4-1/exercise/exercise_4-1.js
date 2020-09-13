var myTransactions;

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function() {
	var myTranStr = '';
	var myTran = '';
	
	var myItem = $('item').value;
	var myAmount = $('amount').value;
	
	var myTran = myItem + ':' + myAmount;
	
	myTransactions[myTransactions.length] = myTran;
	
	for(index in myTransactions) {
		myTranStr += myTransactions[index] + '<br>';
	}
	
	$('msg').innerHTML = myTranStr;
	
	$('item').value = '';
	$('amount').value = '';
}

window.onload = function () {
    $("addbutton").onclick = processInfo;
    myTransactions = new Array();
}