class Polygon {

    /**
     * Creates an instance of Polygon.
     * @param {...Point} vertices 
     * @memberof Polygon
     */
    constructor(...vertices) {
        this.vertices = vertices
        this.context = SCENE.context
        this.center = this.computeCenter()
    }

    /**
     * Render the Polygon with saved context
     * 
     * @memberof Polygon
     */
    render() {
        this.context.beginPath()

        this.vertices.forEach(function (vertex, index) {
            const nextVertex = this.vertices[(index + 1) % this.vertices.length]

            this.context.moveTo(...vertex.coordinates)
            this.context.lineTo(...nextVertex.coordinates)

        }, this)

        this.context.stroke()
        return this
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
        }, new Point(0, 0, 0, 0)) // reduce from origin
            // Combine all coordinate values then average the lot with a scale
            .scale(1 / this.vertices.length)
    }

}
