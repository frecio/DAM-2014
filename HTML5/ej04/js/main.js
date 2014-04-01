$(document).ready(function(){
	"use strict"

	//Sacar por pantalla que inputs reconoce el navegador
	console.log(Modernizr);
    var $ul = $('#datos');
    $ul.empty();
    $ul.append('<li>TIPOS: </li>');

    for (var tipo in Modernizr.inputtypes){
        $ul.append('<li>Tipo: ' + tipo + ' ----  Valor: ' + Modernizr.inputtypes[tipo] +'</li>');
	}
    $ul.append('<li>VIDEO: </li>');

    for (var codec in Modernizr.video){
        $ul.append('<li>Codec: ' + codec + ' ----  Valor: ' + Modernizr.video[codec] +'</li>');
    }

})