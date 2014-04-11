$(function () {
    "use strict";
    // Obtener los elementos del DOM
    var $boton = $('#enviar');
    var $text = $('#input');
    var $status = $('#status');

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;


    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    };

    // 1. Al abrir la conexión, solicitar el nick.
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.onopen = function(e){
        $text.attr('disabled', false);
        $text.attr('placeholder', 'Introduce tu nick');
        console.log('conectado');

    };

    socket.onclose = function(e){
        console.log('WebSocket cerrado desde el servidor')
    };

    socket.onerror = function(e){
        console.log('Error al conectar con el servidor');
    };

    socket.onmessage = function(e){
        var data = JSON.parse(e.data);

        switch (data.type){
            case 'color':
                myColor = data.data;
                $status.css('color', myColor);
                $status.text(myName);
                break;
            case 'history':
                data = JSON.parse(e.data);
                var historial = data.data;
                //console.log(historial);
                for (var i in historial){
                    console.log(historial[i]);
                    addMessage(historial[i].author, historial[i].message,
                        historial[i].color, new Date(historial[i].time));
                };
                break;
            default:
                data = JSON.parse(e.data);
                var mensaje = data.data;

                addMessage(mensaje.author, mensaje.message,
                    mensaje.color, new Date(mensaje.time));
        }
    };

    var enviar = function(e){
        if ($text.val()!= ''){
            console.log('entrada no vacia');

            socket.send($text.val());
            $text.val('');

            if (!myName){
                $text.attr('placeholder', '');
                myName = $text.val();
                console.log(myName);
            }else{

            }


        }else{
            console.log('entrada vacia');
        }


    }

    $boton.on('click', enviar);



});