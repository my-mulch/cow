class Point {

    constructor(...dims) {
        this.coordindates = dims
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
            this.coordindates.reduce(function (dist, val, dim) {
                return dist + Math.pow(val - b.coordindates[dim], 2)
            }, 0)
        )
    }
    
}