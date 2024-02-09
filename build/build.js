var PyramidPainter = (function () {
    function PyramidPainter(position, diameter, granularity) {
        this.position = position;
        this.diameter = diameter;
        this.granularity = granularity;
        this.direction = p5.Vector.random2D().normalize().mult(random(0.25, 1));
    }
    PyramidPainter.prototype.drawSquares = function () {
        var stepSize = this.diameter / (2 * this.granularity);
        var squareSize = this.diameter;
        for (var i = 0; i < this.granularity; i++) {
            squareSize = this.diameter - (stepSize * 2 * i);
            var posOffset = p5.Vector.mult(this.direction, stepSize * i);
            var newPos = p5.Vector.add(this.position, posOffset);
            this.drawSquare(newPos, squareSize);
        }
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