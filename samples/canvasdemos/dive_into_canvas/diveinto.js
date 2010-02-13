function log (msg) {
	console.log(msg);
}

window.addEventListener('load', function() {
	
	var canvas = document.getElementById('a');
	set_drawer();
	set_resetter('reset');
	
	var grid = document.getElementById('c');
	document.getElementById('grid-on').addEventListener('click', function() {
		draw_grid();
		return false;
	});
	document.getElementById('draw-line').addEventListener('click', function() {
		draw_line();
		return false;
	});
	document.getElementById('draw-text').addEventListener('click', function() {
		draw_text();
		return false;
	});
	draw_mario(
		document.getElementById('d')
	);
	
	function draw_mario(cv) {
		var cnt = cv.getContext('2d');
		cnt.drawImage(document.getElementById('mario'),0,0);
		
		var img = new Image;
		img.src = document.getElementById('1up-mush').getAttribute('src');
		
		var size = 64;
		img.onload = function() {
			for (var x=size, y=size; x < cv.getAttribute('width') && y < cv.getAttribute('height'); x+=size, y+=size) {
				cnt.drawImage(img, x, y, size, size);
			};
		};
	};
	function set_resetter(id) {
		var rst = document.getElementById(id);
		rst.addEventListener('click', function() {
			canvas.width = canvas.width;
			grid.width = grid.width;
		});
	};
	function set_drawer () {
		canvas.addEventListener('click', function(evt) {
			var cnt = this.getContext('2d');
			
			cnt.fillStyle = (function() {
				var g = cnt.createLinearGradient(0, 0, 300, 0); // x0, y0, x1, y1
				g.addColorStop(0, 'black');
				g.addColorStop(1, 'white');
				return g;
			})();
			cnt.fillRect(0, 0, 300, 225);
			
			cnt.fillStyle = "black";
			cnt.fillRect(260, 10, 5, 5); // x, y, width, height
			cnt.fillRect(265, 15, 5, 5);
			cnt.fillRect(260, 20, 5, 5);
			cnt.fillRect(270, 20, 5, 5);
			cnt.fillRect(270, 10, 5, 5);
			
			return false;
		});
	}
	function draw_grid() {
		var cnt = grid.getContext("2d");
		for (var x=0.5; x < 500; x+=10) {
			cnt.moveTo(x, 0);
			cnt.lineTo(x, 375);
		}
		for (var y=0.5; y < 375; y+=10) {
			cnt.moveTo(0, y);
			cnt.lineTo(500, y);
		};
		cnt.strokeStyle = "#eee";
		cnt.stroke();
	}
	function draw_text() {
		var cnt = grid.getContext('2d');
		
		cnt.font = "bold 12px sans-serif";
		cnt.fillText('x', 248, 43);
		cnt.fillText('y', 58, 165);
		
		cnt.textBaseline = "top";
		cnt.fillText("(0, 0)", 8, 5);
		
		cnt.textAlign = "right";
		cnt.textBaseline = "bottom";
		cnt.fillText("(500, 375)", 492, 370);
		
		// dots
		cnt.fillRect(0, 0, 3, 3);
		cnt.fillRect(497, 372, 3, 3);
		
	};
	function draw_line() {
		var cnt = grid.getContext('2d');
		
		cnt.beginPath();
		cnt.moveTo(0, 40);
		cnt.lineTo(240, 40);
		cnt.moveTo(260, 40);
		cnt.lineTo(500, 40);
		cnt.moveTo(495, 35);
		cnt.lineTo(500, 40);
		cnt.lineTo(495, 45);
		
		cnt.moveTo(60, 0);
		cnt.lineTo(60, 153);
		cnt.moveTo(60, 173);
		cnt.lineTo(60, 375);
		cnt.moveTo(65, 370);
		cnt.lineTo(60, 375);
		cnt.lineTo(55, 370);
		
		cnt.strokeStyle = "#333";
		cnt.stroke();
	}
});

