function init(){
//add your javascrip between these two lines of code
 	function myEventFunction (){
 		var entryinput = document.getElementById('entryinput');
 		alert ('Gauri Kumari:' + entryinput);
 	}

 	var entryinput = document.getElementById('entryinput');
 	entryinput.addEventListener ('click', myEventFunction);





window.addEventListener('load', init);