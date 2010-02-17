// references
//----------------------------------
// http://dev.w3.org/html5/canvas-api/canvas-2d-api.html#simple-shapes-rectangles
//----------------------------------

$(document).ready(function() {

	new function keyboard() {
		var 
			x = 150, // pos of the ball
			y = 150,
			dx = 2, // move of x
			dy = 4,
			WIDTH, // width of the canvas
			HEIGHT,
			canvas_minx, // for mouse move
			canvas_maxx,
			right_down, // boolean, true if the user press right
			paddle,
			interval_id,
			ctx;
		
		interval_id = init();

		
		
		function draw() {
			clear();
			
			// move paddle
			if (right_down) paddle.x += 5;
			if (left_down)  paddle.x -= 5;
			rect(paddle.x, HEIGHT - paddle.h, paddle.w, paddle.h);
			
			circle(x, y, 10);
			
			// game over ?
			if (y + dy > HEIGHT) {
				// clearInterval(interval_id);
			}
						
			// reflection
			if (x+dx > WIDTH || x+dx < 0)  dx = -dx;
			if (y+dy > HEIGHT || y+dy < 0) dy = -dy;
			
			// move for next
			x+=dx;
			y+=dy;
		}		
		function init() {
			var cvs = $('#canvas');
			ctx = cvs.get(0).getContext("2d");
			WIDTH = cvs.width();
			HEIGHT = cvs.height();
			
			right_down = false;
			left_down = false;
			$(document)
				.keydown(on_key_down)
				.keyup(on_key_up);
			
			init_paddle();
			init_mouse();
			
			return setInterval(draw, 10);
		}
		function init_mouse() {
			var cvs = $('#canvas');
			canvas_minx = cvs.offset().left;
			canvas_maxx = canvas_minx + WIDTH;
			
			$(document).mousemove(function(evt) {
				if (canvas_minx < evt.pageX && evt.pageX < canvas_maxx) {
					paddle.x = evt.pageX - canvas_minx;
				}
			});
		}
		
		function init_paddle() {
			paddle = {
				x: WIDTH / 2, h: 10, w: 75
			};
		}
		function on_key_up(evt) {
			if (evt.keyCode == 39) right_down = false;
			if (evt.keyCode == 37) left_down = false;
		}
		function on_key_down(evt) {
			if (evt.keyCode == 39) right_down = true;
			if (evt.keyCode == 37) left_down = true;
		}
		function circle(x, y, r) {
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
		function rect(x,y,w,h) {
			ctx.beginPath();
			ctx.rect(x,y,w,h);
			ctx.fill();
		}
		function clear() {
			ctx.clearRect(0,0, WIDTH, HEIGHT);
		}		
	};
	
	new function interlude_with_bounce_paddle() {
		var 
			x = 150,
			y = 150,
			dx = 2,
			dy = 4,
			WIDTH,
			HEIGHT,
			paddle,
			interval_id,
			ctx;
		
		function draw() {
			clear();
			
			paddle.draw();
			circle(x, y, 10);
			
			// game over ?
			if (y + dy > HEIGHT) {
				clearInterval(interval_id);
			}
			
			// reflection
			if (x+dx > WIDTH || x+dx < 0)  dx = -dx;
			if (y+dy > HEIGHT || y+dy < 0) dy = -dy;
			
			// move
			x+=dx;
			y+=dy;
		}		
		interval_id = init();

		
		
		function init() {
			var cvs = $('#canvas');
			ctx = cvs.get(0).getContext("2d");
			WIDTH = cvs.width();
			HEIGHT = cvs.height();
			
			init_paddle();
			
			return setInterval(draw, 10);
		}
		function init_paddle() {
			paddle = {
				x: WIDTH / 2, h: 10, w: 75,
				draw: function() {
					var self = this;
					rect(self.x, HEIGHT - self.h, self.w, self.h);
				}
			};
		}
		
		function circle(x, y, r) {
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
		function rect(x,y,w,h) {
			ctx.beginPath();
			ctx.rect(x,y,w,h);
			ctx.fill();
		}
		function clear() {
			ctx.clearRect(0,0, WIDTH, HEIGHT);
		}		
	};
	
	function action() {
		var 
			x = 150,
			y = 150,
			dx = 2,
			dy = 4,
			ctx;
			
		function init() {
			ctx = $('#canvas').get(0).getContext("2d");
			return setInterval(draw, 10);
		}
		function draw() {
			// The clearRect(x, y, w, h) method must clear the pixels in the specified rectangle 
			// that also intersect the current clipping region to a fully transparent black, 
			// erasing any previous image. If either height or width are zero, this method has no effect.
			ctx.clearRect(0, 0, 300, 300);
			ctx.beginPath();
			ctx.arc(x, y, 10, 0, Math.PI * 2, true);
			ctx.fill();
			x += dx;
			y += dy;
		}
		init();
		
	};
	
	function add_some_color() {
		var ctx = $('#canvas').get(0).getContext("2d");
		ctx.fillStyle = "#00A308";
		ctx.beginPath();
		ctx.arc(220,220,50,0, Math.PI * 2, true); // context . arc(x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle = "#FF1C0A";
		ctx.beginPath();
		ctx.arc(100,100,100,0, Math.PI * 2, true); // context . arc(x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle = "rgba(255,255,0, 0.5)";
		ctx.beginPath();
		// context . rect(x, y, w, h)
		// Adds a new closed subpath to the path, representing the given rectangle.
		ctx.rect(15,150,120,120);
		ctx.closePath();
		ctx.fill();
	};
	
	function draw_a_circle() {
		var ctx = $('#canvas').get(0).getContext("2d");
		ctx.beginPath();
		ctx.arc(75,75,10,0, Math.PI * 2, true); // context . arc(x, y, radius, startAngle, endAngle, anticlockwise)
		ctx.closePath();
		ctx.fill();
		// ctx.stroke();
	};
	
});
