define(['Controller', 'Data', 'Events', 'lungo', 'quo'], function(Controller, Data, Events, Lungo, $) {
    'use strict';

    console.log('App started');

    var init = function(){
        // Init Lungo
        Lungo.init({
            name: 'TwitterApp'
        });

        // Init Data module
        //Data.init();

        Controller.showLatestTweets();
        Controller.getTweetsFromTwitter();
    };

    $(function(){
        init();
    });
});