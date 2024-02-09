class PyramidPainter {
    private position: p5.Vector;
    private diameter: number;               // Diameter of the outest square
    private granularity: number;            // Amount of inner squares
    private direction: p5.Vector;

    constructor(position: p5.Vector, diameter: number, granularity: number) {
        this.position = position;
        this.diameter = diameter;
        this.granularity = granularity;
        this.direction = p5.Vector.random2D().normalize().mult(random(0.25, 1));
    }

    public drawSquares(): void {
        let stepSize = this.diameter / (2 * this.granularity)
        let squareSize = this.diameter;
        for (let i = 0; i < this.granularity; i++) {
            squareSize = this.diameter - (stepSize * 2 * i);
            let posOffset = p5.Vector.mult(this.direction, stepSize * i);
            let newPos = p5.Vector.add(this.position, posOffset);
            this.drawSquare(newPos, squareSize);
        }
    }

    private drawSquare(pos: p5.Vector, size:number): void {
        square(pos.x, pos.y, size);
    } 
}