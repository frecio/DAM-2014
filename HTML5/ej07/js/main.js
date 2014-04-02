$(document).ready(function(){
	"use strict"

	var reproductor = document.getElementById("reproductor");
	var rangoVolumen = document.getElementById("volumen");
	reproductor.volume = rangoVolumen.value*0.1;

	var barraProgreso = document.getElementById("progreso");


	var play = function(e){reproductor.play()};

	var pause = function(e){reprouctor.pause()};

	var stop = function(e){
		reproductor.currentTime = 0;
		reprouctor.pause();
	};

	var retroceder = function(e){reproductor.currentTime -= 10};

	var avanzar = function(e){reproductor.currentTime += 10};

	var inicio = function(e){reproductor.currentTime = 0};

	var fin = function(e){
		reproductor.currentTime = reproductor.duration;
		reproductor.pause();
	};

	var fullscreen = function(e){
		if (reproductor.requestFullScreen){
			reproductor.requestFullScreen();
		} else if (reproductor.webkitRequestFullScreen){
			reproductor.webkitRequestFullScreen();
		} else if (reproductor.mozRequestFullScreen){
			reproductor.mozRequestFullScreen();
		}
	};

	var volumen = function(e){reproductor.volume = this.value*0.1;};

	var progreso = function(e){
		barraProgreso.value = reproductor.currentTime/reproductor.duration;
	}


	$(document).on('click', '#play', play);
	$(document).on('click', '#pause',pause);
	$(document).on('click', '#stop',stop);
	$(document).on('click', '#retroceder',retroceder);
	$(document).on('click', '#avanzar',avanzar);
	$(document).on('click', '#inicio',inicio);
	$(document).on('click', '#fin',fin);
	$(document).on('click', '#fullscreen',fullscreen);
	$(document).on('change', '#volumen', volumen);
	$('#reproductor').on('timeupdate', progreso);

});
