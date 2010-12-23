function log () {
	console.log.apply(console,arguments);
}

$(document).ready(function() {
	var canvas = document.getElementById('canvas');
	
	$('#animate a').click(function() {
		Animate[$(this).text()](canvas);
	});
	
	var q = window.location.search.match(/q=(\w+)/);
	if (q && Animate[q[1]]) {
		Animate[q[1]](canvas);
	};
});

var Animate = {
	rotate: function(canvas) {
		var cc = canvas.getContext('2d');
	  var theta = 0.0;
	  var rectWidth = 100;
	  var rectHeight = 50;

	  // 30FPSでアニメーション
	  var fps = new FPS({target: 60});

	  var loop = function() {
	      fps.check();

	      cc.save();

	      // キャンバスをクリア
	      cc.beginPath();
	      cc.clearRect(0, 0, canvas.width, canvas.height);

	      cc.beginPath();

	      // 回転の中心は原点なので、
	      // 一度図形の中心を原点に移してから回転させて
	      // 元の場所に戻す
	      cc.translate(canvas.width / 2, canvas.height / 2);
	      cc.rotate(theta);
	      cc.translate(-rectWidth / 2, -rectHeight / 2);
	      cc.fillRect(0, 0, rectWidth, rectHeight);

	      cc.restore();

	      cc.fillText('FPS : ' + fps.get(), 10, 20);

	      theta += 5 * Math.PI / 180;
	      if(Math.PI * 2 < theta) {
	          theta = 0;
	      }

	      setTimeout(loop, fps.getInterval());
	  };
		
	  loop();
	}
};

function FPS (c) {
	$.extend(this, $.extend({
		target: 30,
		time_at_frame: Date.now(),
		fps: 0
	}, c));
	this.interval = 1000 / this.target;
	return this;
}
FPS.prototype = {
	check: function() {
		var now = Date.now();
		this.fps = 1000 / (now - this.time_at_frame);
		this.time_at_frame = now;
	},
	get: function() {
		return this.fps.toFixed(2);
	},
	getInterval: function() {
		var elapsed = Date.now() - this.time_at_frame;
		return this.interval - elapsed > 10 ? this.interval - elapsed:10;
	}
};

function old (argument) {
    // メイン処理 ------------------------------------------
 

}