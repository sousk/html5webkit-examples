// var init = {
//     'canvas': function (w, h, u) {
//         gui_swatch.id = 'CO';
//         function z(n) {
//             return (Math.floor(Math.random() * n));
//         }
//         $('ctx_box').width = canvas.W = w;
//         $('ctx_box').height = canvas.H = h;
//         crop.apply({
//             X: 0,
//             Y: 0
//         },
//         {
//             X: w,
//             Y: h
//         });
//         if (isNaN(vars.winW) || isNaN(vars.winH)) {
//             vars.winW = parseInt(canvas.W);
//             vars.winH = parseInt(canvas.H);
//         }
//         if (u) {
//             var img = new Image();
//             img.src = u;
//             img.onload = function () {
//                 var c = $2D('ctx_box');
//                 co.del(c);
//                 c.drawImage(img, 0, 0, canvas.W, canvas.H);
//             }
//         } else {
//             var a = {
//                 X: 0,
//                 Y: 0
//             },
//             b = {
//                 X: w,
//                 Y: h
//             },
//             c = $2D('ctx_box');
//             c.rect(0, 0, w, h);
//             co.gradient(a, b, c, vars.GD[z(vars.GD.length)], 'fill', 1);
//         }
//     },
//     'content': function () {
//         //Windows
//         if (vars.winMax == 1) {
//             win_size.max();
//         } else if (!isNaN(vars.winW)) {
//             win_size.fu({
//                 W: zero(vars.winW),
//                 H: zero(vars.winH)
//             },
//             win_size.construct({}));
//         } else {
//             canvas.resize(700, 575);
//         }
//         init.canvas(700, 575);
//         gui.options();
//         gui_tools.imageMap();
//         //Interface
//         gui_palette.update('stroke');
//         gui_palette.update('fill');
//         gui_palette.zindex(vars.id);
//         crop.ratio_mk();
//         gui_color.mk();
//         gui_gradient.mk();
//         gui_pattern.mk();
//         gui_swatch.mk();
//         win.feed();
//         gui_tools.imageCurrent(vars.tool);
//         canvas.mode_sw(vars.mode = vars.mode ? vars.mode : 'paint');
//         canvas.history_mk();
//         init.events();
//     },
//     'events': function () {
//         //Canvas
//         var o = $('cBound');
//         o.oncontextmenu = function (e) {
//             if ({
//                 'zoom': 1,
//                 'path': 1,
//                 'shape': 1,
//                 'marquee': 1
//             } [vars.type]) return false;
//         };
//         o.ondblclick = function (e) {
//             if (vars.type == 'text') {
//             	noMove()
// //                co.core(e, text.core);
//             }
//         };
//         o.onmousemove = function (e) {
//             if (stop) {
//                 if ({
//                     'marquee': 1,
//                     'text': 1,
//                     'crop': 1
//                 } [vars.type]) {
//                     mouse.cursor(e, this);
//                 }
//                 if (vars.type == 'picker') {
//                     var a = XY(e);
//                     a.X -= abPos(this).X;
//                     a.Y -= abPos(this).Y;
//                     a.X = Math.max(0, Math.min(canvas.W - 1, a.X));
//                     a.Y = Math.max(0, Math.min(canvas.H - 1, a.Y));
//                     picker.core(a, '', 'move');
//                 }
//             }
//         };
//         o.onmousedown = function (e) {
//             if (vars.type == 'crop') {
//                 co.core(e, crop.core);
//             } else if (vars.type == 'fill') {
//                 co.core(e, draw.fill);
//             } else if (vars.type == 'marquee') {
//                 co.core(e, marquee.core);
//             } else if (vars.type == 'picker') {
// 				var a = XY(e);	
// 				a.X -= abPos(this).X;
// 				a.Y -= abPos(this).Y;
// 				a.X = Math.max(0, Math.min(canvas.W - 1, a.X));
// 				a.Y = Math.max(0, Math.min(canvas.H - 1, a.Y));
// 				picker.core(a, a, 'down', e);
//             } else if (vars.type == 'shape') {
//                 co.core(e, draw.shape);
//             } else if (vars.type == 'text') {
//                 co.core(e, draw.text);
//             } else if ({
//                 'calligraphy': 1,
//                 'stamp': 1
//             } [vars.type]) {
//                 if (stamp.loaded) {
//                     co.core(e, draw[vars.type]);
//                 } else {
//                 	noMove();
//                 }
//             } else if(vars.type == 'spirograph') {
//                 co.core(e, draw.spirograph);
//             } else if ({
//                 'brush': 1,
//                 'pencil': 1,
//                 'eraser': 1
//             } [vars.type]) {
//                 co.core(e, draw[vars.type]);
//             } else {
//                 return noMove();
//             }
//             return false;
//         };
//         o.onmouseout = function (e) {
//             if (stop) {
//                 if (vars.type == 'picker') {
//                     var a = XY(e);	
//                     a.X -= abPos(this).X;
//                     a.Y -= abPos(this).Y;
//                     a.X = Math.max(0, Math.min(canvas.W - 1, a.X));
//                     a.Y = Math.max(0, Math.min(canvas.H - 1, a.Y));
//                 	picker.core(a);
//                 }
//             }
//         };
//         //Mouse Wheel
//         var o = {
//             'stamp': $C('MM', 'options'),
//             'hi': $C('MM', 'history'),
//             'CO': $C('CO', 'swatch'),
//             'GD': $C('GD', 'swatch'),
//             'PT': $C('PT', 'swatch')
//         };
//         function addWheel(id) {
//             Event.add(o[id][0], {
//                 el: 'DOMMouseScroll',
//                 e: 'onmousewheel'
//             },
//             function (event) {
//                 gui.Y.id = id;
//                 gui.Y.wheel(event);
//                 event.preventDefault();
//             });
//         };
//         for (var i in o) addWheel(i);
//         //Window CoreXY
//         var o = $C('gui', document.body);
//         for (var i = 0; i < o.length; i++) {
//             if (o[i].onmousedown) continue;
//             Event.add(o[i], {
//                 el: 'mousedown',
//                 e: 'onmousedown'
//             },
//             function (event) {
//                 core.fu(this.id, event, {
//                     fu: core.win,
//                     Y1: 19,
//                     z: true
//                 });
//             });
//         }
//     },
//     'images': function () {
//         var dir = 'media/gui/';
//         op_8x8 = new Image();
//         op_8x8.src = dir + 'op_8x8.gif';
//         path = {
//             point: new Image(),
//             node_select: new Image()
// 		}
// 		path.point.src = dir + 'point.png';
// 		path.node_select.src = dir + 'node_select.png';
//     },
//     'swatch': function () {
//         var rand = N.rand;
//         init.images();
//         if(typeof ScreenMetrics == 'function') {
// 	        $.metrics = ScreenMetrics();
//         }
//         function PT(v, n) {
//             var n = vars.PT.length,
//             src = gui_pattern.dir + vars['PT*'] + '/' + (gui_swatch.n[v + 'PT'] = rand(n)) + '-live.jpg';
//             gui_pattern.o[v].src = src;
//             vars[v + 'PT'].src = src;
//             gui_swatch.n[v + 'PT'] = n - gui_swatch.n[v + 'PT'];
//         }
//         function CO(v) {
//             var n = vars[v].length,
//             a = rand(n),
//             z = rand(n);
//             vars['fill' + v] = vars[v][a];
//             gui_swatch.n['fill' + v] = a + 1;
//             vars['stroke' + v] = vars[v][z];
//             gui_swatch.n['stroke' + v] = z + 1;
//         }
//         vars.CO = Q.CO[vars['CO*']];
//         vars.GD = Q.GD[vars['GD*']];
//         vars.PT = Q.PT[vars['PT*']];
//         CO('CO');
//         CO('GD');
//         PT('fill');
//         PT('stroke');
// 	// setTimeout( init.content, 1000);
//         
//         gui_pattern.o.fill.onload = function () {
//             if (gui_pattern.o.stroke.loaded) init.content();
//             gui_pattern.o.fill.loaded = 1;
//         };
//         gui_pattern.o.stroke.onload = function () {
//             if (gui_pattern.o.fill.loaded) init.content();
//             gui_pattern.o.stroke.loaded = 1;
//         };
//     }
// };
