define('Events',['quo', 'Controller' ], function($, Controller){
	'use strict';

	console.log('Events module started');

	$(document).on('datachange', Controller, Controller.showLatestTweets);
	$(document).on('click', '.twitter-list li.arrow', Controller.showDetail);
    $(document).on('singleTap', '.twitter-list li.arrow', Controller.showDetail);

});