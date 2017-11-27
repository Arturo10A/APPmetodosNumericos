define(["app","js/cramer/cramerView", "js/cramer/cramerModel"], function(app, cramerView, cramer) {
	var bindings = [
	{
		element: '.metodo',
		event: 'click',
		handler: metodo,
	}];	

	function metodo(){
		app.f7.popup('.popup-cramer');
		$('.demo1').addClass('active');
		$('.demo2').removeClass('active')
	}

	function init(query){	
		console.log('cramer Controller');
		cramerView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});