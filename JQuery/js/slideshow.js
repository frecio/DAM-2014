$(document).ready(function(){
	"use strict";


	var escribirMensaje = function($slideElement, oldIndex, newIndex){
		console.log('Cambiando de la foto ' + oldIndex + ' a la ' + newIndex);
	};
	/*
	var $slider = $('#slideshow').bxSlider({
		'mode': 'fade',
		'controls': false,
		'pager': false,
		'onSlideNext': escribirMensaje,
		'onSlidePrev': escribirMensaje
	});*/

	var $slider = $('#slideshow').bxSlider();

	$(".fancybox").fancybox();

	var loadPrev = function (e){
		e.preventDefault();
		$slider.goToPrevSlide();
	};

	var loadNext = function (e){
		e.preventDefault();
		$slider.goToNextSlide();
	};

	$(document).on('click','#previous', loadPrev);
	$(document).on('click','#next', loadNext);
});