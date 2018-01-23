const AXIS = { X: 0, Y: 1 }

class Point {

    /**
     * Creates an instance of Point.
     * @param {...Double} dims 
     * @memberof Point
     */
    constructor(...dims) {
        this.context = CANVAS.context
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
            ...a.coordinates.map(function (val, dim) {
                return (val + b.coordinates[dim]) / 2
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
     * Multiply each dimension by specified factor
     * 
     * @param {Double} factor 
     * @memberof Point
     */
    scale(factor) {
        this.coordinates = this.coordinates.map(function (val) {
            return val * factor
        })

        return this
    }

    /**
     * Compute the difference between two points
     * 
     * @param {Point} point 
     * @returns The differences along each axis
     * @memberof Point
     */
    diff(point) {
        return this.coordinates.map(function (val, dim) {
            return val - point.coordinates[dim]
        })
    }

    corners(point) {
        return [
            new Point(point.coordinates[AXIS.X], this.coordinates[AXIS.Y]),
            new Point(this.coordinates[AXIS.X], point.coordinates[AXIS.Y]),
        ]
    }

    render() {
        this.context.beginPath()
        this.context.moveTo(...this.coordinates)
        this.context.arc(...this.coordinates, ...this.displayOpts)
        this.context.stroke()
    }
}
