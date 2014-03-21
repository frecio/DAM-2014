$(document).ready(function(){
    'use sctrict';
    var $nombre = $('#login').val();

    var mostrarRespuesta = function(datos){
    	var respuesta = JSON.parse(datos);
    	if ((respuesta.disponible) && (respuesta.disponible==='si')){
    		console.log('si');
    	}else if(respuesta.alternativas){
    		$lista = $(<ul/>)
    		var lis = [];
    		for (var i = respuesta.alternativas.length - 1; i >= 0; i--) {
    			var $li = $(<li/>,{
    				respuesta.alternativas[i]
    			})

    			lis.push($li[0]);
    		};
    		$lista.append(lis.join(''));
    		$('#disponibilidad').append($lista),
    	}
    };

    var peticion = function(e){
        mostrarRespuesta('{"disponible": "no"}');
        /*
        $.ajax({
            url : '../servidor/compruebaDisponibilidadJSON.php',
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
        });*/
    };


    $(document).on('click','#comprobar', peticion);




});
