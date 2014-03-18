$(function(){
    'use strict';
	var $liMenu = $('#nav>li');



	function desplegar(e){
        var $this = $(this);
        $(this).find('ul').show();
	}

    function recoger(e){
        var $this = $(this);
        $(this).find('ul').hide();
    }

	$liMenu.hover(desplegar, recoger);
	//$(document).hover('#nav>li', desplegar, recoger);
	console.log($liMenu);
});