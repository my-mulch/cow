class Point {
    /**
     * Creates an instance of Point.
     * @param {Array} dims 
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

    distance(b) {
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
    midpoint(b) {
        return new Point(
            ...this.coordinates.map(function (val, dim) {
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
     * Returns the value of the point along a particular axis
     * 
     * @param {int} axis 
     * @returns 
     * @memberof Point
     */
    get(axis) {
        return this.coordinates[axis]
    }

}