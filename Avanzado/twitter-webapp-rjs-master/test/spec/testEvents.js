(function () {
    'use strict';

    require.config({
        baseUrl : '../../app/scripts/',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
            'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev'
        },

        shim : {

            handlebars: {
                exports : 'Handlebars'
            },

            'ydn-db': {
                exports : 'ydn'
            }
        }
    });

    describe('Events', function () {
        var evt, ctrl, $;

        beforeEach(function(done){
            require(['Events', 'Controller','jquery'], function(Events, Controller, jQuery){
                evt = Events;
                ctrl = Controller;
                $ = jQuery;

            });
        });


        describe('#datachange event', function () {
            it('Event datachange is fired', function (done) {
                var errTimeout = setTimeout(function(dine){
                    assert(false, 'Event never fired')
                }, 1000);

                $(document).on('datachange', function(){
                    clearTimeout(errTimeout);
                    assert(true);
                    done();
                });

                document.dispatchEvent(new Event('datachange'));
            });

        });
    });
})();