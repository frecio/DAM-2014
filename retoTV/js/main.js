$(document).ready(function(){
	"use strict";

    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction ||
                window.webkitIDBTransaction || window.msIDBTransaction;


    var programasdb = null;

    var onerror = function(e) {
        console.log(e);
    };

    var abrirBD =function(){
        var version = 1;
        var request = indexedDB.open("programas", version);

        request.onupgradeneeded = function(e) {
            programasdb = e.target.result;
            var db = programasdb;
            if(db.objectStoreNames.contains("programas"))
                    db.deleteObjectStore("programas");

            var store = db.createObjectStore("programas",
                            { keyPath: "id" });
        };

        request.onerror = onerror;

        request.onsuccess = function(e) {
            programasdb = e.target.result;
            var db = programasdb;
            getProgramsServer();
        };

    };

    var addProgram = function(programa){

        var db = programasdb;

        var transaction = db.transaction(["programas"], "readwrite");
        var store = transaction.objectStore("programas");

        var request = store.put(programa);

        request.onsuccess = function(e) {
            console.log("Programa añadido");
            empezarJuego();
        };

        request.onerror = function(e) {
            console.log("Error adding: ", e);
        };

    };

    var mostrarConcursante = function(numero){

        var db = programasdb;

        var transaction = db.transaction(["programas"]);
        var store = transaction.objectStore("programas");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result.value;
            console.log(result);
            var concursante = result.players[numero];
            dibujarConcursante(concursante);

        };

        cursorRequest.onerror = onerror;

    };

    var mostrarReto = function(concursante, numero){

        var db = programasdb;

        var transaction = db.transaction(["programas"]);
        var store = transaction.objectStore("programas");

        var cursorRequest = store.openCursor();

        cursorRequest.onsuccess = function(e) {
            var result = e.target.result.value;
            console.log(result);
            var reto = result.players[concursante].challenges[numero];
            dibujarReto(reto);

        };

        cursorRequest.onerror = onerror;

    };


    //Pedir al servidor los programas
    var getProgramsServer = function(){
        $.ajax({
            url : 'data/show.json',
            type : 'GET',
            dataType : 'json',
            cache : false,
            success : function(data){
                console.log(data);
                //guardarProgramas(data);
                addProgram(data);
            },
            error : function(jqXHR, textStatus, errorThrow){
                //alert(errorThrow);
                console.log(errorThrow);
            }
        });
    };

    var dibujarConcursante = function(concursante){
        var $jugador = $('#concursante');
        var $descripcion = $('#descripcionConcursante');

        //vaciar contenido anterior
        $jugador.html('');

        var $imagen = $('<img/>',{
            'src' : concursante.player.photo
        });

        var $datos = $('<p/>');
        $datos.text(concursante.player.name + ', ' + concursante.player.age + ' años.');

        var $descripcion = $('<p/>');
        $descripcion.text(concursante.player.description);

        $jugador.append($imagen);
        $jugador.append($datos);
        $jugador.append($descripcion);

    };

    var dibujarReto = function(reto){
        var $reto = $('#reto');

        //añado la solucion como atributo data xa obtener directamente el valor al
        //comprobar si el jugador ha elegido la opción acertada
        $reto.data('selected', reto.selected);



        //dibujar articulos
        dibujarArticulo(reto.option1, 1);
        dibujarArticulo(reto.option2, 2);

        //dibujar mapa del reto
        var $mapa = $('#mapa');
        //para poder cargar luego la posicion en el mapa

        $mapa.data('latitude', reto.place.latitude);
        $mapa.data('longitude', reto.place.longitude);
        $mapa.data('address', reto.place.address);
        if (Modernizr.geolocation){
            navigator.geolocation.getCurrentPosition(dibujarMapa);

        }else{
            $mapa.text('El navegador no soporta mapas')
        }

    };

    var dibujarArticulo = function(articulo, opcion){
        var $opt = $('#option'+ opcion);
        $opt.html('');


        var $name = $('<p/>');
        $name.text()

        var $photo = $('<img/>',{
            'src' : articulo.photo
        });

        var $description = $('<p/>');
        $description.text(articulo.description);
        var $price = $('<p/>');
        $price.text('Precio: ' + articulo.price +'€');
        var $likes = $('<p/>');
        $likes.text(articulo.likes +' likes');

        $opt.append($name);
        $opt.append($photo);
        $opt.append($description);
        $opt.append($price);
        $opt.append($likes);

    };

    var dibujarMapa = function(position){
        var $mapa = $('#mapa');
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        $mapa.append(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var markerUsuario = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });

        //las coordenadas me salen por Etiopía mas o menos
        var placeCoords = new google.maps.LatLng($mapa.data('latitude'), $mapa.data('longitude'));
        var marker = new google.maps.Marker({
            position: placeCoords,
            map: map,
            title: $mapa.data('address')
        });

    };

    var empezarJuego = function(){

        mostrarConcursante(0);
        mostrarReto(0,0);
    };


    var comprobarRespuesta = function(e){
        var solucion = $('#reto').data('selected');
        var eleccionUsuario = $(this).attr('id');

        if (solucion == eleccionUsuario){
            $(this).css("background-color", 'green');
        }else{
            $(this).css("background-color", 'red');
        }

        console.log(solucion);
        console.log(eleccionUsuario);

        //almacenar

        //pasar al siguiente reto

    }

    $(document).on('click', '#reto article', comprobarRespuesta);
    //Empezar la aplicación cargando la base de datos
    abrirBD();


});