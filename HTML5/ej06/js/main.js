$(document).ready(function(){
	"use strict"

	var $ul = $('ul');
	var $lis = $('.user');

	//mostrar los atributos por pantalla
	$lis.each(function(){
		/*//jQuery
		var $this = $(this);
		console.log('Nombre: ' + $this.data('name'));
		console.log('Ciudad: ' + $this.data('city'));
		console.log('Lenguaje: ' + $this.data('lang'));
		console.log('Comida: ' + $this.data('food'));
		console.log('Delete: ' + $this.data('delete'));
		*/

		//javaScript
		console.log('Nombre: ' + this.dataset.name);
		console.log('Ciudad: ' + this.dataset.city);
		console.log('Lenguaje: ' + this.dataset.lang);
		console.log('Comida: ' + this.dataset.food);
		console.log('Delete: ' + this.dataset.delete);

	});

	//Cambiar lenguaje
	$lis.each(function(){
		var $this = $(this);

		if ($this.data('lang') === 'es'){
			$this.data('lang', 'es_ES');
			console.log('Nuevo lenguaje para  ' + $this.data('name') + ' ' + $this.data('lang'));
		}

	});

	//eliminarlos de la lista
	$lis.each(function(){
		var $this = $(this);

		if ($this.data('delete')){
			$this.remove();
		}
	});

	console.log("Nueva Lista");
	$lis.each(function(){
		var $this= $(this);
		console.log('Nombre: ' + $this.data('name'));
	});


});