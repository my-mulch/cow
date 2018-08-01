class Illustrator {

    /**
     *  Draws the contents of a Pod
     *
     * @memberof Illustrator
     */

    draw(scene, pod) {
        pod.points.forEach(function (point) {
            point.render(scene)
        })

        pod.edges && pod.edges.forEach(function ([i, j]) {
            scene.context.moveTo(...pod.points[i])
            scene.context.lineTo(...pod.points[j])
        })
    }
}

export default new Illustrator()