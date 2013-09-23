jQuery(function($){
	plug = {list:[]};
	plug.register = function(name, init){
		// Initialize plugin
		plug.list[name] = init(plug);
	};
	
	window.plug = plug;
	$(document).trigger('pluginjs-loaded');
});
