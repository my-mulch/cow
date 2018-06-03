
class Point {

    /**
     * Creates an instance of Point.
     * @param {...int} coordinates 
     * @memberof Point
     */
    constructor(...coordinates) {
        this.coordinates = coordinates
    }

    /**
     *  Renders the point to the canvas
     *
     * @returns
     * @memberof Point
     */
    render() {
        scene.context.fillStyle = "rgba(0,0,0,1)";
        scene.context.fillRect(...this.coordinates.slice(0, 2), 1, 1);

        return this
    }

    /**
     * Retrieves a value along a particular axis
     * 
     * @param {int} axis 
     * @returns 
     * @memberof Point
     */
    get(axis) {
        return this.coordinates[axis]
    }

    /**
     * Sets a value along a particular axis
     * 
     * @param {int} axis
     * @param {double} value 
     * @returns 
     * @memberof Point
     */
    set(axis, value) {
        this.coordinates[axis] = value
    }
}