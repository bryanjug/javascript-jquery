
var groceryItems = "";  //Global Variable
	
var $ = function (id) {
    return document.getElementById(id);
}

var addItem = function ()
{
    var item = $("item").value;
    
    groceryItems += item + "<br>";
    
    $("msg").innerHTML = groceryItems;
    
    $("item").value = "";
    $("item").focus();   //puts cursor on field
}

var searchItem = function ()
{
    var item = $("item").value;
	
	//case-sensitive by default
	
	var itemLower = item.toLowerCase();
	var groceryItemsLower = groceryItems.toLowerCase();
    
   	var foundStartPos = groceryItemsLower.indexOf(itemLower);
	
	if (foundStartPos >= 0)
	{
		var itemLen = item.length;
		
		var firstPart = groceryItems.substr(0, foundStartPos);
		var middlePart = "<b><span style='color: red;'>" + item + "</span></b>";
		var lastPart =  groceryItems.substr(foundStartPos + itemLen);
		
		$("msg").innerHTML = firstPart + middlePart + lastPart;
		
	}
	else
	{
		$("msg").innerHTML = "Item: '" + item + "' not found!<br><br>" + groceryItems;
	}
               
    $("item").value = "";
    $("item").focus();   //puts cursor on field
}

window.onload = function ()
{
    $("mybutton").onclick = addItem;  //Remember no ()!!
	$("mysearchbutton").onclick = searchItem;  //Remember no ()!!
    $("item").focus();   //puts cursor on field
}