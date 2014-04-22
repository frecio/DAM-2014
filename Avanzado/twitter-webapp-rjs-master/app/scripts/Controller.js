'use strict';
define('Controller', ['Data', 'Service'], function(DB, srv){

	var getTweetsFromTwitter = function(){
		srv.getTweets({}, proccessTweets, error);
	};

	var proccessTweets = function(data){
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
				console.log(tweet.created_at);
				tweets.push(tweet);
			}

			DB.addTweets(tweets);
		}

	};

	var error = function(error){

	};

	return{
		getTweetsFromTwitter : getTweetsFromTwitter
	};
});