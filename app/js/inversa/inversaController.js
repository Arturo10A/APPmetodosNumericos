define(["app","js/inversa/inversaView", "js/inversa/inversaModel"], function(app, inversaView, inversa) {
	var bindings = [
	{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup('.popup-inversa');
	}

	function init(query){	
		console.log('inversa Controller');
		inversaView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});