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
        strokeWeight(2);
        this.drawSquare(this.position, this.diameter);
        pop();
    }

    private drawSquare(pos: p5.Vector, size:number): void {
        square(pos.x, pos.y, size);
    } 
}