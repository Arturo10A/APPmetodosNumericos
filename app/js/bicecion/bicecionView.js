define(['js/bicecion/bicecionModel','hbs!js/bicecion/templates/bicecion'], function(bicecion,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('bicecion View Render');
		$$('.bicecion-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("bicecion");

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