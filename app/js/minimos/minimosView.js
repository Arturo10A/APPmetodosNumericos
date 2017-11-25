define(['js/minimos/minimosModel','hbs!js/minimos/templates/minimos'], function(minimos,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('minimos View Render');
		$$('.minimos-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Mínimos Cuadrados");

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
