var $ = function (id) {
		return document.getElementById(id);
}
	
var addClass = function()
{
	$("paragraph").setAttribute("class", "redtext");
}
	
window.onload = function ()
{
	$("mybutton").onclick = addClass;
}