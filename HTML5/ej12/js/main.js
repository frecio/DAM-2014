"use strict"

var escribirDatos = function(e){


}


var llamarWorker =  function(e){

	var number = document.getElementById('numero').value;

	if (!isNaN(number)){
		var worker = new Worker('worker.js');
		worker.postMessage(JSON.stringify({"number" : number}));
		worker.addEventListener('message', escribirDatos);
	}



}
$(document).on('submit', 'form', llamarWorker);