function init(){
//add your javascrip between these two lines of code
	var entryinput = document.getElementById('entryinput');
 	function myEventFunction (){
 		alert ('Gauri Kumari:' + entryinput);
 	}

 	var entrybutton = document.getElementById('entrybutton');
 	entrybutton.addEventListener ('click', myEventFunction);





window.addEventListener('load', init);