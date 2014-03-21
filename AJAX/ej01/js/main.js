$(document).ready(function(){
	'use strict';

	//Asignar la direccion actual de la pagina al cuadro de texto del recurso
	$('#recurso').val(document.URL);

	//añadir evento al boton de mostrar contenido

	var mostrarContenido = function(datos){

		$('#contenidos').text(datos);
	};

	var mostrarCabezera = function(datos){
		$('#cabeceras').text(datos);
	};
	var mostrarEstados = function(status, textStatus){
		$('#codigo').text(status + ' ' + textStatus);
	};

	var peticionAjax = function(){

		$.ajax({
			url : $('#recurso').val(),
			dataType : 'text',
			cache : false,
			crossDomanin: true,
			success : function(data, textStatus, jqXHR){
				console.log('exito');
				mostrarContenido(data);
				mostrarCabezera(jqXHR.getAllResponseHeaders());
				mostrarEstados(jqXHR.status , jqXHR.statusText);

			},
			error : function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			},

		});
	};

	$(document).on('click', 'input[value="Mostrar contenidos"]', peticionAjax);
	//$(document).on('submit', 'form', peticionAjax);


});