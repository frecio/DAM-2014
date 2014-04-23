//Page events
$('#page1','#page2').on('pagebeforeload', function(e){
	console.log('pagebeforeload');
});

$('#page1','#page2').on('pagecontainerload', function(e){
	console.log('pagecontainerload');
});

//Page change events
$('#page1','#page2').on('pagebeforechange', function(e){
	console.log('pagebeforechange');
});

$('#page1','#page2').on('pagechange', function(e){
	console.log('pagechange');
});

//Page transition events
$('#page1','#page2').on('pagebeforeshow', function(e){
	console.log('pagebeforeshow');
});

$('#page1','#page2').on('pagebeforehide', function(e){
	console.log('pagebeforehide');
});

$('#page1','#page2').on('pageshow', function(e){
	console.log('pageshow');
});

$('#page1, #page2').on('pagehide', function(e){
	console.log('pagehide');
});


//Page initialization events
$('#page1, #page2').on('pagebeforecreate', function(e){
	console.log('pagebeforecreate');
});
$('#page1, #page2').on('pagecreate', function(e){
	console.log('pagecreate');
});
$('#page1, #page2').on('pageinit', function(e){
	console.log('pageinit');
});

//Page remove events
$('#page1, #page2').on('pageremove', function(e){
	console.log('pageremove');
});

$('#index, #page1','#page2').on('tap', function(e){
	console.log('tap');
});