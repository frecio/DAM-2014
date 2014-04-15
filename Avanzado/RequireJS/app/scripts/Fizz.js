'use strict';

define(
	'Fizz',[],function(){

		var isFizz = function(n){
			return (n%3 === 0);
		};

		var writeFizz = function(){
				return 'Fizz';
		};

		return{
			isFizz : isFizz,
			writeFizz : writeFizz
		};

	}


);