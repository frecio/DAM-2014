(function () {
    'use strict';

    require.config({
    	baseUrl : '../app/scripts/',

    	paths : {
    		jquery: '../bower_components/jquery/dist/jquery'
    	},

    	shim : {

    	}
    });


    describe('Service module', function(){
    	var srv;

    	beforeEach(function(done){
    		require(['Service'], function(service){
    			srv = service;
    			done();
    		});
    	});

    	describe('#getTweets', function(){
    		it('Add one tweet', function(done){
    			srv.getTweets();
    		});

    	});

    });
})();
