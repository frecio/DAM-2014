$(document).ready(function(){
	"use strict"

	var $textfield = $("#entrada");

	$textfield.val(sessionStorage.getItem("contenido") || "");

	var guardar = function(e){

		sessionStorage.setItem("contenido", this.value);
		localStorage.setItem("contenido", this.value);
	}

	$(document).on("keyup", "#entrada", guardar);


	function handleStorage(event) {

		 event = event || window.event; // support IE8
		 if (event.newValue === null) {
			$textfield.val("");
			sessionStorage.removeItem("contenido");

		} else {
			var contenido = localStorage.getItem("contenido")
			$textfield.val(contenido);
			sessionStorage.setItem("contenido", contenido);
		}
	}

	if(window.addEventListener){
		window.addEventListener('storage', handleStorage, false);
	}else{
		window.attachEvent('storage', handleStorage);
	}

});