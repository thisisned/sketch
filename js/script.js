res=16;

$(document).ready(function(){
	gridinit(res);
	startbasic();
	$("#coloursbtn").click(function() {
		var res = parseInt(prompt("How many boxes high / wide do you want this thing?", "e.g. 16"));
		if (res > 0) {
			$("#sketchpad").empty();
			gridinit(res);
			startcolour();
		}
	});
	$("#basicbtn").click(function() {
		var res = parseInt(prompt("How many boxes high / wide do you want this thing?", "e.g. 16"));
		if (res > 0) {
			$("#sketchpad").empty();
			gridinit(res);
			startbasic();
		}
	});
	$("#fadebtn").click(function() {
		var res = parseInt(prompt("How many boxes high / wide do you want this thing?", "e.g. 16"));
		if (res > 0) {
			$("#sketchpad").empty();
			gridinit(res);
			startfade();
		}
	});
});

function gridinit(dim){
	var boxsize = 650/dim;
	console.log(boxsize);
	for (var i = 0; i < dim*dim; i++) { // Make all the squares you square
		$("#sketchpad").append("<div class='box'></div>");
	}
	$(".box").css("height", boxsize);
	$(".box").css("width", boxsize);
}

function startcolour(){
	$(".box").hover(function(){
		var newcol = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
		$(this).css("background-color",newcol);
		$(this).css("opacity","1.2");
	})
}

function startbasic(){
	$(".box").hover(function(){
		$(this).css("opacity","1.2");
	})
}

function startfade(){
	$(".box").hover(function(){
		$(this).css("opacity", "+=0.1");
	});
}