var preventDefault = true;

var g = {
  dtx2D: null,
  ctx2D: null
};
var ants = [ ];
var ants_n = 0;

window.onresize = win.feed;
window.onload = function(){
  setTimeout(function() { 
    g.dtx2D = document.createElement("canvas"); 
    g.ctx2D = g.dtx2D.getContext('2d'); 
    log(g.ctx2D);
  }, 100);
  // setTimeout( init.swatch, 250 );
  setTimeout( function() {
  return;
     data2pattern(ants, [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQYlYXOtw0AMAzEQO6/NN04QAlW+cdCAALmOzsftGjAHGRUX9DhDSbcNmMJuocXA4afYTYwTaEAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQYlYXPsQ0AMAjEQO+/tFOkIALxQaI6FwDgu334YAUL3iCgQ/tNJFQr2L4hoeoBA4afYdiStBMAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQYlWP4DwUMDAwoGC6OTxIqh1sSQwEWSYQCHJIQBXgk/2PIoruJAZ/k/////wMAA4afYVpnmEkAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYlWP4jwYYGBhQMT7J////IxRgk4QrwCUJlcMtiaEAh4PxSkIU4PMqAAOGn2Gql3FAAAAAAElFTkSuQmCC"
    ]);
   }, 200);
};
