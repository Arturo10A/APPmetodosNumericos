define(["app","js/gauss/gaussView", "js/gauss/gaussModel"], function(app, gaussView, gauss) {
	var bindings = [
	{
		element: '.demo1',
		event: 'click',
		handler: demo1,
	},{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup('.popup-gauss');
		console.log("gauss metodo");
	}

	function demo1(){
		app.f7.alert('You choose demo 1');
		$('.demo1').addClass('active');
		$('.demo2').removeClass('active')
	}

	function init(query){	
		console.log('gauss Controller');
		gaussView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});