
$(function(){
	'use strict';
	/*
	//3.8.1 Seleciones
	var $divs = $('div.module');
	console.log($divs);

	//3.8.1 3 elemento de myList
	var $li = $("#myList li").eq(2);
	console.log($li[0]);
	$li = $("#myList").find('li').eq(2);
	console.log($li[0]);
	$li = $("#myList li:nth-child(3)");
	console.log($li[0]);
	$li = $("#myListItem");//el mas rápido. No recorre el dom si no que va directamente a por el
	console.log($li[0]);

	//obtener el label asociado al input
	var $input =  $('input.input_text');
	//var $input = $("[name=q]");
	var $label = $input.closest('form')
		.find('label[for="' + $input.attr('name') + '"]');
	console.log($label);

	//obtener cuantos elementos de la pagina estan ocultos
	var $ocultos = $(':hidden');
	console.log($ocultos);

	//Cuantas imagenes tienen el atributo alt
	var $img = $('img[alt]');
	console.log($img);

	//filas impares del cuerpo de una pagina
	var $imp = $('tbody tr:odd')
		.css('background-color','gray');
	console.log($imp);

	*/

	//3.8.2
	//registrar los elementos alt de las img
	var $img = $('img[alt]');
	$img.each(function(idx, elemento){
		console.log(elemento.alt);
		console.log(this.alt);
	});
	//otra forma
	for (var i = $img.length - 1; i >= 0; i--) {
		console.log($img[i]);
	}


	/*
	//buscar el elemento input y añadirle una clase al formulario
	var $input = $('input.input_text');
	var $form = $input.closest('form').addClass('nueva-clase');

	//cambiar el elemento current de una lista
	var $current = $('#myList li.current');
	console.log($current);
	$current.removeClass('current');
	$current.next('#myList li').addClass('current');

	//elegir submit
	var $select = $('select');
	var $formSpecials = $select.closest('form');
	var $submit = $formSpecials.find('input[type=submit]');
	console.log($submit);

	//
	var $slideshowCurrent = $('#slideshow li.current').removeClass('current');
	$('#slideshow li:first-child').addClass('current').siblings().addClass('disabled');
	//$slideshowCurrent.removeClass('current');
	//$primero.addClass(current);
	*/

	//3.8.3
	//Añadir 5 nuevos ítems al final de la lista desordenada #myList
	var items =[];
	for (var index = 4; index >= 0; index--) {
		items.push('<li>List item ' + index + '</li>');
	}

	$(items.join("")).appendTo($('#myList'));

	//remover los impares de la lista
	$('#myList li:even').remove();

	//Añadir otro elemento h2 y otro párrafo al último div.module.
	$('div.module').last().append('<h2>Un nuevo h2</h2><p>Un parrafo nuevo<p>');

	//Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".
	$('select[name=day]').append('<option value="wednesday">Wednesday</option>');

	var opt = new Option('Saturday','saturday');
	$('select[name=day]')[0].options.add(opt);

	//Añadir un nuevo div.module a la página después del último;
	//luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
	var $div = $('div.module').last();

	var $nuevo = $('<div/>',{
		'class' : 'module',
		'id' : 'myModule'
	});

	$nuevo.append($img.first().clone()).insertAfter($div);


});
