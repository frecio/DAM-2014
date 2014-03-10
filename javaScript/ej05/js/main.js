(function(){
	"use strict";

	//Numero de enlaces de la pagina
	var enlaces = document.getElementsByTagName('a');
	console.log(enlaces.length);

	enlaces = document.querySelectorAll('a');
	console.log(enlaces.length);

	console.log(enlaces);

	//El penultimo enlace de la lista
	var elPenultimo = enlaces[enlaces.length-2];
	console.log(elPenultimo.href);
	/*
	elPenultimo = document.querySelectorAll('p a:nth-last-of-type(2)');
	console.log(elPenultimo.href);*/

	//obtener los enlaces que apunten a http://prueba/
	var count=0;
	for (var i = enlaces.length-1; i>=0; i--);{
		if (enlaces[i].href === "http://prueba/"){
			count++;
		}
	}
	console.log(count);

	var enlaces2 = document.querySelectorAll('a:href = http://prueba');
	console.log(enlaces2.length);

	//Numero de enlaces del tercer parrafo
	var parrafos = querySelectorAll('body > p');
	if(parrafos.length >=3){
		enlaces = parrafos[2].querySelectorAll('a');
		console.log(enlaces.length);
	}

	enlaces = document.querySelectorAll('body > p:nth-last-of-type a');
})();