class Illustrator {

    /**
     *  Draws the contents of a Pod
     *
     * @memberof Illustrator
     */

    draw(scene, pod) {
        pod.step().forEach(function (point) {
            scene.context.fillStyle = "rgba(0,0,0,1)"
            scene.context.fillRect(...this.slice(0, 2), 1, 1)
        })

        pod.edges && pod.edges.forEach(function ([i, j]) {
            scene.context.moveTo(...pod.points[i])
            scene.context.lineTo(...pod.points[j])
        })
    }
}

export default new Illustrator()