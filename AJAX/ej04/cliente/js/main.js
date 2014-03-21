$(document).ready(function(){
	'use strict';

	var $div = $('#provincias');
	var $selectProvincias = $('<select/>', {
			'id' : 'provincias'
	});

	var $selectMunicipios = $('<select/>', {
			'id' : 'provincias'
	});

	$div.append($selectProvincias);
	$div.append($selectMunicipios);


	var crearProvincias = function(data, textStatus, jqXHR){

		if(data){
			console.log(data);

			var options =[];
			for (var i in data){
				var $option = $('<option/>',{
					value : i,
					text : data[i]
				});

				options.push($option[0]);
			}

			$selectProvincias.append(options);
			pedirMunicipios.call($selectProvincias);
		}

	};

	var mostrarMunicipios = function(data, textStatus, jqXHR){
		console.log(data);
		$selectMunicipios.find('option').remove();
		var options =[];
		for (var i in data){
			var $option = $('<option/>',{
				value : i,
				text : data[i]
			});

			options.push($option[0]);
		}

		$selectMunicipios.append(options);


	};

	var errorPeticion = function(jqXHR, textStatus, errorThrow){
		console.log(errorThrow);
	};

	var pedirMunicipios = function(e){
		var $this = $(this);

		$.ajax({
			url : '../servidor/cargaMunicipiosJSON.php',
			type : 'POST',
			dataType : 'JSON',
			data : 'provincia=' + $this.find(':selected').attr('value'),
			cache : false,
			success : mostrarMunicipios,
			error : errorPeticion

		});
	};

	$.ajax({
        url : '../servidor/cargaProvinciasJSON.php',
        dataType : 'JSON',
        cache : false,
        success : crearProvincias,
        error : errorPeticion
    });

	$(document).on('change', '#provincias', pedirMunicipios);

});