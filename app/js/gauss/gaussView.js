define(['js/gauss/gaussModel','hbs!js/gauss/templates/gauss'], function(gauss,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('gauss View Render');
		$$('.gauss-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Gauss");

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