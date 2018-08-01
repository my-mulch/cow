
export default class Point extends Array {
    /**
     *  Renders the point to the canvas
     *
     * @returns
     * @memberof Point
     */
    render(scene) {
        scene.context.fillStyle = "rgba(0,0,0,1)"
        scene.context.fillRect(...this.slice(0, 2), 1, 1)

        return this
    }
}
