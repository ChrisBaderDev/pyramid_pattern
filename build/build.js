var PyramidPainter = (function () {
    function PyramidPainter(position, diameter, granularity) {
        this.position = position;
        this.diameter = diameter;
        this.granularity = granularity;
        this.direction = p5.Vector.random2D().normalize().mult(random(0.25, 1));
        this.rotationMode = true;
        this.rotationAngle = 1;
    }
    PyramidPainter.prototype.drawSquares = function () {
        this.direction.rotate(radians(this.rotationAngle));
        var stepSize = this.diameter / (2 * this.granularity);
        var squareSize = this.diameter;
        for (var i = 0; i < this.granularity; i++) {
            squareSize = this.diameter - (stepSize * 2 * i);
            var posOffset = p5.Vector.mult(this.direction, stepSize * i);
            var newPos = p5.Vector.add(this.position, posOffset);
            this.drawSquare(newPos, squareSize);
        }
    };
    PyramidPainter.prototype.switchRotationMode = function () {
        this.rotationMode = !this.rotationMode;
    };
    PyramidPainter.prototype.drawSquare = function (pos, size) {
        push();
        square(pos.x, pos.y, size);
        pop();
    };
    return PyramidPainter;
}());
var PyramidWall = (function () {
    function PyramidWall(columns, rows) {
        this.pyramidPainters = [];
        var baseWidth = width / columns;
        var baseHeight = height / rows;
        for (var i = 0; i < columns; i++) {
            for (var j = 0; j < rows; j++) {
                var x = (i * baseWidth) + (baseWidth / 2);
                var y = (j * baseHeight) + (baseHeight / 2);
                this.pyramidPainters.push(new PyramidPainter(createVector(x, y), baseWidth, 6));
            }
        }
    }
    PyramidWall.prototype.drawWallOfPyramids = function () {
        this.pyramidPainters.forEach(function (painter) {
            painter.drawSquares();
        });
    };
    return PyramidWall;
}());
var pyramidWall;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    createCanvas(400, 400);
    rectMode(CENTER);
    frameRate(60);
    pyramidWall = new PyramidWall(10, 10);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(255);
    pyramidWall.drawWallOfPyramids();
}
function mouseClicked() {
}
//# sourceMappingURL=build.js.map