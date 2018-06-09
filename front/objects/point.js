
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
}