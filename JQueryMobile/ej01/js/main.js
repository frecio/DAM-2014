$('#index').on('orientationchange', function(e){
	alert('has girado el dispositivo');
});

$('#index').on('tap', function(e){
	console.log('tap');
});

$('#index').on('taphold', function(e){
	console.log('taphold');
});

$('#index').on('swipe', function(e){
	console.log('swipe');
});

$('#index').on('swipeleft', function(e){
	console.log('swipeleft');
});

$('#index').on('swiperight', function(e){
	console.log('swiperight');
});

$('#index').on('scrollstart', function(e){
	console.log('scrollstart');
});

$('#index').on('scrollstop', function(e){
	console.log('scrollstop');
});




