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

	rembox.setting = {
		design_width: 750
	}

	rembox.flexobj = function () {
		var html = document.documentElement;
		var n = html.getBoundingClientRect().width / (rembox.setting.design_width / 100);
		if (n > 100) n = 100;
		html.style.fontSize = n + 'px';
		rembox.n = n;
	}

	rembox.throttle = function (method, context) {
		clearTimeout(method.tId);
		method.tId = setTimeout(function() {
			method.call(context);
		}, 200);
	}
	
	rembox.config = function (options) {
		if(Object.prototype.toString.call(options) !== '[object Object]'){
			throw new Error('arguments must be a json');
		}
		for (const key in options) {
			rembox.setting[key] = options[key];
		}
		rembox.flexobj();
	}

	rembox.conver = function (rem) {
		return rembox.n * rem;
	}

	rembox.flexobj();
	
	window.addEventListener('resize', function() {
		rembox.throttle(rembox.flexobj, window)
	});

	return rembox;

});