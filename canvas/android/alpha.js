var bitmap;
(function() {
	var img = new Image();
	img.onload = function() {
		var c = document.createElement('canvas');
		var ctx = c.getContext('2d');
		c.width = 20; //img.width;
		c.height = 20; //img.height;
		ctx.drawImage(img,0,0, 20,20);
		bitmap = c;
		
		document.body.appendChild(bitmap);
		main();
	};
	img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAsVBMVEX/////8wD/8gD/8wD/7wD/8wD/8gD/9AD/8gD/8QD/8gD/8gD/7wD/8gD/oxz/8wD/pB3/ox3/8gD/pB7/pB7/pSD/7QDNvQD/pR3/pB7/pyCxoQCwoAC7fRBZSgWSggD/0ADuqgCikQAzJg4+Mgz/2QD/vAD/wQD/ywD/rRUoHBB0ZQD/7QBLPQrz4QD/xgD/1QD/4wDBsADj0QD/6QD/3wD/qRr/twkdEhH/pB7/8gDx/8oqAAAAHHRSTlMAz++AEEC/MGBwUK8gn0CPv1Df3+8wz5+vnyDPAsI/uAAAAYBJREFUGBmFwYVio0AUBdA7AvGk7bpLJe7AzLv//2ELbANEhp6DS/2RYkHHvSHCug9sUF3c1lG8oCLc0NW8ZnCly5sGFuciBiiLJqsZMkLTgGE91CK2GaISs02MnDWTONZsFwEwfMvmcBwAUGSSpmnCyt+F90vW1t5/t7DcSmm+TVg6+MKSJ0fv/WMXEZ28ynYs/PSFBU8OPvcJfTqp7Jhb+xJPjj73DYZOKtmK5NIXnlh59N4fYeiktiW5efLeLw7MrXYvzrkf3q+JHp3U5sxtfq2XR+b2mZT+HDZExJk0JGx4zqS0J4mIO2lIeeZ5OhdxzAHcS0PKK+mKOUAxk9qeAcCIU6kxQAF9plKZMiAGoPkiJykDDADDVSb/bRkSAbCaiZPCjCEaBUNy/3u2Sxg0QUnxLUOUhprtDF51NNsoVDqaYcqi1lEMURZnjOYt2uCSNZqXHozFLf3JR1bUoNdB0Fgy56LIuUzGaDMWkXfAnYh8Rasv8v4e+PD57h5n/gFBm/u5oM3+TgAAAABJRU5ErkJggg==";	
})();

function main() {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.lineCap = "round";
ctx.globalCompositeOperation = 'source-over';

ctx.fillStyle = "rgba(0,0,0,0.502)";

var x,y;
function assign(args, fn, colorTransform) {
	fn.apply(this, [ctx, colorTransform].concat(args));
}

ctx.beginPath();

assign([144.2, -30.5], function (ctx, c, x, y) {
	ctx.moveTo(x, y);
});
assign([140.8, -30.65], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([139.85, -30.3], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([136.05, -32.15, 128.8, -31.5], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([119.55, -30.75, 104.65, -25.95], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([88.5, -20.85, 47.7, -3.2], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([24.6, 6.25], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([9.6, 12, 3.5, 13.7], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-23.95, 19.4], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([-33.65, 21.65, -38.75, 23.7], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-43.75, 24.35, -50.65, 26.7], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-58.7, 29.4, -64.65, 32.75], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-71, 36.15, -71, 38.3], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-71.05, 38.8], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([-71.05, 40.6, -69.85, 41.15], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-59.3, 42], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([-49.4, 42.3, -43.5, 41.95], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-51.3, 52.9], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([-59.25, 64.9, -57.1, 66.45], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-50.5, 68.2, -39.5, 68.25], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-17.25, 68.25, 5.25, 59.55], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-4.2, 73.2], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([-12.65, 87.1, -8.2, 88.9], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([-3.7, 90.5, 12.45, 85.65], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([20.55, 83.15, 27.75, 80.3], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([29.3, 82.9], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([31.3, 85.95, 33.9, 88.25], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([40.5, 93.95, 48.55, 93.55], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([53.3, 92.8], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([64.95, 89.75, 71.6, 74], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([76.65, 61.75, 76.35, 51.6], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([77.65, 52.4], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([79.1, 53.05, 79.75, 52.75], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([80.35, 53, 85.7, 43.1], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([92.1, 30.6, 94.75, 27.2], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([98.95, 22.05, 105.75, 17.6], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([112.85, 12.85, 116.35, 13.3], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([120.2, 16.85], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([125.25, 19.9, 131.45, 17.55], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([138.65, 14.6, 144.8, -2.2], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([147.9, -11.3, 148.6, -17.9], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([148.75, -22.65], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([148.65, -25.2, 148.15, -27.35], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([147.6, -29.85, 144.2, -30.5], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([], function (ctx) {
	ctx.fill();
});

assign([bitmap], function (ctx, colorTransform, bitmap) {
	var repetition = "repeat"; // Sadly, repeat can only be designated.
	var img;
	if(colorTransform && colorTransform.length > 0) {
		img = JJ.transformImageColor(colorTransform, bitmap);
	} else {
		img = bitmap;
	}
	var pat = ctx.createPattern(img, repetition);
	// comment out to avoid android-bug
	// ctx.fillStyle = "rgba(0,0,0,1.00)";
	ctx.fillStyle = pat;
});

// ctx.transform(1, 1, 0, 0, -1980 / 20, -1220 / 20);


assign([250, 154], function (ctx, c, x, y) {
	ctx.moveTo(x, y);
});
assign([250, 0], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([0, 0], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([0, 154], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([250, 154], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([], function (ctx) {
	ctx.fill();
});


// ctx.transform(1, 1, 0, 0, 1980 / 20, 1220 / 20);
ctx.fillStyle = 'rgba(255,255,255,1.000)';

ctx.beginPath();

assign([63.3, 51.05], function (ctx, c, x, y) {
	ctx.moveTo(x, y);
});
assign([63.75, 54.05, 63.1, 59.25], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([64.35, 54.95, 64.8, 50.35], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([65.7, 41.15, 61.65, 39.55], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([57.75, 37.95, 52.9, 42], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([49.9, 44.45, 48, 47.45], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([45.85, 50.55, 45.8, 52.95], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([46.5, 50.8, 49.1, 48.35], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([48.3, 49.25, 47.75, 50.95], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([47.35, 52.45], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([48.3, 51, 50.3, 49.2], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([49.4, 50.9, 49.25, 52.45], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([52.05, 50], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([50.9, 52.75], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([51.8, 51.55, 53.05, 50.55], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([55.55, 48.55, 57.15, 49.7], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([58.25, 50.85, 58.15, 53.85], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([57.75, 56.9], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([59.4, 54.85], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([59.25, 56], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([60.25, 54.6], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([61.25, 52.9, 61.55, 51.3], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([61.65, 52.25, 61.15, 54.6], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([60.7, 56.75], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([61.95, 54.95], function (ctx, c, x, y) {
	ctx.lineTo(x, y);
});
assign([63.25, 52.8, 63.3, 51.05], function (ctx, c, cx, cy, x, y) {
	ctx.quadraticCurveTo(cx, cy, x, y);
});
assign([], function (ctx) {
	ctx.fill();
});


































}