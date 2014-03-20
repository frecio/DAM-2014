$(document).ready(function(){
	'use strict';

	$(document).on('change', 'select[name=day]', function(e){
		var $this = $(this);

		console.log($this.val());
		/*
		//Con el metodo getJSON()
		var res = $.getJSON('data/specials.json',
			{data: $this.val()},
			function(data, textStatus, jqXHR){

				console.log(data);
				console.log(textStatus);
				console.log(jqXHR);
		});

		*/

		//con el metodo ajax
		$.ajax({
			url: 'data/specials.json',
			data: { data: $this.val() },
			datatype: 'json',
			cache: false,
			succes: function(data, textStatus, jqXHR){
				console.log(data);
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(errorThrown);
			}
		});

	});

});