
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

    /**
     *  Renders the point to the canvas
     *
     * @returns
     * @memberof Point
     */
    render() {
        this.context.fillStyle = "rgba(0,0,0,1)";
        this.context.fillRect(...this.coordinates.slice(0, 2), 4, 4);

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
     * Sets a value along a particular axis
     * 
     * @param {any} axis 
     * @returns 
     * @memberof Point
     */
    set(axis, value) {
        this.coordinates[axis] = value
    }
}