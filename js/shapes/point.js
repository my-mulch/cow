class Point {

    /**
     * Creates an instance of Point.
     * @param {...Double} dims 
     * @memberof Point
     */
    constructor(...dims) {
        this.coordinates = dims
    }

    /**
     * Calculates the distance between self and point
     * 
     * @param {Point} b
     * @returns 
     * @memberof Point
     */

    distanceTo(b) {
        return Math.sqrt(
            this.coordinates.reduce(function (dist, val, dim) {
                return dist + Math.pow(val - b.coordinates[dim], 2)
            }, 0)
        )
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
                return (val + b.get(dim)) / 2
            })
        )
    }

    /**
     * Moves the point to the specified coordinates
     * 
     * @param {Array} coordinates 
     * @returns 
     * @memberof Point
     */
    move(...coordinates) {
        if (coordinates.length !== this.coordinates.length)
            throw new Error('Dims must be equal!')

        this.coordinates = coordinates

        return this
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
    }

    /**
     * Returns the value of the point along a particular axis
     * 
     * @param {int} axis 
     * @returns 
     * @memberof Point
     */
    get(axis) {
        return this.coordinates[axis]
    }

    toString() {
        return this.coordinates.join(', ')
    }

}