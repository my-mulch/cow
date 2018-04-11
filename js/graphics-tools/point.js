
class Point {

    /**
     * Creates an instance of Point.
     * @param {any} coordinates 
     * @memberof Point
     */
    constructor(...coordinates) {
        this.coordinates = coordinates
    }

    render() {
        scene.context.fillStyle = "rgba(0,0,0,1)";
        scene.context.fillRect(this.get(0), this.get(1), 1, 1);
    }

    /**
     * Retrieves a value along a particular axis
     * 
     * @param {any} axis 
     * @returns 
     * @memberof Point
     */
    get(axis) {
        return this.coordinates[axis]
    }

    /**
     * Adds a vector to a point
     * 
     * @param {any} vector 
     * @returns {Point}
     * @memberof Point
     */
    addVector(vector) {
        return new Point(
            ...this.coordinates.map(function (ci, i) {
                return ci + vector.get(i)
            })
        )
    }

    /**
     * Subtracts two points returning a vector
     * 
     * @param {any} point 
     * @returns {Vector}
     * @memberof Point
     */
    subtractPoint(point) {
        return new Vector(
            ...this.coordinates.map(function (ci, i) {
                return ci - point.get(i)
            })
        )
    }

}