(function(){
    'use strict';

        var $progress = $('#progress');

    $(document).on('change', 'input', function(e){
        var $this = $(this);
        if ($this.value!== '')
            $progress.val($progress.val()+1);

    });


    Modernizr.load({
        test:Modernizr.input.date,
        nope:'libs/html5Formsjs-master/shared/js/html5Forms.js'
    });



    Modernizr.load({
        test:Modernizr.input.color,
        nope:'libs/html5Formsjs-master/shared/js/html5Forms.js'
    });
})();

