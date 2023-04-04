function init(){
//add your javascrip between these two lines of code
 	function myEventFunction (){
 		var entryinput = document.getElementById('entryinput');
 		alert ('Gauri Kumari:' + entryinput);
 	}

 	var entrybutton = document.getElementById('entrybutton');
 	entrybutton.addEventListener ('click', myEventFunction);





window.addEventListener('load', init);