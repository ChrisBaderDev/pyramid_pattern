class PyramidWall {

    private pyramidPainters: PyramidPainter[];
    constructor(columns: number, rows: number) {
        this.pyramidPainters = [];
        let baseWidth = width / columns;
        let baseHeight = height / rows;

        for(let i = 0; i < columns; i++) {
            for(let j = 0; j < rows; j++) {
                let x = (i * baseWidth) + (baseWidth / 2);
                let y = (j * baseHeight) + (baseHeight / 2);
                this.pyramidPainters.push(new PyramidPainter(createVector(x,y), baseWidth, 6));
            }
        }
    }

    public drawWallOfPyramids() {
        this.pyramidPainters.forEach(function(painter) {
            painter.drawSquares();
        });
    }

    public switchRotationModes() {
        this.pyramidPainters.forEach(function(painter) {
            painter.switchRotationMode();
        });
    }
}

