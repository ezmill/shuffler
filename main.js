var canvas, ctx;
var image;
var w = window.innerWidth;
var h = window.innerHeight;
setup();

function setup(){
	canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	document.body.appendChild(canvas);
	ctx = canvas.getContext("2d");
	image = new Image();
	image.onload = function (){
		ctx.drawImage(image, 0, 0);
	}
	image.src = "img/colorwave.png";
	tick();
}
function draw(){
	var randW = Math.random()*w;
	var randH = Math.random()*h;
	var randPart = ctx.getImageData(randW, randH, 100, 100);
	var randData = randPart.data;
	var newRandW = Math.random()*w;
	var newRandH = Math.random()*h;
	ctx.putImageData(randPart, newRandW, newRandH );
}
function tick(){
	window.requestAnimationFrame(tick);
	draw();
}

