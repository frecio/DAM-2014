$(document).ready(function(){
	'use strict';
	var $ticker = $('#ticker');

	$ticker.data({
		'activo' : true,
		'noticias' : [],
		'noticiaActual': 0,
		'intervalo': {}//////////////////

	});



	var guardarNoticia = function(noticia){
		$ticker.data('noticiaActual', $ticker.data('noticias').length);
		$ticker.data('noticias').push(noticia);
		console.log($ticker.data('noticias').length);

	};

	var mostrarNoticiaNueva = function(data){

		var hora = new Date();
		var mensaje = hora.getHours() + ':' +
			hora.getMinutes() + ':' +
			hora.getSeconds() + ' ' + data;
		$ticker.text(mensaje);
		$ticker.css('background-color', 'yellow');
		guardarNoticia(mensaje);



	};

	var cambiarEstado = function(){
		var activo = $ticker.data('activo');
		if(activo){
			$ticker.data('activo', false);
			//clearInterval(intervalo);
			clearInterval($ticker.data('intervalo'));
			$ticker.css('background-color', '#FAFAFA');
		}else{
			$ticker.data('activo', true);
			//intervalo = setInterval(pedirNoticia, 1000);
			$ticker.data('intervalo',setInterval(pedirNoticia, 1000));
		}

	};


	var mostrarAnterior = function(){
		if ($ticker.data('activo')){
			cambiarEstado();
		}
		var noticiaActual = $ticker.data('noticiaActual');
		if(noticiaActual > 0){
			var mensaje = $ticker.data('noticias')[--noticiaActual];
			$ticker.data('noticiaActual', noticiaActual);
			$ticker.text(mensaje);
		}
	};

	var mostrarSiguiente = function(){
		if ($ticker.data('activo')){
			cambiarEstado();
		}
		var noticiaActual = $ticker.data('noticiaActual');
		if(noticiaActual < $ticker.data('noticias').length-1){
			var mensaje = $ticker.data('noticias')[++noticiaActual];
			$ticker.data('noticiaActual', noticiaActual);
			$ticker.text(mensaje);
		}
	};

	var pedirNoticia = function(){
		mostrarNoticiaNueva("noticia");
/*
		$.ajax({
			//url : '../servidor/generaContenidos.php',
			url : 'servidor/generaContenidos.php',
			dataType : 'text',
			cache : false,
			success : function(data, textStatus, jqXHR){
				mostrarNoticiaNueva(data);

			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			},

		});*/
	};


	//var activo = true;
	//var intervalo = setInterval(pedirNoticia, 1000);
	$ticker.data('intervalo', setInterval(pedirNoticia, 1000));
	console.log($ticker.data('intervalo'));

	$(document).on('click', '#detener',cambiarEstado);
	$(document).on('click', '#anterior',mostrarAnterior);
	$(document).on('click', '#siguiente',mostrarSiguiente);

});