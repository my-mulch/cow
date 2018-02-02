class Polygon {

    /**
     * Creates an instance of Polygon.
     * @param {...Point} vertices 
     * @memberof Polygon
     */
    constructor(...vertices) {
        this.vertices = vertices
        this.center = this.computeCenter()
        this.context = SCENE.context
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
     * Rotate the Polygon by an angle theta
     * 
     * @param {Double} theta 
     * @returns The Polygon instance
     * @memberof Polygon
     */
    rotate(theta) {
        this.vertices = this.vertices.map(function (vertex) {
            const radius = vertex.distanceTo(this.center)
            const [w, h] = vertex.diff(this.center)
            const angle = Math.atan(h / w)

            let X = Math.sign(w) * Math.abs(radius * Math.cos(angle + theta))
            let Y = Math.sign(h) * Math.abs(radius * Math.sin(angle + theta))

            if (angle + theta > Math.PI / 2) X *= -1
            else if (angle < 0 && (angle + theta) > 0) Y *= -1

            return this.center.clone().shift(X, Y)

        }, this)

        this.center = this.computeCenter()
        return this
    }

    zoom(factor) {
        this.vertices = this.vertices.map(function (vertex) {
            return vertex.scale(factor)
        })
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
        }, new Point(0, 0)) // reduce from origin
            // Combine all coordinate values then average the lot with a scale
            .scale(1 / this.vertices.length)
    }
}
