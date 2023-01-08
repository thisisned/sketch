// Initialisation

const coloursbtn = document.querySelector('#coloursbtn');
const basicbtn = document.querySelector('#basicbtn');
const fadebtn = document.querySelector('#fadebtn');
const sketchpad = document.querySelector('#sketchpad');

let res = 16;
gridinit(res);
startbasic(); // On page load start the basic grid with size 16

coloursbtn.addEventListener("click", function() { // Start the random colours grid
	res = parseInt(prompt("How many boxes high / wide do you want the grid? (Max 100)", "e.g. 16"));
	if (res > 0 && res <= 100) { // Ensures input is a valid integer before clearing and resetting
		sketchpad.replaceChildren();
		gridinit(res);
		startcolour();
	}
});
basicbtn.addEventListener("click", function() { // Start basic white-black grid
	res = parseInt(prompt("How many boxes high / wide do you want the grid? (Max 100)", "e.g. 16"));
	if (res > 0 && res <= 100) {
		sketchpad.replaceChildren();
		gridinit(res);
		startbasic();
	}
});
fadebtn.addEventListener("click", function() { // Start fading white-black grid
	res = parseInt(prompt("How many boxes high / wide do you want the grid? (Max 100)", "e.g. 16"));
	if (res > 0 && res <= 100) {
		sketchpad.replaceChildren();
		gridinit(res);
		startfade();
	}
});

function gridinit(dim) {
	let boxsize = 650 / dim; // Gets required box size by dividing grid size by user input value
	console.log(boxsize);
	for (let i = 0; i < dim * dim; i++) { // Makes all the squares you square
		let box = document.createElement('div');
		box.style.height = boxsize + "px";
		box.style.width = boxsize  + "px";
		box.style.opacity = 0;
		box.classList.add("box");
		sketchpad.appendChild(box);
	};
}

function startcolour() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.addEventListener("mouseover", function () {
		let newcol = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
		// Above generates a random hex value
		this.style.backgroundColor = newcol;
		this.style.opacity = "1.2"; // Because default opacity is 0
	}));
}

function startbasic() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.addEventListener("mouseover", function () {
		this.style.opacity = "1.2"; // Changes div from white to black
	}));
}

function startfade() {
	let boxes = document.querySelectorAll('.box');
	boxes.forEach(box => box.addEventListener("mouseover", function () {
		newOpacity = parseFloat(this.style.opacity) + 0.1;
		this.style.opacity = newOpacity; // Adds 10% of opacity, fading white to black
	}));
}