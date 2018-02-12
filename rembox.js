(function(factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define("rembox", [], factory);
    } else if (typeof exports === 'object') {
        exports.rembox = factory();
    } else {
        window.rembox = factory();
    }
})(function() {
	function rembox() {  };

	rembox.flexobj = function () {  
		var html = document.documentElement;
		var n = html.getBoundingClientRect().width / 7.5;
		if (n > 100) n = 100;
		html.style.fontSize = n + 'px';
		rembox.rem = n;
	}

	rembox.throttle = function (method, context) {  
		clearTimeout(method.tId);
		method.tId = setTimeout(function() {
			method.call(context);
		}, 200);
	}
	
	rembox.flexobj();
	
	window.addEventListener('resize', function() {
		rembox.throttle(rembox.flexobj, window)
	});

	return rembox;
	
});