
class Shape {

    /**
     * Creates an instance of Shape.
     * @param {...Point} vertices 
     * @memberof Shape
     */
    constructor(...vertices) {
        this.vertices = vertices
        this.context = null
        this.center = this.computeCenter()
    }

    /**
     * Render the shape with saved context
     * 
     * @memberof Shape
     */
    render() {
        this.context.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT)
        this.context.beginPath()

        this.vertices.forEach(function (currentVertex, index) {
            const nextVertex =
                index < this.vertices.length - 1
                    ? this.vertices[index + 1]
                    : this.vertices[0]

            this.context.moveTo(...currentVertex.coordinates)
            this.context.lineTo(...nextVertex.coordinates)

        }, this)

        this.context.stroke();

        return this
    }

    /**
     * Get the quadrant for a specified vertex
     * 
     * @param {any} vertex 
     * @param {any} center 
     * @returns 
     * @memberof Shape
     */
    getQuadrant(vertex) {
        const [centerX, centerY] = this.center.coordinates
        const [vertexX, vertexY] = vertex.coordinates

        if (centerX > vertexX && centerY > vertexY)
            return CARTESIAN.II

        if (centerX < vertexX && centerY > vertexY)
            return CARTESIAN.I

        if (centerX > vertexX && centerY < vertexY)
            return CARTESIAN.III

        if (centerX < vertexX && centerY < vertexY)
            return CARTESIAN.IV
    }

    /**
     * Rotate the shape by an angle theta
     * 
     * @param {Double} theta 
     * @memberof Shape
     */
    rotate(theta) {
        this.vertices.forEach(function (vertex) {
            const [centerX, centerY] = this.center.coordinates
            const [vertexX, vertexY] = vertex.coordinates

            let X, Y
            switch (this.getQuadrant(vertex)) {
                case CARTESIAN.I:
                    [X, Y] = rotationCoords(vertex, this.center, theta, new Point(centerX, vertexY))
                    vertex.shift(Y, X)
                    break

                case CARTESIAN.II:
                    [X, Y] = rotationCoords(vertex, this.center, theta, new Point(vertexX, centerY))
                    vertex.shift(X, -Y)
                    break

                case CARTESIAN.III:
                    [X, Y] = rotationCoords(vertex, this.center, theta, new Point(centerX, vertexY))
                    vertex.shift(-Y, -X)
                    break

                case CARTESIAN.IV:
                    [X, Y] = rotationCoords(vertex, this.center, theta, new Point(vertexX, centerY))
                    vertex.shift(-X, Y)
                    break
            }
        }, this)

        this.render()
        this.center = this.computeCenter()

        return this
    }

    /**
     * Set the graphics context
     * 
     * @param {CanvasContext} context 
     * @memberof Shape
     */
    setContext(context) {
        this.context = context
    }

    computeCenter() {
        return this.vertices.reduce(function (center, vertex) {
            return center.shift(...vertex.coordinates)
        }, new Point())
            .scale(1 / this.vertices.length)
    }

}
