(function(){
    'use strict';

    var worker = new Worker('js/myworker.js');


    var escribirResultado= function(evt){
        var nums=  $('#primos').text();
        $('#primos').text('primos:' + nums +" "+ evt.data+" ");
    };

    var obtenerPrimos = function(){
         $('#primos').text("");
        if(Modernizr.webworkers) {
            var number =  $('#numero').val();
            if (number){
                worker.postMessage({'num': number});
            }
        }
        else {
            console.log('El explorador NO soporta Web workers');
        }
    };


    worker.addEventListener('message', escribirResultado, false);

    $(document).on('click', '#calcular', obtenerPrimos);

})();