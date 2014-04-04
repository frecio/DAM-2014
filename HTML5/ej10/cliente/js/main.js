$(document).ready(function(){
	"use strict"

	var db = openDatabase('tweetdb', '1.0', 'All my tweets', 2*1024*1024);

	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id, user, date, text)', [], getTweets);
		tx.executeSql('CREATE TABLE IF NOT EXISTS users(id, user)', [], getUsers);
	});



	var getTweets = function(){
		var tweets = $.ajax({
		    url : '../servidor/tweets.json',
		    type : 'POST',
		    dataType: 'JSON',
		    cache: false,
		    success : function(data, textStatus,jqXHR){
		        console.log(data);
		        guardarTweets(data);
		    },
		    error : function(jqXHR, textStatus, errorThrow){
		        console.log(errorThrow);
		    }
		});
	}



	var guardarTweets = function (data){

		$.each(data, function(idx) {
			db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
				//var time = (new Date(Date.parse(tweet.created_at))).getTime();
				tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
					[data[idx].id, data[idx].user, data[idx].time, data[idx].text]);
			});

		});
	}

	var getUsers = function(){
		var users = $.ajax({
		    url : '../servidor/users.json',
		    type : 'POST',
		    dataType: 'JSON',
		    cache: false,
		    success : function(data, textStatus,jqXHR){
		        console.log(data);
		        guardarUsuarios(data);
		    },
		    error : function(jqXHR, textStatus, errorThrow){
		        console.log(errorThrow);
		    }
		});

	}

	var guardarUsuarios = function (data){

		$.each(data, function(idx) {
			db.transaction(function (tx) {
				tx.executeSql('INSERT INTO users (id, user) VALUES (?, ?)',
					[data[idx].id, data[idx].user]);
			});

		});
	}

	var $datalist = $('#listatweets');

	db.transaction(function (tx) {
		tx.executeSql('SELECT * FROM tweets',
			function(tx, results) {
				var options = [], len = results.rows.length;
				for (var i = 0; i < len; i++) {
					options.push('<option>' + results.rows.item(i).id + '</option>');
					console.log(i);
				}
				$datalist.append(options.join(''));

			},function errorCallback(tx, error) {alert(error.message);}
		);
	});

});

