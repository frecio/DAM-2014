$(document).ready(function(){
    'use sctrict';
    var $nombre = $('#login').val();
    $disponible = $('#disponibilidad');

    var mostrarRespuesta = function(datos){
        var respuesta = datos;
        $disponible.empty();

        if ((respuesta.disponible) && (respuesta.disponible === 'si')){
            $disponible.text('Nombre disponible');
        }else if(respuesta.alternativas){
            $lista = $('<ul/>');
            var lis = [];
            lis.push('<p>Nombre no disponible. Alternativas:</p>');
            for (var i = respuesta.alternativas.length - 1; i >= 0; i--) {
                var li ='<li>'+ respuesta.alternativas[i] +'</li>';
                lis.push(li);
            }

            $lista.append(lis.join(''));
            $disponible.append($lista);
        }
    };

    var peticion = function(e){
        //mostrarRespuesta('{"disponible": "no"}');

        $.ajax({
            url : '../servidor/compruebaDisponibilidadJSON.php',
            type : 'POST',
            data : $nombre,
            dataType: 'JSON',
            cache: false,
            success : function(data, textStatus,jqXHR){
                mostrarRespuesta(data);
                console.log(data);
            },
            error : function(jqXHR, textStatus, errorThrow){
                console.log(errorThrow);
            }
        });
    };


    $(document).on('click','#comprobar', peticion);




});
