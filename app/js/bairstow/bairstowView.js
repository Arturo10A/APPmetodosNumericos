define(['js/bairstow/bairstowModel','hbs!js/bairstow/templates/bairstow'], function(bairstow,template) {
	var $$ = Framework7.$;
	function render(params) {
		console.log('bairstow View Render');
		$$('.bairstow-page').html(template({}));
		bindEvents(params.bindings);
		var app = params.app;
		var methods = params.methods;
		$("#title_seccion").html("Bairstow");

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