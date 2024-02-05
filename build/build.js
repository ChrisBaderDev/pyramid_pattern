var PyramidPainter = (function () {
    function PyramidPainter(position, diameter, granularity) {
        this.position = position;
        this.diameter = diameter;
        this.granularity = granularity;
    }
    PyramidPainter.prototype.drawSquares = function () {
        push();
        noFill();
        strokeWeight(2);
        this.drawSquare(this.position, this.diameter);
        pop();
    };
    PyramidPainter.prototype.drawSquare = function (pos, size) {
        square(pos.x, pos.y, size);
    };
    return PyramidPainter;
}());
var pyramdidPainter;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    frameRate(30);
    pyramdidPainter = new PyramidPainter(createVector(windowWidth / 2, windowHeight / 2), windowWidth / 2, 10);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(255);
    pyramdidPainter.drawSquares();
}
//# sourceMappingURL=build.js.map