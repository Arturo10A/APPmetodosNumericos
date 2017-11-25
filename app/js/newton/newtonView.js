define(['js/newton/newtonModel','hbs!js/newton/templates/newton'], function(newton,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('newton View Render');
		$$('.newton-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Newton");

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
