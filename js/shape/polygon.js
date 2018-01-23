class Polygon {

    /**
     * Creates an instance of Polygon.
     * @param {...Point} vertices 
     * @memberof Polygon
     */
    constructor(...vertices) {
        this.vertices = vertices
        this.center = this.computeCenter()
        this.context = CANVAS.context

        this.eraseEachRender = false
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
        this.vertices.forEach(function (vertex, index) {
            const nextVertex = this.vertices[(index + 1) % this.vertices.length]

            this.context.moveTo(...vertex.coordinates)
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
        const center = this.center

        this.vertices.forEach(function (vertex) {
            // const [centerX, centerY] = this.center.coordinates
            // const [vertexX, vertexY] = vertex.coordinates
            const radius = vertex.distanceTo(center)
            const [w, h] = vertex.diff(center)
            const oldAngle = Math.atan(h / w)
            const newAngle = (2 * Math.PI - oldAngle - theta) % Math.PI

            center.clone()

        })

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
     * Compute the center of the Polygon
     * 
     * @returns The center point
     * @memberof Polygon
     */
    computeCenter() {
        return this.vertices.reduce(function (center, vertex) {
            return center.shift(...vertex.coordinates)
        }, new Point(0, 0))
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
