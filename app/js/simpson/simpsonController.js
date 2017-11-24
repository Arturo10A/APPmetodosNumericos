define(["app","js/simpson/simpsonView", "js/simpson/simpsonModel"], function(app, simpsonView, simpson) {
	var bindings = [
	{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup(".popup-trap");
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