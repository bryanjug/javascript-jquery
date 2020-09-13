
// An Array is a named-list.  Conceptually it is formatted like this:
//
//  myTransactions = ('firsitem', 'seconditem', 'thirditem')
//
//  ... where firstitem, etc. are call elements
//        Note: I made up the names of the element values, they can
//        be named othewise (e.g. myTransactions = ('myfood', 'mygas', 'mycar')
//
//  Each element in an array can be referenced with an index position
//  number, staring with 0 for the first element
//
//  So myTransactions[1] is equal to 'seconditem', for example
//
//  See https://www.w3schools.com/js/js_arrays.asp  for more examples


//for in loop
var myTransactions;  //global

var $ = function (id) {
    return document.getElementById(id);
}

var processInfo = function()
{
	var myTranStr = "";
	var myTran = "";

	var myItem = $("item").value;
	var myAmount = $("amount").value;

	var myTran = myItem + ":" + myAmount;

	myTransactions[myTransactions.length] = myTran;
	
	for(index in myTransactions)
	{
		myTranStr += myTransactions[index] + "<br>";
	}

	$("msg").innerHTML = myTranStr;

	$("item").value = "";
	$("amount").value = "";
}

window.onload = function () {
    $("addbutton").onclick = processInfo;
    myTransactions = new Array();
}



