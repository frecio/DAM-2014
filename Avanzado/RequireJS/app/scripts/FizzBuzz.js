'use strict';

define(
	'FizzBuzz',['Fizz', 'Buzz'],function(Fizz, Buzz){

		var fb = function(n){

			var respuesta = [];

			for (var i = 1; i <= n; i++){
				if (Fizz.isFizz(i) && Buzz.isBuzz(i)) {
					respuesta.push(Fizz.writeFizz() + Buzz.writeBuzz());
				} else if (Fizz.isFizz(i)) {
					respuesta.push(Fizz.writeFizz());
				} else if (Buzz.isBuzz(i)) {
					respuesta.push(Buzz.writeBuzz());
				} else {
					respuesta.push(i);
				}
			}
			return respuesta.join(' ');
		};

		return{
			fb : fb
		};

	}


);