$(function(){
	'use strict';
	var $divs = $('div.module');
	$divs.hide();

	var $menu = $('<ul/>',{'id': 'mytabs'})
		.addClass("tabs");

	//$divs.first().before($menu);

	var lis =[];
	$divs.each(function(idx, elemento){
		var $module = $(this);
		var titulo = $module
			.find('h2')
			.first()
			.text();

		var $li = $('<li/>',{
			'text': titulo
		});

		$li.data('target', $module);
		lis.push($li.get(0));
	});

	$menu.append(lis).insertBefore($divs.eq(0));

	$(document).on('click', '.tabs li', function (e){
		var $this = $(this);
		$this.addClass('current')
			.siblings('.current')
			.removeClass('current');
		$this.data('target')
			.show()
			.siblings('.module')
			.hide();
	});

	$divs.eq(0).show();
	$menu.find('li')
		.filter(':first')
		.addClass('current');

});