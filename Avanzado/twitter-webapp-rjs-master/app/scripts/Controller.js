'use strict';
define('Controller', ['Data', 'Service'], function(DB, srv){

	var getTweetsFromTwitter = function(successCallBack, errorCallBack){
		srv.getTweets({}, function(data){proccessTweets(data, successCallBack, errorCallBack);}, error);
	};

	var proccessTweets = function(data, success, error){
		var tweets = [];

		if(data && data.statuses && data.statuses.length >0){
			for (var i = data.statuses.length - 1; i >= 0; i--) {
				var tweet = {};
				tweet.id = data.statuses[i].id_str;
				tweet.created_at = new Date(data.statuses[i].created_at).getTime();
				tweet.text = data.statuses[i].text;
				tweet.user ={};
				tweet.user.name = data.statuses[i].user.name;
				tweet.user.profile_image_url = data.statuses[i].user.profile_image_url;
				tweet.user.id_str = data.statuses[i].user.id_str;
				tweets.push(tweet);
			}

			DB.addTweets(tweets, success, error);
		}

	};

	var error = function(error){

	};

	return{
		getTweetsFromTwitter : getTweetsFromTwitter
	};
});