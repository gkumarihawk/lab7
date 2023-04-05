function init(){
//add your javascript between these two lines of code
	var entryinput = document.getElementById('entryinput');
	var textoutput = document.getElementById('textoutput');
 	var entrybutton = document.getElementById('entrybutton');

 	entrybutton.addEventListener('click', function(){
  		alert("Gauri Kumari:" + entryinput.value); 	
 	 	textoutput.innerHTML = entryinput.value;

 	});
}
window.addEventListener('load', init);
