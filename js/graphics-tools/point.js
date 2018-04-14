
class Point {

    /**
     * Creates an instance of Point.
     * @param {any} coordinates 
     * @memberof Point
     */
    constructor(...coordinates) {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')

        this.coordinates = coordinates
    }

    render() {
        this.context.fillStyle = "rgba(0,0,0,1)";
        this.context.fillRect(this.get(0), this.get(1), 1, 1);

        return this
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