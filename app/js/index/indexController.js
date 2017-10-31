define(["app","js/index/indexView", "js/index/indexModel"], function(app, IndexView, Index) {
	var bindings = [
	{
		element: '.demo1',
		event: 'click',
		handler: demo1,
	},
	{
		element:'.demo2',
		event:'click',
		handler:demo2
	},
	{
		element:'.gauss',
		event:'click',
		handler:gauss
	},
	{
		element:'.team',
		event:'click',
		handler:team
	}];	

	function team(){
		app.f7.mainView.loadPage("index.html");
	}

	function gauss(){
		app.f7.mainView.loadPage("gauss.html");
		console.log("*** GAUSS ***")
	}

	function demo1(){
		$('.demo1').addClass('active');
		$('.demo2').removeClass('active')
	}

	function demo2(){
		app.f7.alert('You choose demo 2');
		$('.demo2').addClass('active');
		$('.demo1').removeClass('active')
	}

	
	

	function init(query){	
		console.log('Index Controller');
		IndexView.render({
			bindings: bindings,
			app:app,
		});

	}
	return {
		init: init
	};
});