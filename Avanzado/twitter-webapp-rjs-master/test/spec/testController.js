(function () {
    'use strict';

    require.config({
        baseUrl : '../../app/scripts/',
        paths : {
            jquery : '../bower_components/jquery/dist/jquery',
            'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev'
        },
        shim : {
            'ydn-db': {
                exports : 'ydn'
            }
        }
    });

    describe('Controller', function () {
        var ctrl, srv, DB, UI;

        beforeEach(function(done){
            require(['Controller', 'Service', 'Data', 'UI'], function(controller, service, data, ui){
                ctrl = controller;
                srv = service;
                DB = data;
                UI = ui;

                sinon.spy(srv, 'getTweets');
                sinon.spy(UI, 'showTweetList');
                done();
            });
        });

        afterEach(function(done){
            srv.getTweets.restore();
            UI.showTweetList.restore();
            done();
        });

        describe('#getTweets', function () {
            it('Get all tweets from Tweeter', function (done) {
                ctrl.getTweetsFromTwitter(function(){
                        assert.isTrue(DB.addTweets).calledOnce;
                        done();
                    },function(){throw error;});
                assert.isTrue(srv.getTweets.calledOnce);
            });
        });

        // describe('#showLatestTweets', function () {
        //     it('Show latest tweets', function (done) {
        //         ctrl.showLatestTweets(function(){
        //                 assert.isTrue(UI.showTweetList).calledOnce;
        //                 done();
        //             },function(){throw error;});
        //         assert.isTrue(srv.getTweets.calledOnce);
        //     });
        // });
    });
})();