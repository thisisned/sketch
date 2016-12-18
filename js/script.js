res=16;

$(document).ready(function(){
	gridinit(res);
	startbasic(); // On page load start the basic grid with size 16

	$("#coloursbtn").click(function() { // Start the random colours grid
		var res = parseInt(prompt("How many boxes high / wide do you want this thing?", "e.g. 16"));
		if (res > 0) { // Ensures input is a valid integer before clearing and resetting
			$("#sketchpad").empty();
			gridinit(res);
			startcolour();
		}
	});
	$("#basicbtn").click(function() { // Start basic white-black grid
		var res = parseInt(prompt("How many boxes high / wide do you want this thing?", "e.g. 16"));
		if (res > 0) {
			$("#sketchpad").empty();
			gridinit(res);
			startbasic();
		}
	});
	$("#fadebtn").click(function() { // Start fading white-black grid
		var res = parseInt(prompt("How many boxes high / wide do you want this thing?", "e.g. 16"));
		if (res > 0) {
			$("#sketchpad").empty();
			gridinit(res);
			startfade();
		}
	});
});

function gridinit(dim){
	var boxsize = 650/dim; // Gets required box size by dividing grid size by user input value
	console.log(boxsize);
	for (var i = 0; i < dim*dim; i++) { // Makes all the squares you square
		$("#sketchpad").append("<div class='box'></div>");
	}
	$(".box").css("height", boxsize); // Sets box size once divs are created (I'm sure there's a neater way to do this)
	$(".box").css("width", boxsize);
}

function startcolour(){
	$(".box").hover(function(){
		var newcol = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
		/* Above generates a random hex value - full disclosure, I have very little idea how it works but promise I will someday learn */
		$(this).css("background-color",newcol);
		$(this).css("opacity","1.2"); // Because default opacity is 0
	})
}

function startbasic(){
	$(".box").hover(function(){
		$(this).css("opacity","1.2"); // Changes div from white to black
	})
}

function startfade(){
	$(".box").hover(function(){
		$(this).css("opacity", "+=0.1"); // Adds 10% of opacity, fading white to black
	});
}