var comprobarString = (function(){
	"use strict";

	var comprobarMayusculas = function(cadena){
		return cadena && cadena === cadena.toUpperCase() && "Todo mayusculas"||"";
	};

	var comprobarMinusculas = function(cadena){
		return cadena && cadena === cadena.toLowerCase() && "Todo minusculas"||"";
	};

	var comprobarString = function(cadena){
		return  comprobarMayusculas(cadena) || comprobarMinusculas(cadena) || "Mezcla" ;
	};

	return comprobarString;
})();

console.log(comprobarString("AY"));
console.log(comprobarString("ay"));
console.log(comprobarString("Ay"));
console.log(comprobarString("666"));
console.log(comprobarString(""));

