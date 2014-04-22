(function(){
    "use strict";

    var $list = $('#listatweets');
    var options = [];

    var borrarTablas= function(){
        db.transaction(function (tx) {
            tx.executeSql('DROP TABLE tweets');
            tx.executeSql('DROP TABLE users');
        });
    };

    var addtweet= function(){
        var nomb = $('#name').val();
        var idtweet = parseInt(new Date().getTime());
        var fecha = $('#fecha').val();
        var texto = $('#texto').val();
        var usu = nomb[0]+nomb[1]+nomb[2]+nomb[0];
        var now = new Date();
        var idus = nomb[0]+now.getTime().toString()+texto[0]+nomb[0];
        var tweets = [{"created_at":fecha,"id":idtweet,"text":texto,"user":{"id":idus,"name":nomb,"screen_name":usu,"created_at":fecha}}];
        guardaTweets(tweets);
    };

    var quitarOptionSelect = function(){
    	$('#listatweets option:selected').remove();
    };

    var deletetweet= function(){
        var idtweet =   $list.val();
        if (idtweet){
            db.transaction(function (tx) {
                tx.executeSql('DELETE FROM tweets WHERE id=?', [idtweet], quitarOptionSelect);
            });
        }
        else{alert('Introduzca un id de tweet válido');}
    };

    var updatetweet = function(){
        var idtweet = $list.val();
        var texto = $('#actualtext').val();
        if (idtweet){
            db.transaction(function (tx) {
                tx.executeSql("UPDATE tweets SET text= '"+texto+"'"+" WHERE id = '"+idtweet+"'");
            });
        }
        else{alert('Introduzca un id de tweet válido');}
    };

    var obtentweetposterior = function(){
        var fecha =  $('#fechapost').val();
        var $ul = $('#tweetfecha');
        $ul.empty();
        if (fecha){
            db.transaction(function (tx) {
                tx.executeSql("SELECT tweets.id,tweets.date,tweets.text,users.name AS usu FROM tweets INNER JOIN users ON tweets.iduser = users.idusu  AND tweets.date >= '"+fecha+"'",[],
                    function callback(tx, results) {
                    var len = results.rows.length, i;
                        for (i = 0; i < len; i++) {
                            $ul.append('<li>'+
                                "<strong> Usuario: </strong>"+results.rows.item(i).usu+
                                "<strong> Fecha: </strong>"+results.rows.item(i).date+
                                "<strong> idTweet: </strong>"+results.rows.item(i).id+"<br/>"+
                                "<strong> Texto: </strong><br/>"+results.rows.item(i).text+"<br/>"+
                                "---------------------------------------------------------------------------------------------------------------------------------"+
                                '</li>');
                        }
                    },
                function errorCallback(tx, error) {
                    console.log(error.message);
                }
                );
            });
        }
        else{alert('Introduzca una fecha válida');}
    };


    //insertar en la BBDD cada tweet
    var guardaTweets = function(tweets){
        guardaUsers(tweets);

         $.each(tweets, function(tweet) {
            var id = tweets[tweet].id.toString();
            var idusr = tweets[tweet].user.id.toString();
            db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                //var time = (new Date(Date.parse(tweets[tweet].created_at))).getTime();
                tx.executeSql('INSERT INTO tweets (id, iduser, date, text) VALUES (?, ?, ?, ?)',
                [id, idusr, tweets[tweet].created_at, tweets[tweet].text], addTweeTOption(id));
            });
        });
    };


    var addTweeTOption = function(id){
    	$list.append('<option value="' + id +'">' + id + '</option>');
    };

    var guardaUsers = function(users){
         $.each(users, function(user) {

            db.transaction(function (tx) {
                var idusr = users[user].user.id.toString();
                //var time = (new Date(Date.parse(tweets[tweet].created_at))).getTime();
                tx.executeSql('INSERT INTO users (idusu, user, name, description, location, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
                [idusr, users[user].user.screen_name, users[user].user.name, users[user].user.description, users[user].user.location, users[user].user.created_at]);
            });
        });
    };


    //funcion que obtiene los tweets e inseta en la tabla creada los datos de cada tweet
    var getTweets =function () {
        var tweets = $.ajax({
            url : '../servidor/search.json',
            type : 'POST',

            dataType : 'JSON',
            cache : false,
            success : function(data){

                guardaTweets(data.statuses);
                console.log(data.statuses);
            },
            error : function(jqXHR, textStatus, errorThrow){

                console.log(errorThrow);
            }
        });
    };




    //Crear las tablas
    var createTable= function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS users(idusu PRIMARY KEY, user, name, description, location, createdAt)', []);
        tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id PRIMARY KEY, iduser, date, text, FOREIGN KEY(iduser) REFERENCES users(idusu))', []);
    };

    //Crear y definir la BBDD
    var db = openDatabase('tweetdb', '1.0', 'All my tweets', 2 * 1024 * 1024);
    if(db){
        db.transaction(createTable);
        getTweets();
    }

    $(document).on('click','#borra',borrarTablas);
    $(document).on('click','#addtweet',addtweet);
    $(document).on('click','#deletetweet',deletetweet);
    $(document).on('click','#updatetweet',updatetweet);
    $(document).on('click','#fechatweet',obtentweetposterior);
})();
