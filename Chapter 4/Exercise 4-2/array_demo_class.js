
var myMembersStr = "";

var $ = function (id) {
	return document.getElementById(id);
}

var processNames = function ()
{
	var myMembers = document.getElementsByClassName('member');
	
	
	//Wrong Way - myMembers is a nodeList, not an actual Array
	
	//for(index in myMembers)
	//{
	//	myMembersStr += myMembers[index].value + "<br>";
	//}
	
	
	
	
	// Right Way - nodeLists have elements and index positions like an Array
	
	var myMembersArray = new Array();
	
	for(cntr = 0; cntr < myMembers.length; cntr++)
	{
		myMembersArray[cntr] = myMembers[cntr].value;
	}
	
	myMembersArray.sort();

	myMembersStr = myMembersArray.join("<br>");
	
	$("msg").innerHTML = myMembersStr;

}

window.onload = function ()
{
	$("mybutton").onclick = processNames;  //Remember no ()!!
}

