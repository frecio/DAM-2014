$(function(){
	'use strict';

	var $boxes = $('.box');
	/*
	setInterval(function(){
		$boxes.animate({
			'height' : '50px',
			'width' : '50px',
			'color' : 'yellow',
			'background-color' : 'blue',
			'font-size' : '18px',
			'left' : '100%'
		}, 1000, function(){
		console.log('fin de la animación');
		});
	}, 1000);
	*/

	var $width = $(document).width();

	$boxes.css({
		'height' : '50px',
		'width' : '50px',
		'color' : 'yellow',
		'background-color' : 'blue',
		'-webkit-transform' : 'translateX(' + ($width - 100) + 'px',
		'-webkit-transition-property' : 'all',
		'-webkit-transition-duration' : '10s'
	});

});