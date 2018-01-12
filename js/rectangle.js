
class Rectangle {

    /**
     * Creates an instance of Rectangle.
     * @param {Point} A 
     * @param {Point} B 
     * @param {Point} C 
     * @param {Point} D 
     * @memberof Rectangle
     */

    constructor(A, B, C, D) {
        this.radius = A.distance(C) / 2
        this.context = null

        this.A = A
        this.B = B
        this.C = C
        this.D = D
    }

    /**
     * Sets the internal context to render the rectangle
     * 
     * @param {CanvasContext} context 
     * @memberof Rectangle
     */

    setContext(context) {
        this.context = context
    }

    rotate(degree) {

    }

    moveVertices(dimension, amount) {
        Object.keys(this).forEach(function (vertex) {
            this[vertex][dimension] += amount
        }, this)
    }

    shift(dir, amount) {
        switch (dir) {
            case DIRECTION.WEST: this.moveVertices(AXIS.X, -amount)
                break
            case DIRECTION.EAST: this.moveVertices(AXIS.X, amount)
                break
            case DIRECTION.NORTH: this.moveVertices(AXIS.Y, -amount)
                break
            case DIRECTION.SOUTH: this.moveVertices(AXIS.Y, amount)
                break
        }

        this.render()
    }
    
    render() {

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.beginPath()

        this.context.moveTo(...this.A.coordindates);
        this.context.lineTo(...this.B.coordindates);

        this.context.moveTo(...this.B.coordindates);
        this.context.lineTo(...this.C.coordindates);

        this.context.moveTo(...this.C.coordindates);
        this.context.lineTo(...this.D.coordindates);

        this.context.moveTo(...this.D.coordindates);
        this.context.lineTo(...this.A.coordindates);

        this.context.stroke();
    }
}

