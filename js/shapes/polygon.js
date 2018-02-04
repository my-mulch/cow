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
        this.vertices = this.vertices.map(function (vertex, index) {
            const radius = vertex.distanceTo(this.center)
            const [w, h] = vertex.diff(this.center)

            const wAngle = Math.acos(w / radius)
            const hAngle = Math.asin(h / radius)

            return this.center.clone().shift(
                radius * Math.cos(wAngle + Math.sign(h) * theta),
                radius * Math.sin(hAngle + Math.sign(w) * theta)
            )

        }, this)

        return this
    }
    
    /**
     * Zoom the polygon by a scaling factor
     * 
     * @param {double} factor 
     * @returns The zoomed Polygon
     * @memberof Polygon
     */
    zoom(factor) {
        this.vertices = this.vertices.map(function (vertex) {
            const [w, h] = vertex.diff(this.center)

            return this.center.clone().shift(w * factor, h * factor)
        }, this)

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

        this.center = this.computeCenter()
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
