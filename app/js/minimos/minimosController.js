define(["app","js/minimos/minimosView", "js/minimos/minimosModel"], function(app, minimosView, minimos) {
	var bindings = [
	{
		element: '.demo1',
		event: 'click',
		handler: demo1,
	},{
		element:'.minimos',
		event:'click',
		handler:minimos,
	}];	

	function minimos(){
		app.f7.popup('.popup-minimos');
	}

	function demo1(){
		app.f7.alert('You choose demo 1');
		$('.demo1').addClass('active');
		$('.demo2').removeClass('active')
	}

	function init(query){	
		console.log('minimos Controller');
		minimosView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});