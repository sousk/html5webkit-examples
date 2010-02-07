function log (msg) {
	console.log(msg);
}
function fetch_data_transfer (evt) {
	return evt.originalEvent.dataTransfer;
}
function log_effect_allowed (evt) {
	log(fetch_data_transfer(evt).effectAllowed);
}
function mark_current_target (evt, targets) {
	var klass = "starred";
	if (targets.is(".starred")) {
		targets.removeClass(klass);
	}
	if (evt) {
		var tg = $(evt.currentTarget);
		if (tg.is(".target")) {
			tg.addClass(klass);
		}
	}
}

$(document).ready(function() {
	
	var 
		drops = $('img, .draggable-txt'),
		targets = $('.target'),
		dragging = $('img').get(0);
	
	// $(document).bind('dragstart', function(evt) {
	//   evt.dataTransfer.setDragImage(dragging, 0, 0);
	// });
	document.ondragstart = function(e) {
	  // e.dataTransfer.setData('Text', 'Cat');
	  e.dataTransfer.setDragImage(dragging, 0, 0);
	};
	
	drops
		.bind('dragstart', function(evt) {
			log("start");
			log(evt);
			// evt.originalEvent.dataTransfer.setDragImage(dragging.get(0),0,0);
			// var obj = evt.originalEvent.dataTransfer;
			// for(var k in obj) {
			// 	log(k +"::"+obj[k]);
			// }
			// return false; stops dragging
		})
		.bind('drag', function(evt) {
			// log("dragging, count-up while moving");
			return false; // no meaning
		})
		.bind('dragend', function(evt) {
			log("dragend");
			mark_current_target(null, targets);
			return false; // no meaning
		});
	
	targets
		.bind('dragover', function(evt) {
			// mark_current_target(evt, targets);
			log("count-up while overed");
			// shows [+] button
			return false;
		})
		.bind('dragenter', function(evt) {
			mark_current_target(evt, targets);
			log("entered");
			return false;
		})
		.bind('dragleave', function(evt) {
			mark_current_target(null, targets);
			log("leaved");
			return false;
		})
		.bind('drop', function(evt) {
			log("droped");
			log(evt);
			// drop.html(
				 // drop.html() + '<p>' + evt.dataTransfer.getData('Text') + '</p>'
			// );
			// return false;
		});
});
