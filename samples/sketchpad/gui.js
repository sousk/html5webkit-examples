gui = {
	
};
// gui = {
// 	// Options
// 	'options': function () {
// 		var r = [],
// 		fu = N.format;
// 		cF = {
// 			'inner_radius_spirograph': {
// 				type: 'X',
// 				val: [1, 100, 10]
// 			},
// 			'outer_radius_spirograph': {
// 				type: 'X',
// 				val: [1, 100, 10]
// 			},
// 			'diameter_spirograph': {
// 				type: 'X',
// 				val: [1, 500, 10]
// 			},
// 			'speed_spirograph': {
// 				type: 'X',
// 				val: [2, 250, 10]
// 			},
// 			'resolution_spirograph': {
// 				type: 'X',
// 				val: [1, 1000, 10]
// 			},
// 			'stroke_text': {
// 				type: 'X',
// 				val: [0, 20, 2]
// 			},
// 			'fontSize': {
// 				type: 'X',
// 				val: [16, 256, 64]
// 			},
// 			'kerning': {
// 				type: 'X',
// 				val: [0, 2, 1, 'float']
// 			},
// 			'diameter_pencil': {
// 				type: 'X',
// 				val: [1, 15, 10]
// 			},
// 			'opacity_fill': {
// 				type: 'X',
// 				val: [1, 100, 100],
// 				fu: infc.opacity
// 			},
// 			'lineOpacity': {
// 				type: 'X',
// 				val: [2, 100, 1]
// 			},
// 			'sides_shape': {
// 				type: 'X',
// 				val: [2, 100, 1]
// 			},
// 			'slope_shape': {
// 				type: 'X',
// 				val: [0.2, 10, 1, 'float']
// 			},
// 			'sides_marquee': {
// 				type: 'X',
// 				val: [2, 100, 1]
// 			},
// 			'slope_marquee': {
// 				type: 'X',
// 				val: [0.2, 10, 1, 'float']
// 			},
// 			'stampSize': {
// 				type: 'X',
// 				val: [1, 200, 100]
// 			},
// 			'leading': {
// 				type: 'X',
// 				val: [0, 2, 1, 'float']
// 			},
// 			'rand': {
// 				type: 'X',
// 				val: {
// 					'_min': [0, 100, 50],
// 					'_max': [0, 100, 50]
// 				}
// 			},
// 			'fill': {
// 				type: 'menu',
// 				val: ['Color', 'Gradient', 'Pattern']
// 			},
// 			'marquee': {
// 				type: 'menu',
// 				val: ['Ellipses', 'Polygon', 'Star', 'Burst', 'Gear']
// 			},
// 			'spirograph': {
// 				type: 'menu',
// 				val: ['Hypotrochoid', 'Epitrochoid']
// 			},
// 			'shape': {
// 				type: 'menu',
// 				val: ['Ellipses', 'Polygon', 'Star', 'Burst', 'Gear']
// 			},
// 			'crop': {
// 				type: 'menu',
// 				val: ['Display (' + fu(screen.width) + 'x' + fu(screen.height) + ')', 'Original (' + fu(canvas.W) + 'x' + fu(canvas.H) + ')', '2x3', '3x5', '4x3 (DVD)', '4x3 (Book)', '4x6 (Postcard)', '5x7 (L, 2L)', '8x10', '16x9 (HD)', '16x20', '20x30 (Poster)', 'Square']
// 			},
// 			'draw': {
// 				type: 'menu',
// 				val: ['Pencil', 'Brush', 'Calligraphy']
// 			},
// 			'lineClose': {
// 				type: 'check',
// 				val: ["lineClose", 'true', 'false']
// 			},
// 			'constrain': {
// 				type: 'check',
// 				val: ["constrain", 'true', 'false']
// 			},
// 			'preview': {
// 				type: 'check',
// 				val: ["preview", 'true', 'false']
// 			},
// 			'marqType': {
// 				type: 'radio',
// 				val: ["marquee", 'lasso', 'ellipses', 'rectangle', 'star', 'burst', 'gear']
// 			},
// 			'aspect': {
// 				type: 'radio',
// 				val: ["aspect", 'landscape', 'portrait']
// 			},
// 			'lineCap': {
// 				type: 'radio',
// 				val: ["lineCap", 'butt', 'round', 'square']
// 			},
// 			'corner': {
// 				type: 'radio',
// 				val: ["lineJoin", 'round', 'miter', 'bevel']
// 			}
// 		};
// 		r = ["marquee", "text", "line", "ellipses", "polygon", "star", "burst", "gear", "brush", "calligraphy", "pencil", "stamp", "fill", "eraser"];
// 		for (var i in r) {
// 			cF["movement_" + r[i]] = {
// 				type: "radio",
// 				val: ["movement_" + r[i], "anchored", "freedraw", "active"]
// 			};
// 		}
// 		function z(r, v) {
// 			for (var i in r) {
// 				cF[v + "_" + r[i]] = {
// 					type: "X",
// 					val: [1, 100, 100]
// 				};
// 			}
// 		};
// 		z(["ellipses", "polygon", "star", "burst", "gear", "line"], "stroke");
// 		z(["brush", "calligraphy", "eraser", "pencil", "stamp"], "opacity");
// 		z(["brush", "calligraphy", "eraser"], "diameter");
// 		z(["brush", "calligraphy", "eraser", "stamp"], "flow");
// 		z(["brush", "eraser"], "hardness");
// 		var j = 0,
// 		r = [];
// 		for (var i in stamp.r) {
// 			r[j++] = i;
// 		}
// 		cF.stamp = {
// 			type: "menu",
// 			val: r
// 		};
// 		if (!gui.menu.cur) {
// 			if (!vars.crop) {
// 				vars.crop = "Original (" + fu(canvas.W) + "x" + fu(canvas.H) + ")";
// 			}
// 			gui.menu.cur = {};
// 			gui.menu.key = {};
// 			gui.menu.key.stamp = vars.stamp;
// 			gui.menu.key.font = vars.font;
// 			gui.menu.key.draw = vars.draw;
// 			gui.menu.key.shape = vars.shape;
// 			gui.menu.key.marquee = vars.marquee;
// 			gui.menu.key.crop = vars.crop;
// 			gui.menu.key.fill = vars.fill;
// 			gui.menu.key.spirograph = vars.spirograph;
// 			gui.menu.key['PT*'] = vars['PT*'];
// 			gui.menu.key['GD*'] = vars['GD*'];
// 			gui.menu.key['CO*'] = vars['CO*'];
// 			for (var i in gui.menu.key) {
// 				gui.menu.cur[i] = String(gui.menu.key[i]);
// 			}
// 			gui.menu.klean("crop", vars.crop);
// 		}
// 	},
// 	//* Check Box
// 	'check': {
// 		'build': function (v, c, r) {
// 			return ('<div id="' + c + '_check" class="check">' + ' <span>' + v + '</span><br>' + ' <div onclick="gui.check.click(this,\'' + r[0] + '\')"' + (vars[r[0]] == 'true' ? 'class="cur"' : '') + '>' + vars[r[0]] + '</div>' + '</div>');
// 		},
// 		'click': function (o, v) {
// 			function z(a, b, c, d) {
// 				vars[v] = c;
// 				o.innerHTML = c;
// 				o.className = d;
// 			}
// 			if (o.className == 'cur') z('block', 'none', 'false', '');
// 			else z('none', 'block', 'true', 'cur');
// 			crop.click();
// 		}
// 	},
// 	//* Radio Button
// 	'radio': {
// 		'build': function (v, c, r) {
// 			var b = '';
// 			for (var i = 1; i < r.length; i++) b += '<div class="' + (((vars[r[0]] == r[i] && vars.type != 'crop') || (vars[r[0]] == r[i] && vars.type == 'crop' && !crop.force(vars.crop))) ? ' cur' : '') + '" onclick="gui.radio.click(this,\'' + r[0] + '\')">' + r[i] + '</div><br>';
// 			return ('<div' + ((crop.force(vars.crop) && vars.type == 'crop') ? ' style="opacity: 0.6"' : '') + ' class="radio" id="' + c + '_radio"><span>' + v + '</span><br>' + b + '</div>');
// 		},
// 		'click': function (o, v) {
// 			if (!$C("cur", o.parentNode)[0]) {
// 				return;
// 			}
// 			var i = o.innerHTML,
// 			cur = vars[v];
// 			$C("cur", o.parentNode)[0].className = "";
// 			o.className = "cur";
// 			vars[v] = i;
// 			if (v == "marquee") {
// 				var b = $C("Marquee_" + cur, "tools")[0];
// 				if (i == "lasso" || cur == "lasso") {
// 					marquee.reset("", 1);
// 				}
// 				b.src = "media/gui/Marquee_" + i + "_2.png";
// 				b.className = "Marquee_" + i;
// 				gui_tools.prev = b.className;
// 				vars.tool = "Marquee_" + i;
// 			}
// 			vars.cache(1);
// 			crop.click();
// 		}
// 	},
// 	//* Select Menu
// 	'menu': {
// 		'build': function (c, r) {
// 			var z = '',
// 			length = 0,
// 			o = gui.menu;
// 			if (typeof(r) == 'object' && !r.length) for (var i in r) {
// 				length++;
// 			} else length = r.length;
// 			for (var i in r) {
// 				var style = (i == 0) ? 'style="border-top: none;"' : ((parseInt(i) + 1) == length ? 'style="border-bottom: none;"' : '');
// 				if (r[i].toLowerCase() == o.cur[c].toLowerCase() || (!o.cur[c] && i == 0)) {
// 					className = 'class="sel"';
// 					var position = 'style="top:-' + (o.cellHeight * i) + 'px"';
// 				} else {
// 					className = '';
// 				}
// 				z += '<li onmousedown="gui.menu.toggle(this)" onmouseup="gui.menu.select(this)" onmouseover="gui.menu.okClose(this.parentNode.parentNode)" ' + style + ' ' + className + '>' + r[i] + '</li>';
// 			}
// 			return ('<div class="menuWrap" id="' + c + '_opt">' + ' <div class="t"><div class="l"></div><div class="r"></div><div class="c"></div></div>' + ' <div class="menuBox">' + '  <ul ' + position + '>' + '   <li class="top"><div class="l"></div><div class="r"></div><div class="c"></div></li>' + z + '   <li class="bottom"><div class="l"></div><div class="c"></div><div class="r"></div></li>' + '  </ul>' + ' </div>' + ' <div class="b"><div class="l"></div><div class="r"></div><div class="c"></div></div>' + '</div>');
// 		},
// 		'fu': {
// 			'z': function (c, o) {
// 				gui.menu.klean(c, o.innerHTML);
// 			},
// 			'crop': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				$T('div', 'constrain_check')[0].innerHTML = 'true';
// 				$T('div', 'constrain_check')[0].className = 'cur';
// 				vars.constrain = 'true';
// 				crop.click();
// 				vars.cache(1);
// 			},
// 			'fill': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				gui_palette.click("fill");
// 				gui_swatch.cur({
// 					"Gradient": "GD",
// 					"Color": "CO",
// 					"Pattern": "PT"
// 				}[o.innerHTML]);
// 			},
// 			'stamp': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				stamp.fileNumber = 1;
// 				stop = 1;
// 				var o = gui.Y;
// 				o.cur.stamp = 1;
// 				o.prev.stamp = null;
// 				o.id = 'stamp';
// 				o.stamp();
// 				o.kontrol_update('stamp');
// 				vars.cache(1);
// 			},
// 			'draw': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				var b = o.innerHTML;
// 				vars.draw = b;
// 				$C(vars.draw, 'tools')[0].title = b;
// 				gui_tools.imageCurrent(b);
// 			},
// 			'spirograph': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				var b = o.innerHTML;
// 				vars.type_spirograph = b;
// 			},
// 			'sw': function (c, o, v1, v2) {
// 				gui.menu.fu.z(c, o);
// 				var i = vars.id + v1;
// 				vars[v1] = Q[v1][o.innerHTML];
// 				gui_swatch.n[i] = Math.min(gui_swatch.n[i], vars[v1].length);
// 				vars[i] = vars[v1][gui_swatch.n[i] - 1];
// 				var o = gui.Y;
// 				gui_swatch.cur(v1);
// 				o.prev[v1] = null;
// 				o.sw(1);
// 				o.kontrol_update(v1);
// 				vars.cache(1);
// 				$('author_'+gui_swatch.id).innerHTML = gui_swatch.author();
// 			},
// 			'CO*': function (c, o) {
// 				gui.menu.fu.sw(c, o, 'CO', 'solid');
// 			},
// 			'GD*': function (c, o) {
// 				gui.menu.fu.sw(c, o, 'GD', 'gradient');
// 			},
// 			'PT*': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				vars.PT = Q.PT[o.innerHTML];
// 				var i = vars.id + 'PT',
// 				n = vars.PT.length - (gui_swatch.n[i] = Math.min(gui_swatch.n[i], vars.PT.length));
// 				vars.PT[n + 1] = new Image();
// 				vars.PT[n + 1].src = gui_pattern.dir + vars['PT*'] + '/' + n + '-live.jpg';
// 				vars[vars.id + 'PT'] = vars.PT[n + 1];
// 				vars[vars.id + 'PT'].onload = function () {
// 					vars[vars.id + 'PT'].opacity = 1;
// 					var o = gui.Y;
// 					gui_swatch.cur('PT');
// 					o.prev.PT = null;
// 					o.sw(1);
// 					o.kontrol_update('PT');
// 					vars.cache(1);
// 				}
// 				$('author_'+gui_swatch.id).innerHTML = gui_swatch.author();
// 			},
// 			'shape': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				gui_tools.imageCurrent(vars.tool = 'Shape_' + (vars.shape = vars.shape.toLowerCase()));
// 			},
// 			'marquee': function (c, o) {
// 				gui.menu.fu.z(c, o);
// 				gui_tools.imageCurrent(vars.tool = 'Marquee_' + (vars.marquee = vars.marquee.toLowerCase()));
// 			}
// 		},
// 		'klean': function (v, o) {
// 			gui.menu.cur[v] = o;
// 			vars[v] = o;
// 			var a = o,
// 			b = a.substr(0, a.indexOf('(') != -1 ? a.indexOf('(') - 1 : a.length);
// 			gui.menu.key[v] = b;
// 		},
// 		// Data
// 		'cellHeight': 17,
// 		'parent': {},
// 		'prev': {},
// 		'toggle': function (n) {
// 			var p = n.parentNode.parentNode,
// 			o = gui.menu;
// 			if (p.opened != true) {
// 				if (o.parent.opened == true) o.close();
// 				stop = 0;
// 				o.prev = n;
// 				o.parent = p;
// 				var c = p.parentNode.id.replace('_opt', '');
// 				win.id = p.parentNode.parentNode.parentNode.parentNode.parentNode;
// 				if (c == 'CO*' || c == 'GD*' || c == 'PT*') {
// 					win.id = win.id.parentNode.parentNode;
// 				}
// 				zindex(win.id);
// 				var offset = parseInt(n.parentNode.style.top);
// 				if (!isNaN(offset)) {
// 					offset = (offset / o.cellHeight) * (o.cellHeight + 2);
// 					var d = -1 * offset - abPos(p).Y + 3;
// 					if (d > 0) {
// 						n.parentNode.style.top = (offset + d) + 'px';
// 					} else n.parentNode.style.top = (offset - 3) + 'px';
// 				}
// 				p.style.overflow = 'visible';
// 				n.parentNode.className += 'opened';
// 				window.setTimeout(function () {
// 					p.opened = true;
// 				},
// 				100);
// 				window.onmousedown = o.close;
// 			} else o.doSelect(n, p);
// 		},
// 		'doSelect': function (n, s) {
// 			var p = n.parentNode.parentNode;
// 			stop = 1;
// 			var o = $T('li', p);
// 			p.style.overflow = 'hidden';
// 			for (var x = 0; x < o.length; x++) {
// 				o[x].className = trim(o[x].className.replace('sel', ''));
// 				if (o[x] == n) {
// 					n.className += ' sel';
// 					n.parentNode.style.top = -((x - 1) * gui.menu.cellHeight) + 'px';
// 				}
// 			}
// 			n.parentNode.className = trim(n.parentNode.className.replace('opened', ''));
// 			p.opened = p.okClose = false;
// 			window.onmousedown = null;
// 			var c = p.parentNode.id.replace('_opt', '');
// 			gui.menu.fu[c](c, n, s);
// 		},
// 		'close': function () {
// 			if (gui.menu.parent.opened == true) gui.menu.doSelect(gui.menu.prev)
// 		},
// 		'select': function (n, s) {
// 			var p = n.parentNode.parentNode;
// 			if (p.okClose == true) gui.menu.doSelect(n, s);
// 		},
// 		'okClose': function (p) {
// 			if (p.opened) p.okClose = true;
// 		}
// 	},
// 	
// 	//* Y-Scroll
// 	'Y': {
// 		'id': 'stamp',
// 		'cur': {
// 			'stamp': 1,
// 			'hi': 1,
// 			'CO': 1,
// 			'GD': 1,
// 			'PT': 1
// 		},
// 		'prev': {
// 			'stamp': 10,
// 			'hi': 10,
// 			'CO': 10,
// 			'GD': 10,
// 			'PT': 10
// 		},
// 		'fu': {
// 			'stamp': 'gui.Y.stamp',
// 			'hi': 'gui.Y.hi',
// 			'CO': 'gui.Y.sw',
// 			'GD': 'gui.Y.sw',
// 			'PT': 'gui.Y.sw'
// 		},
// 		'r': {
// 			'stamp': {
// 				'Y': 110,
// 				'n': function () {
// 					return (stamp.r[vars.stamp]);
// 				},
// 				'display': 12,
// 				'col': 4,
// 				'row': 3
// 			},
// 			'hi': {
// 				'Y': 135,
// 				'n': function () {
// 					var r = canvas.history_r;
// 					return (1 + r.z - r.a);
// 				},
// 				'display': 7,
// 				'col': 1,
// 				'row': 7
// 			},
// 			'CO': {
// 				'Y': 106,
// 				'n': function () {
// 					return (vars['CO'].length);
// 				},
// 				'display': 28,
// 				'col': 7,
// 				'row': 4
// 			},
// 			'GD': {
// 				'Y': 106,
// 				'n': function () {
// 					return (vars['GD'].length);
// 				},
// 				'display': 28,
// 				'col': 7,
// 				'row': 4
// 			},
// 			'PT': {
// 				'Y': 106,
// 				'n': function () {
// 					return (vars['PT'].length);
// 				},
// 				'display': 28,
// 				'col': 7,
// 				'row': 4
// 			}
// 		},
// 		
// 		// WHEEL
// 		'wheel': function (event) {
// 			var o = gui.Y,
// 			r = o.r[o.id];
// 			if (event.wheelDelta) {
// 				var v = event.wheelDelta / 120;
// 				if (window.opera) {
// 					v = -v;
// 				}
// 				// OPERA + IE
// 			} else if (event.detail) {
// 				var v = -event.detail / 3;
// 				// MOZ
// 			}
// 			var n = Math.max(2.5, (r.n() / (r.col * r.row)) / r.row * 4),
// 			v = (v <= 0) ? Math.floor(v + 0.2) : Math.ceil(v + 0.5); //- JUNK
// 			o.cord(v * n);
// 			eval(o.fu[o.id] + "()");
// 		},
// 		'cord': function (v) {
// 			var o = gui.Y,
// 			r = o.r[o.id];
// 			var Y2 = r.Y - o.height(o.id),
// 			n = r.n() - r.display,
// 			cur = o.cur[o.id];
// 			if (o.id == 'hi') cur -= canvas.history_r.a + 1;
// 			v = Math.round(Math.max(0, Math.min(n, cur - v)));
// 			$S(o.id + 'Slide').top = Math.round(1 / n * Y2 * v) + 'px';
// 			if (o.id == 'hi') v += canvas.history_r.a + 1;
// 			o.cur[o.id] = v;
// 		},
// 		
// 		// SLIDE
// 		'kontrol': function (i, n) {
// 			var o = gui.Y,
// 			r = o.r[i],
// 			H = o.height(i);
// 			return ('<div id="' + i + 'Kontrol" onmousedown="gui.Y.slide_fu(event,\'' + i + '\')" class="slideY" style="top: ' + (!isNaN(n) ? n : 35) + 'px; height: ' + r.Y + 'px; display:' + (r.n() <= r.display ? 'none' : 'block') + '">' + ' <span class="rT"></span><span class="rB" style="top:' + r.Y + 'px;"></span>' + ' <div id="' + i + 'Slide" class="slider" style="position: relative; height:' + o.height(i) + 'px; top:' + o.top(o, r) + 'px;">' + '  <div class="rT"></div><div class="rB" style="top:' + H + 'px"></div>' + ' </div>' + '</div>');
// 		},
// 		'kontrol_update': function (v, s) {
// 			var o = gui.Y,
// 			r = o.r[v],
// 			i = $(v + 'Slide');
// 			var H = o.height(v),
// 			b = i.style;
// 			$S(v + 'Kontrol').display = 'none';
// 			b.height = H + 'px';
// 			i.childNodes[2].style.top = H + 'px';
// 			b.top = o.top(o, r) + 'px';
// 			$S(v + 'Kontrol').display = (r.n() <= r.display) ? 'none' : 'block';
// 		},
// 		'slide': function (a, b, m) {
// 			var o = gui.Y,
// 			r = o.r[o.id],
// 			n = r.n() - r.display;
// 			$S(o.id + 'Slide').top = b.Y + 'px';
// 			var a = Math.round(Math.max(0, Math.min(n, (b.Y / (r.Y - o.height(o.id))) * n)));
// 			if (o.id == 'hi') a += canvas.history_r.a + 1;
// 			o.cur[o.id] = a;
// 			eval(o.fu[o.id] + "()");
// 		},
// 		'slide_fu': function (e, i) {
// 			var o = gui.Y,
// 			H = o.height(i);
// 			o.id = i;
// 			core.fu(i + 'Slide', e, {
// 				fu: core.Y,
// 				oX: 0,
// 				oY: -(H / 2),
// 				Y1: 0,
// 				Y2: o.r[i].Y - H
// 			},
// 			o.slide);
// 		},
// 		'height': function (i) {
// 			var o = gui.Y.r[i];
// 			return (Math.round(o.row / Math.ceil(o.n() / o.col) * o.Y));
// 		},
// 		'top': function (o, r) {
// 			var cur = o.cur[o.id],
// 			n = r.row,
// 			H = o.height(o.id);
// 			if (o.id == 'hi') cur -= canvas.history_r.a - 6;
// 			return (cur <= 1 ? 0 : Math.round((cur / ((r.n() - r.display) + n)) * (r.Y - H)));
// 		},
// 		// ACTIVE SCROLL
// 		'active': function (o, n, n1, n2, fu, s) {
// 			var z = '',
// 			v = '',
// 			r = gui.Y;
// 			if (s) r.prev[r.id] = null;
// 			while (Math.round(r.cur[r.id] - 1) % n != 0) {
// 				r.cur[r.id]++;
// 				n1++;
// 				n2++;
// 			}
// 			if (r.cur[r.id] != r.prev[r.id]) {
// 				if (fu.change) fu.change();
// 				for (var i = n1; i <= n2; i++) {
// 					var v = fu.each(i, fu.vars);
// 					if (v) z += v;
// 				}
// 				o.innerHTML = z;
// 				r.prev[r.id] = r.cur[r.id];
// 				return true;
// 			}
// 		},
// 		'sw': function (s) {
// 			var r = gui.Y,
// 			c = r.cur;
// 			function fu(i, r) {
// 				if (i <= r.length) {
// 					if (gui_swatch.id == 'PT') {
// 						vars.PT[i - 1] = new Image();
// 						vars.PT[i - 1].id = i;
// 						vars.PT[i - 1].src = gui_pattern.dir + vars['PT*'] + '/' + String(vars.PT.length - i) + '-live.jpg';
// 					}
// 					return ('<canvas id="' + vars.id + gui_swatch.id + i + '" height="16" width="16"' + (r.n == i ? 'class="cur"' : '') + ' onmousedown="gui_swatch.click(this)" title="' + String(vars.PT.length - i) + '"></canvas>');
// 				}
// 			}
// 			if (r.active($(gui_swatch.id), 7, c[gui_swatch.id], c[gui_swatch.id] + 27, {
// 				'each': fu,
// 				'vars': {
// 					'length': vars[gui_swatch.id].length,
// 					'n': gui_swatch.n[vars.id + gui_swatch.id]
// 				}
// 			},
// 			s)) {
// 				if (gui_swatch.id == 'PT') {
// 					for (var i = c[gui_swatch.id]; i <= c[gui_swatch.id] + 27; i++) if (i <= vars[gui_swatch.id].length && vars.PT[i - 1]) vars.PT[i - 1].onload = function () {
// 						gui_swatch.update(this.id);
// 					}
// 				} else gui_swatch.update(this.id);
// 			}
// 		},
// 		'stamp': function (s) {
// 			var r = gui.Y,
// 			c = r.cur;
// 			function fu(i, r) {
// 				if (i <= r.length) {
// 					stamp.src[i] = new Image();
// 					stamp.src[i].src = 'media/glyph/' + vars.stamp + '/' + (i - 1) + '-thumb.png';
// 					stamp.src[i].id = i;
// 					return ('<canvas width="34" height="34" onmousedown="if(this.id.substr(5)!=stamp.fileNumber) { stamp.current(this); co.glyph(stamp.uri(\'live\'),this.id); }" id="stamp' + i + '"' + (stamp.fileNumber == i ? ' class="cur"' : '') + '></canvas>');
// 				}
// 			}
// 			if($('brush_author')) {
// 				var stampSet = Resources.Brushes[vars.stamp];
// 				if(!stampSet) {
// 					$('brush_author').innerHTML = '';				
// 				} else {
// 					$('brush_author').innerHTML = '<i style="-moz-user-select: none; -khtml-user-select: none; user-select: none; ">by:&nbsp; <a href="'+stampSet.url+'" target="_blank">'+stampSet.name+'</a></i><div style="background: #555; height: 1px; margin: 6px 0 2px; "></div>';
// 				}
// 			}
// 			if (r.active($('stamp'), 4, c[r.id], c[r.id] + 11, {
// 				'change': function () {
// 					stamp.src = [];
// 				},
// 				'each': fu,
// 				'vars': {
// 					'length': stamp.r[vars.stamp]
// 				}
// 			},
// 			s)) {
// 				for (var i in stamp.src) stamp.src[i].onload = function () {
// 					stamp.preview(this.id);
// 				};
// 			}
// 		},
// 		'hi': function (s) {
// 			var r = gui.Y,
// 			c = r.cur;
// 			r.id = 'hi';
// 			function fu(i) {
// 				var r = canvas.history_r;
// 				i--;
// 				if (i <= r.z && i >= r.a) {
// 					var v = r.data[r.r[i]];
// 					if (v) {
// 						v = v[3] ? {
// 							'img': v[3],
// 							'type': v[4] ? v[4] : v[2],
// 							'n': 1
// 						} : {
// 							'img': 'Original',
// 							'type': 'original'
// 						};
// 						return ('<div onmousedown="gui.Y.prev[gui.Y.id]=null; canvas.history_set(canvas.history_r.n=' + i + ',1)" class="' + (r.n == i ? 'cur' : (i <= r.n ? 'keep' : 'discard')) + '">' + ' <div style="float: left">' + '  <div style="background: url(media/gui/tools/' + v.img + '.png); opacity: ' + (i <= r.n ? 1.00 : 0.65) + '"></div>' + ' </div>' + ' <div style="float: left; margin-left: 3px;">' + v.type + '</div>' + ' <span>' + (v.n ? '#' + i : '') + '</span>' + '</div>');
// 					}
// 				}
// 			}
// 			r.active($C('z', 'history')[0], 1, c[r.id], c[r.id] + 7, {
// 				'each': fu
// 			}, s);
// 		}
// 	},
// 	
// 	//* X-Slide
// 	'X': {
// 		'html': function (o, r, n, m) {
// 			if (r[3]) vars[o] = Math.round(Math.max(r[0], n * r[1]) * 100) / 100;
// 			else vars[o] = Math.round(Math.max(r[0], n * r[1]));
// 			$(o + 'CurV').innerHTML = vars[o];
// 			if (m == 'up') co.glyph();
// 		},
// 		'left': function (o, n) {
// 			$S(o + 'Cur').left = Math.max(0, n) + 'px';
// 		},
// 		'build': function (v, o, r) {
// 			var a = '',
// 			b = '',
// 			n = 0;
// 			if (!isNaN(r[0])) {
// 				r = {
// 					'': r
// 				};
// 				d = 'slideX';
// 			} else {
// 				d = 'slideXX';
// 			}
// 			for (var i in r) {
// 				n++;
// 				a = '<div id="' + o + i + 'Cur" class="' + i + '" style="left: ' + Math.round(vars[o + i] / (i ? cF[o].val[i] : cF[o].val)[1] * 112) + 'px"></div>' + a;
// 				b = '<div id="' + o + i + 'CurV" class="v">' + Math.round(vars[o + i]) + '</div>' + (b ? '<div class="u">/</div>' : '') + b;
// 			}
// 			return ('<div class="' + d + '"><span>' + v + '</span><br><div onmousedown="gui.X.' + (n > 1 ? 'xxSwitch' : 'xRun') + '(\'' + o + '\',event,this)" class="slide_div">' + (n > 1 ? '<div id="' + o + 'cCur" class="slide_center"></div>' : '') + a + '</div>' + b + '<br></div>' + (d == 'slideXX' ? '<br style="margin-top: 26px">' : ''));
// 		},
// 		'xRun': function (o, e) {
// 			core.fu(o + 'Cur', e, {
// 				fu: core.X,
// 				oX: -6,
// 				X1: 0,
// 				X2: 110,
// 				oY: 0
// 			},
// 			function (a, b, m) {
// 				var i = cF[o];
// 				if (i.fu) {
// 					i.fu(o, i.val, b.X, m);
// 				} else {
// 					gui.X.html(o, i.val, b.X / 110, m);
// 				}
// 				gui.X.left(o, b.X);
// 				if (m == 'up') vars.cache(1);
// 			});
// 		},
// 		'xxSwitch': function (o, e, v) {
// 			var n = (XY(e, 'X') - abPos(v).X - 7);
// 			gui.X.xxID = o;
// 			function z(v1, v2) {
// 				$S(o + v1 + 'Cur').zIndex = 1;
// 				$S(o + v2 + 'Cur').zIndex = 0;
// 				core.fu(o + v1 + 'Cur', e, {
// 					fu: core.X,
// 					oX: v1 == '_min' ? 0 : -7,
// 					X1: 0,
// 					X2: 115,
// 					oY: 0
// 				},
// 				function (a, b, m) {
// 					gui.X.xxRun(a, b, m, v1);
// 					if (m == 'up') vars.cache(1);
// 				});
// 			}
// 			var a = zero($S(o + '_maxCur').left),
// 			b = zero($S(o + '_minCur').left);
// 			if (Math.abs(n - a) < Math.abs(n - b) || (Math.abs(n - a) == Math.abs(n - b) && n <= a)) z('_max', '_min');
// 			else z('_min', '_max');
// 		},
// 		'range': function (v, i, n) {
// 			var a = (i == '_min') ? n : parseInt($S(v + '_minCur').left),
// 				z = (i == '_max') ? n : parseInt($S(v + '_maxCur').left);
// 			$S(v + 'cCur').left = (z + 7) + 'px';
// 			$S(v + 'cCur').width = Math.max(0, a - z - 7) + 'px';
// 		},
// 		'xxRun': function (a, b, m, i) {
// 			var o = gui.X,
// 			v = o.xxID;
// 			function z(i, b) {
// 				o.html(v + i, cF[v].val[i], b / 115, m);
// 				o.left(v + i, b);
// 				o.range(v, i, b);
// 			}
// 			if (i == '_max' && zero($S(v + '_minCur').left) < (b.X + 1)) z('_min', Math.min(115, b.X + 1));
// 			else if (i == '_min' && zero($S(v + '_maxCur').left) > (b.X - 1)) z('_max', Math.max(0, b.X - 1));
// 			z(i, b.X);
// 		},
// 		'xxID': 0
// 	}
// };
