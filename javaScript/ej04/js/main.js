var isPalindromo = (function(){
	"use strict";

	var isPalindromo = function(texto){
		texto = texto.trim().replace(/ /gi, "").toLowerCase();
		var pal = texto.split("").reverse().join("");

		return pal===texto;
	};

	return isPalindromo;


})();

console.log(isPalindromo("radar"));
console.log(isPalindromo("palindromo"));
console.log(isPalindromo("Radar"));