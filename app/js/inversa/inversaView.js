define(['js/inversa/inversaModel','hbs!js/inversa/templates/inversa'], function(inversa,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('inversa View Render');
		$$('.inversa-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Inversa");

	}

	function bindEvents(bindings) {
		for (var i in bindings) {
			$(bindings[i].element).on(bindings[i].event, bindings[i].handler);
		}
	}
	return {
		render: render
	};
});
