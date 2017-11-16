define(['js/simpson/simpsonModel','hbs!js/simpson/templates/simpson'], function(simpson,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('simpson View Render');
		$$('.simpson-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Trapecio Multiple");

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