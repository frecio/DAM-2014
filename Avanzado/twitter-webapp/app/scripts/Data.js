'use strict';
define('Data',['ydn-db'],function(ydn){

	var dbName = 'db-twitter';
	var tweetStore = 'store-tweets';

	var db = new ydn.db.Storage(dbName);

	var addTweet = function(tweet, successCalback, errorCalback){
		var req = db.put({name:tweetStore, keyPath:'id'}, tweet);
		req.done(successCalback);
		req.fail(errorCalback);
	};

	var addTweets = function(tweets, successCalback, errorCalback){
		var req = db.put({name:tweetStore, keyPath:'id'}, tweets);
		req.done(successCalback);
		req.fail(errorCalback);
	};

	var getTweets = function(successCalback, errorCalback){
		var req = db.from(tweetStore);
		req.done(successCalback);
		req.fail(errorCalback);
	};

	var getTweet = function(id, successCalback, errorCalback){
		var req = db.get(tweetStore, id);
		req.done(successCalback);
		req.fail(errorCalback);
	};

	var deleteTweet = function(id, successCalback, errorCalback){
		var req = db.remove(tweetStore, id);
		req.done(successCalback);
		req.fail(errorCalback);
	};

	return{
		addTweet : addTweet,
		addTweets : addTweets,
		getTweets : getTweets,
		getTweet : getTweet,
		deleteTweet : deleteTweet
	};
});