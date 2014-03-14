$(function(){

	'use strict';
	var $input = $('input[name=q]');
	var $label = $('label[for=q');
	var $hint = $label.text();


	$input.val($label.text())
		.addClass('hint');
	$label.hide();

	var entrar = function(e){
		var $this = $(this);
		if($input.val() == $hint){
			$(this).removeClass('hint');
			$(this).val("");
		}
	};

	var salir = function(e){
		if ($input.val() === ""){
			$input.val($label.text());
			$input.addClass('hint');
		}

	};

	$(document).on('focus', 'input.input_text', entrar);
	$(document).on('blur', 'input.input_text', salir);

	//ejercicio 5.7.2



});