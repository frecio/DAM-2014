define('Events',['quo', 'Controller' ], function($, Controller){
	'use strict';

	console.log('Events module started');

	$(document).on('datachange', Controller, Controller.showLatestTweets);

});