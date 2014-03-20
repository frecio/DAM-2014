$(document).ready(function(){
	'use strict';
	var $ticker = $('#ticker');

	$ticker.data({
		'activo' : true,
		'noticias' : [],
		'noticiaActual': 0

	});

	var mostrarNoticiaNueva = function(data){

		var hora = new Date();
		var mensaje = hora.getHours() + ':' +
			hora.getMinutes() + ':' +
			hora.getSeconds() + ' ' + data;
		$ticker.text(mensaje);
		$ticker.data('noticias').push(mensaje);


	};

	var mostrarAnterior = function(){
		cambiarEstado();
		var noticiaActual = ticker.data('noticiaActual');
		if(noticiaActual > 0){
			var mensaje = ticker.data('noticias')[noticiaActual];
			ticker.data('noticiaActual', ++noticiaActual);
			$ticker.text(mensaje);
		}
	};

	var pedirNoticia = function(){

		$.ajax({
			url : '../servidor/generaContenidos.php',
			dataType : 'text',
			cache : false,
			success : function(data, textStatus, jqXHR){
				mostrarNoticiaNueva(data);

			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			},

		});

	};


	//var activo = true;
	var intervalo = setInterval(pedirNoticia, 1000);

	var cambiarEstado = function(){
		var activo = $ticker.data('activo');
		if(activo){
			$ticker.data('activo', false);
			clearInterval(intervalo);
		}else{
			$ticker.data('activo', true);
			intervalo = setInterval(pedirNoticia, 1000);
		}

	};
	$(document).on('click', 'input[id=detener]',cambiarEstado);



});