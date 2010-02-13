window.onload = function() {
	log("invoke load");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
	
	context.clearRect(0, 0, 172, 172);
	context.save();
	
};

function log (msg) {
	console.log(msg);
}

function $(id) {
	return document.getElementById(id);
}
