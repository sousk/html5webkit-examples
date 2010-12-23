window.onload = function() {
 
    var canvas = document.getElementById('canvas');
    var cc = canvas.getContext('2d');
 
    var radius = 10;
    var y = 30;
    var a = 3;
    var v = 0;
 
    var fps = new FPS(30);
 
    cc.lineWidth = 3;
 
    var loop = function() {
        fps.check();
 
        cc.beginPath();
        cc.clearRect(0, 0, canvas.width, canvas.height);
 
        // 位置の計算
        y += v;
        v += a;
        if(canvas.height < y + radius) {
            y = canvas.height - radius;
            v *= -0.9;
        }
 
        cc.beginPath();
        cc.arc(150, y, radius, 0, Math.PI * 2, false);
        cc.stroke();
 
        cc.fillText('FPS : ' + fps.getFPS(), 10, 20);
 
        setTimeout(loop, fps.getInterval());
    };
 
    loop();
};
