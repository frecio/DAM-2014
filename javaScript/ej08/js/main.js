window.$ = Element.prototype.$ = function(selector){
		var that = (this instanceof Element) ? this : document;
		var elements = that.querySelectorAll(selector);
		return (elements.length === 1) ? elements[0] : elements;
	};

var expresiones = (function(){
	"use strict";

	//formato fechas
	var fecha = /(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/\d{4}/;

	console.log(fecha.test("Naci en Donosti el 05/04/1982"));
	console.log(fecha.test("Naci en Donosti el 30/04/1982"));
	console.log(fecha.test("Naci en Donosti el 99/04/1982"));
	console.log(fecha.test("Naci en Donosti el 00/04/1982"));

	console.log("Naci en Donosti el 10/04/1982".match(fecha));

	//formato direccion email
	var email = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

	console.log(email.test("patxi.lecuona@tralari.com"));
	console.log(email.test("a@a.es"));
	console.log(email.test("@tralari.com"));
	console.log(email.test(".lecuona@tralari.com"));
	console.log(email.test("patxi.lecuona@tralari.com"));

	//Eliminar las etiquetas de javaScript
	var tags = /<\s*?script[\s\S]*?>,*?<\/[\s\S]*?script[\s\S]*?>/ig;
})();