let pyramdidPainter: PyramidPainter;

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  // P5 Settings
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER);
  frameRate(5);

  // Pyramid Settings
  pyramdidPainter = new PyramidPainter(createVector(windowWidth / 2, windowHeight / 2), windowWidth / 2, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(255);
  pyramdidPainter.drawSquares();
}