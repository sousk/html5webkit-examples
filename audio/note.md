# HTML5 audio Support

## sources

* [Apple HTMLMediaElement Class Reference](http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLMediaElementClassReference/HTMLMediaElement/HTMLMediaElement.html)


## Requirements


* iPad 3.2+, iOS 4.0+
 * mp3, mp4 (AAC, mpeg-layer4)


## Mobile Safari Restrictions

* preload and autoplay do not apply on Mobile Safari
* requires user event before loading


### Event handling detail
  
* stops on 'loadstart' status without 'play' or 'load'.
* 'play' and 'load' can only be invoked through user event.

		var audio = make_audio('jump.mp3');
		document.getElementById('play').addEventListener('click', function() {
			audio.play();
		});

### Mulit audio files on iOS

* enable to handle multi audio files
* enable to play 1 audio file only at a time
 * if you play sound-effect while playing bgm, then
  * sound-effect runs
  * bgm is paused
   * receive "paused" event
   * paused property returns false
   * you can continue to play bgm with play method

