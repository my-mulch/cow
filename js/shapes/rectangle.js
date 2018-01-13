
class Rectangle {

    /**
     * Creates an instance of Rectangle.
     * @param {...Points} The vertices of the rectangle  
     * @memberof Rectangle
     */

    constructor(...vertices) {
        this.vertices = vertices

        this.orientation = null
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
     * 
     * 
     * @param {any} angle 
     * @memberof Rectangle
     */
    rotate(angle) {
        /** 
            2 * phi + angle === 180 degrees  
            In other words, we can construct an
            isosceles triangle.

            H is the base of this triangle

            From here, we can see the right triangle
            corresponding to our rotation and glean from 
            it our X and Y coordinate shifts
        **/

        const angleInRads = angle * 2 * Math.PI / 360

        const phi = (Math.PI - angleInRads) / 2
        const H = 2 * this.radius * Math.sin(angleInRads / 2)

        const theta = Math.PI / 2 - phi
        const X = H * Math.cos(theta)
        const Y = H * Math.sin(theta)

        const [A, B, C, D] = this.vertices


        A.shift(X, -Y)
        B.shift(X, Y)
        C.shift(-X, Y)
        D.shift(-X, -Y)


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
                close[AXIS.X] + far[AXIS.X] - close[AXIS.X],
                close[AXIS.Y]
            )

            const I2 = new Point(
                close[AXIS.X],
                close[AXIS.Y] + far[AXIS.Y] - close[AXIS.Y]
            )

            this.context.moveTo(...close.coordinates)
            this.context.lineTo(...I1.coordinates)

            this.moveTo(...I1.coordinates)
            this.lineTo(...far.coordinates)

            this.moveTo(...far.coordinates)
            this.lineTo(...I2.coordinates)

            this.moveTo(...I2.coordinates)
            this.moveTo(...close.coordinates)
        }

        this.context.stroke();
        return this
    }
}

