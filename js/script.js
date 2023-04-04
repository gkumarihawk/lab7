function init(){
//add your javascript between these two lines of code
	var entryinput = document.getElementById('entryinput');
	
 	function myEventFunction (){
 		var userInput = entryinput.value;
 		alert ('Gauri Kumari:' + userInput);
 	}

 	var entrybutton = document.getElementById('entrybutton');
 	entrybutton.addEventListener ('click', myEventFunction);

 	entrybutton.addEventListener('click', function(){
 	var textoutput = document.getElementById('textoutput');
 	textoutput.innerHTML = userInput;

 	});



window.addEventListener('load', init);