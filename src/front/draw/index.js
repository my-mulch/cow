class Illustrator {

    /**
     *  Draws a shape with vertices and edges
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