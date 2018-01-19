
class Polygon {

    /**
     * Creates an instance of Polygon.
     * @param {...Point} vertices 
     * @memberof Polygon
     */
    constructor(...vertices) {
        this.vertices = vertices
        this.context = null
        this.center = this.computeCenter()

        this.eraseEachRender = true
    }

    /**
     * Render the Polygon with saved context
     * 
     * @memberof Polygon
     */
    render() {
        if (this.eraseEachRender)
            this.context.clearRect(0, 0, CANVAS.width, CANVAS.height)

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
     * @returns The cartesian quadrant in which the vertex resides
     * @memberof Polygon
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
     * Rotate the Polygon by an angle theta
     * 
     * @param {Double} theta 
     * @returns The Polygon instance
     * @memberof Polygon
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
     * Shift the polygon by point coordinates
     * 
     * @param {Point} point 
     * @returns The Polygon instance
     * @memberof Polygon
     */
    shift(point) {
        this.vertices.forEach(function (vertex) {
            vertex.shift(...point.coordinates)
        })

        return this.render()
    }

    /**
     * Set the graphics context
     * 
     * @param {CanvasContext} context 
     * @returns The Polygon instance
     * @memberof Polygon
     */
    setContext(context) {
        this.context = context

        return this
    }

    /**
     * Compute the center of the Polygon
     * 
     * @returns The center point
     * @memberof Polygon
     */
    computeCenter() {
        return this.vertices.reduce(function (center, vertex, index) {
            return center.shift(...vertex.coordinates)
        }, ORIGIN.clone())
            // Reduce the vertices by adding combining all coordinate values
            // then average the lot with a scale
            .scale(1 / this.vertices.length)
    }

}


/**
 * Provide the cartesian X,Y coordinates for a rotation
 * 
 * @param {Point} vertex The point we wish to rotate
 * @param {Point} center The point around which to rotate
 * @param {Double} angle The angle we wish to rotate
 * @param {Point} support The point creating a right triangle with vertex
 * @returns X,Y coordinates in cartesian space
 */
function rotationCoords(vertex, center, angle, support) {
    const radius = center.distanceTo(vertex)
    const H = 2 * radius * Math.sin(angle / 2)
    const phi = (Math.PI - angle) / 2

    const oppSide = support.distanceTo(center)
    const oppAngle = Math.asin(oppSide / radius)

    const alpha = Math.PI - oppAngle - phi

    X = H * Math.sin(alpha)
    Y = H * Math.cos(alpha)

    return [X, Y]
}
