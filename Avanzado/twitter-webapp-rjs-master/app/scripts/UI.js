define('UI',['quo', 'handlebars'],function($, hb){
	'use strict';

	console.log('UI started');

	var showTweetList = function(tweets, success, error){
		var $list = $('#twitter-list');

		var	list = $('#list-tpl').html();
		var	template = hb.compile(list);

		var	html = template({tweets : tweets});
		$list.html(html);
		if (success){
			success();
		}
	};

	return{
		showTweetList : showTweetList
	};
});