define(["app","js/newton/newtonView", "js/newton/newtonModel"], function(app, newtonView, newton) {
	var bindings = [
	{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup('.popup-newton');
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