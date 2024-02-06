class PyramidPainter {
    private position: p5.Vector;
    private diameter: number;               // Diameter of the outest square
    private granularity: number;            // Amount of inner squares

    constructor(position: p5.Vector, diameter: number, granularity: number) {
        this.position = position;
        this.diameter = diameter;
        this.granularity = granularity;
    }

    public drawSquares(): void {
        push();
        noFill();
        strokeWeight(3);
        let stepVector = createVector(random(-1, 1), random(-1, 1));
        stepVector = stepVector.normalize();
        let stepSize = this.diameter / 2 / this.granularity;
        stepVector = stepVector.mult(stepSize);
        for(let i = 0; i < this.granularity; i++) {
            this.drawSquare(p5.Vector.add(this.position, p5.Vector.mult(stepVector, i)), this.diameter - (i * stepSize));
        }
        pop();
    }

    private drawSquare(pos: p5.Vector, size:number): void {
        square(pos.x, pos.y, size);
    } 
}