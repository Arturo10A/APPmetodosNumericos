define(["app","js/bicecion/bicecionView", "js/bicecion/bicecionModel"], function(app, bicecionView, bicecion) {
	var bindings = [
	{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup('.popup-bise');
	}

	function init(query){	
		console.log('bicecion Controller');
		bicecionView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});