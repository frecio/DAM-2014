window.$ = Element.prototype.$ = function(selector){
		var that = (this instanceof Element) ? this : document;
		var elements = that.querySelectorAll(selector);
		return (elements.length === 1) ? elements[0] : elements;
	};

var anade = (function(){
	"use strict";

	var list = $("#lista"),
		count = lista.children.length;

	var mostrarTexto = function(){
		console.log(this);
	};

	/*for (var i = lis.length - 1; i >= 0; i--) {
			lis[i].addEventListener('click', mostrarTexto);
	*/
	list.addEventListener.addEventListener('click', mostrarTexto);

	var anade = function(){

		var listItem = document.createElement("li");
		listItem.innerText = "Elemento " + (++count);

		list.appendChild(listItem);
	};

	return anade;

})();