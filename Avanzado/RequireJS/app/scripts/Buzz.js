'use strict';

define(
	'Buzz',[],function(){

		var isBuzz = function(n){
			return (n%5 === 0);
		};

		var writeBuzz = function(){
				return 'Buzz';
		};

		return{
			isBuzz : isBuzz,
			writeBuzz : writeBuzz
		};

	}


);