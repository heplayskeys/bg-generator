var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.querySelector("#randColor");
var rotateBtn = document.querySelector("#rotateColor");
var rotate;
var rotating = false;
// var btn = document.querySelector("#copyText");

function setColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
};

function randomColor() {
	rR1 = rgbToHex(Math.round(Math.random() * 255));
	rG1 = rgbToHex(Math.round(Math.random() * 255));
	rB1 = rgbToHex(Math.round(Math.random() * 255));
	rColor1 = `#${rR1}${rG1}${rB1}`

	rR2 = rgbToHex(Math.round(Math.random() * 255));
	rG2 = rgbToHex(Math.round(Math.random() * 255));
	rB2 = rgbToHex(Math.round(Math.random() * 255));
	rColor2 = `#${rR2}${rG2}${rB2}`

	body.style.background = `linear-gradient(to right, ${rColor1}, ${rColor2}`;
	color1.value = rColor1;
	color2.value = rColor2;
	css.textContent = body.style.background + ";";
};

function rgbToHex(rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

// function copyText() {
	
// 	document.execCommand("copy");
// 	alert("Background Color Copied to Clipboard:\n" + css.value);
// }

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
randBtn.addEventListener("click", randomColor);
rotateBtn.addEventListener("click", function() {

	if (!rotating) {
		rotating = true;
		rotate = setInterval(randomColor, 1000 * 3);
		rotateBtn.textContent = "Stop";
	}
	else {
		rotating = false;
		clearInterval(rotate);
		rotateBtn.textContent = "Rotate Colors";
	}

});

// btn.addEventListener("click", copyText);

setColor();