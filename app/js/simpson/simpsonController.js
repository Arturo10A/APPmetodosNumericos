define(["app","js/simpson/simpsonView", "js/simpson/simpsonModel"], function(app, simpsonView, simpson) {
	var bindings = [
	{
		element: '.demo1',
		event: 'click',
		handler: demo1,
	}];	

	function demo1(){
		app.f7.alert('You choose demo 1');
		$('.demo1').addClass('active');
		$('.demo2').removeClass('active')
	}

	function init(query){	
		console.log('simpson Controller');
		simpsonView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});