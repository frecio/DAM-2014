define(
	'FizzBuzz',[],function(){

		var fb = function(n){

			var respuesta = [];

			for (var i = 1; i <= n; i++){
				if (i % 15 == 0) {
					respuesta.push("FizzBuzz");
				} else if (i % 3 == 0) {
					respuesta.push("Fizz");
				} else if (i % 5 == 0) {
					respuesta.push("Buzz");
				} else {
					respuesta.push(i);
				}
			}
			return respuesta.join(" ");
		};

		return{
			fb : fb
		}

	}


);