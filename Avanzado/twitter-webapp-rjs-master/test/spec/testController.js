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
        var ctrl, srv, DB;

        beforeEach(function(done){
            require(['Controller', 'Service', 'Data'], function(controller, service, data){
                ctrl = controller;
                srv = service;
                DB = data;

                sinon.spy(srv, 'getTweets');
                done();
            });
        });

        afterEach(function(done){
            srv.getTweets.restore();
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
    });
})();