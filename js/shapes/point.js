const AXIS = { X: 0, Y: 1 }

class Point {

    /**
     * Creates an instance of Point.
     * @param {...Double} dims 
     * @memberof Point
     */
    constructor(...dims) {
        this.context = SCENE.context
        this.coordinates = dims
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
    * Computes the midpoint of self and point
    * 
    * @param {Point} b 
    * @memberof Point
    */
    static midpoint(a, b) {
        return new Point(
            ...a.coordinates.map(function (coordinate, axis) {
                return (coordinate + b.coordinates[axis]) / 2
            })
        )
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
     * Compute the difference between two points' coordinates
     * 
     * @param {Point} point 
     * @returns The differences in coordinate value along each axis
     * @memberof Point
     */
    diff(point) {
        return this.coordinates.map(function (val, dim) {
            return val - point.coordinates[dim]
        })
    }

    /**
     * Returns the two corners forming a rectangle with the passed point
     * 
     * @param {Point} point 
     * @returns 
     * @memberof Point
     */
    corners(point) {
        return [
            new Point(point.coordinates[AXIS.X], this.coordinates[AXIS.Y]),
            new Point(this.coordinates[AXIS.X], point.coordinates[AXIS.Y]),
        ]
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