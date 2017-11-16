define(["app","js/newton/newtonView", "js/newton/newtonModel"], function(app, newtonView, newton) {
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
		console.log('newton Controller');
		newtonView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});