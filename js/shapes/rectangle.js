
class Rectangle {

    /**
     * Creates an instance of Rectangle.
     * @param {...Points} The vertices of the rectangle  
     * @memberof Rectangle
     */

    constructor(...vertices) {
        this.vertices = vertices

        this.center = this.findCenter()
        this.context = null
    }

    /**
     * Sets the internal context to render the rectangle
     * 
     * @param {CanvasContext} context 
     * @memberof Rectangle
     */

    setContext(context) {
        this.context = context

        return this
    }
    /**
     * Computes the center of the rectangle
     * 
     * @memberof Rectangle
     */
    findCenter() {
        const [A, B, C, D] = this.vertices

        X = A.get(AXIS.X) + B.get(AXIS.X) - A.get(AXIS.X)
        return new Point()
    }

    /**
     * 
     * 
     * @param {any} angle 
     * @memberof Rectangle
     */
    rotate(theta) {
        /** 
            2 * phi + theta === pi / 2 === 180 degrees
            In other words, we can construct an
            isosceles triangle with base angles phi

            H is the base of this triangle

            From here, we can see the right triangle
            corresponding to our rotation and glean from 
            it our X and Y coordinate shifts
        **/

        const phi = (Math.PI - theta) / 2
        const H = 2 * this.radius * Math.sin(theta / 2)

        const X = H * Math.cos(Math.PI / 2 - phi)
        const Y = H * Math.sin(Math.PI / 2 - phi)

        const [A, B, C, D] = this.vertices

        A.shift(Y, -X)
        B.shift(Y, X)
        C.shift(-Y, X)
        D.shift(-Y, -X)

        this.render()

        return this
    }

    isFullySpecified() {
        return this.vertices.length === 4
    }

    moveVertices(dimension, amount) {
        this.vertices.forEach(function (vertex) {
            vertex.coordinates[dimension] += amount
        })
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

        return this
    }

    render() {

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.beginPath()

        if (this.isFullySpecified()) {
            const [A, B, C, D] = this.vertices

            this.context.moveTo(...A.coordinates)
            this.context.lineTo(...B.coordinates)

            this.context.moveTo(...B.coordinates)
            this.context.lineTo(...C.coordinates)

            this.context.moveTo(...C.coordinates)
            this.context.lineTo(...D.coordinates)

            this.context.moveTo(...D.coordinates)
            this.context.lineTo(...A.coordinates)
        } else {
            const [close, far] = this.vertices

            const I1 = new Point(
                close.coordinates[AXIS.X] + far.coordinates[AXIS.X] - close.coordinates[AXIS.X],
                close.coordinates[AXIS.Y]
            )

            const I2 = new Point(
                close.coordinates[AXIS.X],
                close.coordinates[AXIS.Y] + far.coordinates[AXIS.Y] - close.coordinates[AXIS.Y]
            )

            this.context.moveTo(...close.coordinates)
            this.context.lineTo(...I1.coordinates)

            this.context.moveTo(...I1.coordinates)
            this.context.lineTo(...far.coordinates)

            this.context.moveTo(...far.coordinates)
            this.context.lineTo(...I2.coordinates)

            this.context.moveTo(...I2.coordinates)
            this.context.lineTo(...close.coordinates)
        }

        this.context.stroke();
        return this
    }
}

