const AXIS = { X: 0, Y: 1 }

class Point {

    /**
     * Creates an instance of Point.
     * @param {...Double} coordinates 
     * @memberof Point
     */
    constructor(...coordinates) {
        this.context = SCENE.context
        this.coordinates = coordinates
        // 5 -> radius | 0 -> startAngle | Math.PI * 2 -> endAngle 
        this.displayOpts = [5, 0, Math.PI * 2]
    }

    /**
     * Create a new Point instance at location from MouseEvent
     * 
     * @static
     * @param {MouseEvent} event 
     * @returns A new Point with coordinates specified by event
     * @memberof Point
     */
    static createFrom(mouseEvent) {
        return new Point(mouseEvent.clientX, mouseEvent.clientY)
    }

    /**
     * Shifts the point by provided offsets
     * 
     * @param {Array} offsets 
     * @returns 
     * @memberof Point
     */
    shift(...offsets) {
        if (offsets.length !== this.coordinates.length)
            throw new Error('Dims must be equal!')

        this.coordinates = this.coordinates.map(function (val, dim) {
            return val + offsets[dim]
        })

        return this
    }

    /**
     * Calculates the distance between self and point
     * 
     * @param {Point} point
     * @returns 
     * @memberof Point
     */
    distanceTo(point) {
        return Math.sqrt(
            this.diff(point).reduce(function (distance, difference) {
                return distance + Math.pow(difference, 2)
            }, 0)
        )
    }

    /**
     * Multiply each coordinate by specified factor
     * 
     * @param {Double} factor 
     * @memberof Point
     */
    scale(factor) {
        this.coordinates = this.coordinates.map(function (coordinate) {
            return coordinate * factor
        })

        return this
    }




    /**
     * Renders the Point as a circle
     * 
     * @memberof Point
     */
    render() {
        this.context.beginPath()
        this.context.moveTo(...this.coordinates)
        this.context.arc(...this.coordinates, ...this.displayOpts)
        this.context.stroke()

        return this
    }

    /**
     * Checks whether the point is within the given Polygon
     * 
     * @param {Polygon} polygon 
     * @returns 
     * @memberof Point
     */
    isWithin(polygon) {
        const center = polygon.computeCenter()
        const distanceToCenter = this.distanceTo(center)

        return polygon.vertices.every(function (vertex) {
            return vertex.distanceTo(center) >= distanceToCenter
        })
    }

    /**
     * Returns a clone of this Point instance
     * 
     * @returns 
     * @memberof Point
     */
    clone() {
        return new Point(...this.coordinates)
    }
}
