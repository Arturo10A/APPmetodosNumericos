define(['js/euler/eulerModel','hbs!js/euler/templates/euler'], function(euler,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('euler View Render');
		$$('.euler-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Euler");

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