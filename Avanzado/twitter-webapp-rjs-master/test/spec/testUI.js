(function () {
    'use strict';

    require.config({
        baseUrl : '../../app/scripts/',
        paths : {
            jquery : '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
            'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev',

        },
        shim : {
            'ydn-db': {
                exports : 'ydn'
            },

            handlebars: {
                exports : 'Handlebars'
            }
        }
    });

    describe('UI', function () {
        var ui, DB, $, Handlebars;

        beforeEach(function(done){
            require(['UI', 'Data', 'jquery', 'handlebars'], function(UI, data, jquery, handlebars){
                ui = UI;
                DB = data;
                $ = jquery;
                Handlebars = handlebars;

                sinon.spy(ui, 'showTweetList');
                done();

            });
        });

         afterEach(function(done){
            ui.showTweetList.restore();
            done();
        });

        describe('#showTweetList', function () {
            it('show one tweets', function (done) {
                var tweet = {
                    id : '428415326124908544',
                    text : 'blablabla'
                };

                ui.showTweetList([tweet], function(){} );
                assert.isTrue(ui.showTweetList.calledOnce);
                done();
            });

            it('show all tweets', function (done) {


                DB.getTweets(
                    function(tweets){
                        ui.showTweetList(
                            tweets,
                            function(){
                                var $list = $('#twitter-list');
                                assert.equal(100, $list.children().length);
                                done();
                            },
                            function(){console.log('error showTweetList');});
                    },
                    function(e){
                        console.log('error DB.getTweets');
                        console.log(e);
                    }
                );

            });
        });
    });
})();