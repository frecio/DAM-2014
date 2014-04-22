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
    	var srv, $;


    	beforeEach(function(done){

            require(['Service', 'jquery'], function(service, jquery){
    			srv = service;
                $ = jquery;

                var spy = sinon.spy($,'ajax');

    			done();
    		});

    	});

        afterEach(function(){
            $.ajax.restore();
        });



    	describe('#getTweets', function(){
            it('$.ajax has been called', function(done){
                srv.getTweets();
                assert.isTrue($.ajax.calledOnce);
                assert.equal('/app/data/tweets.json', $.ajax.firstCall.args[0].url);
                done();
            });

    		it('Get all tweets', function(done){
    			srv.getTweets({
                    apiKey : ''
                },
                function (tweets){
                    console.log(tweets);
                    if(tweets && tweets.statuses && tweets.statuses.length === 100){
                        done();
                    }else{
                        throw 'No se han obtenido los test';
                    }

                },
                function(error){
                    throw error;
                });
                //done();
    		});

    	});

    });
})();