let pyramidWall: PyramidWall;

// P5 WILL AUTOMATICALLY USE GLOBAL MODE IF A DRAW() FUNCTION IS DEFINED
function setup() {
  console.log("🚀 - Setup initialized - P5 is running");

  // P5 Settings
  createCanvas(400, 400)
  rectMode(CENTER);
  frameRate(60);

  // Pyramid Settings
  pyramidWall = new PyramidWall(10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(255);
  pyramidWall.drawWallOfPyramids();
}

function mouseClicked() {
  
}