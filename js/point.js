class Point {

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

    move(...coordinates) {
        if (coordinates.length !== this.coordinates.length)
            throw new Error('Dims must be equal!')

        this.coordinates = coordinates

        return this
    }

    shift(...offsets) {
        if (coordinates.length !== this.coordinates.length)
            throw new Error('Dims must be equal!')

        this.coordinates.map(function (val, dim) {
            return val + offsets[dim]
        })

        return this
    }

}