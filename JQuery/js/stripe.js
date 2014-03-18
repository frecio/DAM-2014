(function($){

	$.fn.stripe = function(color){
		var c = color || '#ccc';

		return this.filter('table').each(function(){//this hace referencia a la coleccion
			var $this = $(this);//ya que aqui this hace referencia a los elementos del dom

			$this.find('tr:odd').css('background-color', c);
		});
	};
})(jQuery);

$('table, div').stripe('yellow');