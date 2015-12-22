function windowControl(){
	var gui = require('nw.gui');
	var win = gui.Window.get();
	win.on('close', function() {
 		this.hide(); // Pretend to be closed already
  		console.log("We're closing...");
  		this.close(true);
	});

	win.close();
}