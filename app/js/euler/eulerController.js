define(["app","js/euler/eulerView", "js/euler/eulerModel"], function(app, eulerView, euler) {
	var bindings = [
	{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup('.popup-euler');
	}

	function init(query){	
		console.log('euler Controller');
		eulerView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});