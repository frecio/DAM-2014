'use strict';
define('Service', ['jquery'], function($){

	var getTweets = function(config, succes, error){
		$.ajax({
			url : '/app/data/tweets.json',
			dataType : 'JSON',
			succes : succes,
			error : error
		});
	};

	return{
		getTweets : getTweets
	};
});