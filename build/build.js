var PyramidPainter = (function () {
    function PyramidPainter(position, diameter, granularity) {
        this.position = position;
        this.diameter = diameter;
        this.granularity = granularity;
    }
    PyramidPainter.prototype.drawSquares = function () {
        push();
        noFill();
        strokeWeight(3);
        var stepVector = createVector(random(-1, 1), random(-1, 1));
        stepVector = stepVector.normalize();
        var stepSize = this.diameter / 2 / this.granularity;
        stepVector = stepVector.mult(stepSize);
        for (var i = 0; i < this.granularity; i++) {
            this.drawSquare(p5.Vector.add(this.position, p5.Vector.mult(stepVector, i)), this.diameter - (i * stepSize));
        }
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
    frameRate(5);
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