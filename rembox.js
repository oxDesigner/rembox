(function (factory) {
	if (typeof exports === 'object' && typeof module === 'object') {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define("rembox", [], factory);
	} else if (typeof exports === 'object') {
		exports.rembox = factory();
	} else {
		window.rembox = factory();
	}
})(function () {

	function rembox() { };

	rembox.setting = {
		design_width: 750
	}

	rembox.flexobj = function () {
		var html = document.documentElement;
		var html_width = html.clientWidth;
		var para = rembox.setting.design_width / 100;
		var n = Number((html_width / para).toFixed(1));
		var realFont, div, realWidth;
		if (n > 100) n = 100;
		html.style.fontSize = n + 'px';
		realFont = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
		rembox.n = n;

		if (n !== realFont) {
			div = document.createElement('div');
			div.style.cssText = 'position: absolute; left: -999px; top: -999px; width: 1rem; height: 1rem; visibility: hidden;'
			document.body.appendChild(div);
			realWidth = parseFloat(window.getComputedStyle(div).width);
			document.body.removeChild(div);
			n = Number((( n * n ) / realWidth).toFixed());
			html.style.fontSize = n + 'px';
			rembox.n = n;
		}
	}

	rembox.throttle = function (method, context) {
		clearTimeout(method.tId);
		method.tId = setTimeout(function () {
			method.call(context);
		}, 200);
	}

	rembox.config = function (options) {
		if (Object.prototype.toString.call(options) !== '[object Object]') {
			throw new Error('arguments must be a json');
		}
		for (var i in options) {
			rembox.setting[i] = options[i];
		}
		rembox.flexobj();
	}

	rembox.conver = function (rem) {
		return rembox.n * rem;
	}

	rembox.flexobj();

	window.addEventListener('resize', function () {
		rembox.throttle(rembox.flexobj, window)
	});

	return rembox;

});