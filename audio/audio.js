function play_audio(audio) {
	audio.play();
}

function make_audio(src) {
	console.log("invoked");
	!src && (src = 'jump.mp3');
	
	var audio = new Audio;
	"loadstart,canplay,load,abort,error,durationchange,playing,pause,ended".split(",").forEach(function(key) {
      audio.addEventListener(key, function(evt) {
				console.log(["----->",key].join(', '));
      });
  });
	
	audio.src = src;
	return audio;
}
