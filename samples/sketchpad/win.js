win = {
	
};
// // WINDOW
// 
// win = {
// 
// 	// Mouse
// 	'close': function (v, s) {
// 		win.tog(v, {
// 			display: 'none',
// 			effect: true
// 		});
// 		if (s) {
// 			setTimeout("var v=$('i" + v + "'); v.className=(v.className=='cur')?'':'cur'; v.opened=false;", 190);
// 		}
// 	},
// 	'tab': function (o, v) {
// 		var d = $(o.id.substr(1));
// 		if (o.opened == false) {
// 			var i = o.id.substr(0, 2);
// 			i = gui_swatch.L2S[i];
// 			if (i) gui_swatch.cur(i);
// 		}
// 		if (o.opened == false && !d.interval) {
// 			o.opened = true;
// 			o.className = '';
// 			win.tog(v, {
// 				display: 'block',
// 				effect: true
// 			});
// 		} else if (!d.interval) {
// 			o.opened = false;
// 			o.className = 'cur';
// 			win.tog(v, {
// 				display: 'none',
// 				effect: true
// 			});
// 		}
// 	},
// 	'tog': function (v, s, r) {
// 		if ($(v)) {
// 			var o = $(v),
// 			d = $S(v),
// 			n = win.getCenter();
// 			if (typeof(s) != 'object') {
// 				s = {
// 					display: s,
// 					effect: false
// 				};
// 			}
// 			if (win && isNaN(win)) {
// 				d.left = (win.r[v][1] + n) + 'px';
// 				d.top = win.r[v][2] + 'px';
// 			}
// 			if ($('i' + v)) {
// 				var a, b;
// 				if (!o.start) o.start = {
// 					'top': 20,
// 					'left': $('i' + v).offsetLeft + (String($('i' + v).innerHTML).length * 2.5) + 8 - n,
// 					'width': 1,
// 					'height': 1,
// 					'opacity': 10
// 				};
// 				o.end = {
// 					'top': parseInt(win.r[v][2]),
// 					'left': parseInt(win.r[v][1]),
// 					'width': 216,
// 					'height': parseInt(win.r[v][3]),
// 					'opacity': 100
// 				};
// 				if (s.display == 'block' && s.display != d.display) {
// 					if (s.effect) {
// 						a = o.start;
// 						b = o.end;
// 					} else {
// 						a = o.end;
// 					}
// 				} else if (s.display == 'none' && d.display == 'block') {
// 					if (s.effect) {
// 						a = o.end;
// 						b = o.start;
// 					} else {
// 						a = o.start;
// 					}
// 				}
// 				if (b) {
// 					win.apply(o, a);
// 					win.go(o, b, .4);
// 				} else {
// 					win.apply(o, a);
// 				}
// 			} else {
// 				o.start = o.end = {
// 					'opacity': 100
// 				};
// 				win.apply(o, o.start);
// 			}
// 			win.r[v][0] = s.display;
// 			win.cp(1);
// 		}
// 	},
// 	
// 	// Create
// 	'feed': function () {
// 		win.r = {
// 			'canvas': ['block', -10, 19, ],
// 			'solid': ['block', 588, 49, 256],
// 			'gradient': ['none', 338, 382, 230],
// 			'pattern': ['none', 338, 152, 219],
// 			'swatch': ['none', 589, 306, 217],
// 			'tools': ['block', -102, 19, 279],
// 			'options': ['block', -103, 296, 200],
// 			'history': ['none', 138, 416, 187]
// 		};
// 		if (r = cookieGrab('windows')) win.mk(r);
// 		else win.mk(win.cp());
// 	},
// 	'mk': function (r) {
// 		var n = win.getCenter(),
// 		r = r.split(':');
// 		for (var i in r) {
// 			var v = r[i].split(','),
// 			o = '';
// 			if(!v[0]) continue; //- there's a missing name being passed somewhere...
// 			win.r[v[0]] = [v[1], parseInt(v[2]), v[3], v[4]];
// 			win.tog(v[0], v[1], [n + parseInt(v[2]), v[3], v[4]]);
// 			if (o = $('i' + v[0])) {
// 				o.opened = (v[1] == 'none') ? false : true;
// 				o.className = (v[1] == 'none') ? 'cur' : '';
// 			} //			TEST("'"+v[0]+"':['"+v[1]+"',"+v[2]+","+v[3]+","+v[4]+"],",1);
// 		}
// 	},
// 	'cp': function (o, r) {
// 		var z = '';
// 		if (r) {
// 			r[1] -= win.getCenter();
// 			win.r[o] = deObject(r);
// 		}
// 		for (var i in win.r) {
// 			z += i + ',' + win.r[i] + ':';
// 		}
// 		if (o) {
// 			cookieStab('windows', z);
// 		} else {
// 			return (z);
// 		}
// 	},
// 	
// 	// Visualizer
// 	'apply': function (o, r) {
// 		var d = o.style,
// 		n = win.getCenter();
// 		for (i in r) {
// 			if (i == 'opacity') {
// 				var b = r[i] / 100;
// 				d.filter = 'alpha(opacity=' + r[i] + ')';
// 				d.MozOpacity = b;
// 				d.opacity = b;
// 				d.KhtmlOpacity = b;
// 				if (r[i] <= o.start.opacity && r[i] != o.end.opacity) d.display = 'none';
// 				else d.display = 'block';
// 			} else if (i == 'left') {
// 				d[i] = (r[i] + n) + 'px';
// 			} else {
// 				d[i] = r[i] + 'px';
// 			}
// 			o[i] = r[i];
// 		}
// 	},
// 	'go': function (o, r, n) {
// 		stop = 0;
// 		zindex(o);
// 		if (o.interval) {
// 			window.clearInterval(o.interval);
// 		} // .01 (super slow) to 1 (instant)
// 		win.overflow(o, 'hidden');
// 		o.style.cursor = 'pointer';
// 		o.interval = window.setInterval(function () {
// 			var done = true,
// 			A = [],
// 			Z = [];
// 			for (i in r) {
// 				A[i] = Math.round((r[i] - o[i]) * n);
// 			}
// 			for (i in A) {
// 				Z[i] = o[i] + A[i];
// 				if (A[i] == 0 || (A[i] > 0 && Z[i] > r[i]) || (A[i] < 0 && Z[i] < r[i])) {
// 					Z[i] = r[i];
// 				} else {
// 					done = false;
// 				}
// 			}
// 			win.apply(o, Z);
// 			if (done) {
// 				window.clearInterval(o.interval);
// 				o.interval = null;
// 				stop = 1;
// 				o.style.cursor = 'move';
// 				win.overflow(o, 'visible');
// 			}
// 		},
// 		35);
// 	},
// 	'overflow': function (o, v) {
// 		o.style.overflow = v;
// 		function fu(d) {
// 			d.style.overflow = v;
// 		}
// 		fu($C('z', o)[0]);
// 		var d = $C('TML', o)[0];
// 		if (d) fu(d);
// 		var d = $C('TRx', o)[0];
// 		if (d) fu(d);
// 	},
// 	
// 	// Data
// 	'zindex': 3,
// 	'getCenter': function () {
// 		return (zero((XYwin('X') - 710) / 2));
// 	}
// };
