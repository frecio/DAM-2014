/* global describe, it */

(function () {
    'use strict';

    require.config({
    	baseUrl : '../app/scripts/',

    	paths : {
    		'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev'
    	},

    	shim : {
    		'ydn-db':{
    			exports : 'ydn'
    		}
    	}
    });


    describe('DataBase module', function(){
    	var DB;

    	beforeEach(function(done){
    		require(['Data'], function(data){
    			DB = data;
    			done();
    		});
    	});

    	describe('adding tweets', function(){
    		it('add a tweet', function(done){
    			DB.addTweet({'id':1223132, 'text' : 'tweettwett'},
    				function(){done();},function(error){throw error;});
    		});
    		it('add some tweets', function(done){
    			var tweets =[
					{'id':456546, 'text' : 'tweettwett'},
					{'id':987987, 'text' : 'tweettwett'},
					{'id':867567, 'text' : 'tweettwett'}
    			];
    			DB.addTweets(tweets,
    				function(){done();},function(error){throw error;});
    		});
    	});

    	describe('getting tweets', function(){
    		it('get all tweets', function(done){
    			DB.getTweets(
    				function(record){
    					if (record){
    						assert.strictEqual(record.id, 1223132);
    					}else{
    						assert.isUndefined(record);
    					}
    					done();},
    				function(error){throw error;});
    		});
    		it('get a tweet with id = 1223132', function(done){
    			DB.getTweet(1223132,
    				function(record){
    					if (record){
    						assert.strictEqual(record.id, 1223132);
    					}else{
    						assert.isUndefined(record);
    					}
    					done();},
    				function(error){throw error;});
    		});

    		it('get a not existing tweet', function(done){
    			DB.getTweet(12231,
    				function(record){
    					if (record){
    						assert.strictEqual(record.id, 12231);
    					}else{
    						assert.isUndefined(record, "tweet doesn't exist");
    					}
    					done();},
    				function(error){throw error;});
    		});
    	});

    	describe('deletting tweets', function(){
    		it('delete a tweet', function(done){
    			DB.deleteTweet(1223132,
    				function(count){
    					assert.isNumber(count);
    					assert.strictEqual(count, 1);
    					done();},
    				function(error){throw error;});
    		});
    		it('delete a not existing tweet ', function(done){
    			DB.deleteTweet(122313,
    				function(count){
    					assert.isNumber(count);
    					assert.strictEqual(count, 0);
    					done();},
    				function(error){throw error;});
    		});
    	});
    });
})();
