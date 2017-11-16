define(['js/cramer/cramerModel','hbs!js/cramer/templates/cramer'], function(cramer,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('cramer View Render');
		$$('.cramer-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("cramer");

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