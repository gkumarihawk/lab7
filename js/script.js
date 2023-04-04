function init(){
//add your javascrip between these two lines of code
	var entryinput = document.getElementById('entryinput');
	var userInput = entryinput.value;
 	function myEventFunction (){
 		alert ('Gauri Kumari:' + userInput);
 	}

 	var entrybutton = document.getElementById('entrybutton');
 	entrybutton.addEventListener ('click', myEventFunction);





window.addEventListener('load', init);