class Solid {

    /**
     * Creates an instance of Solid.
     * @param {...Point} vertices 
     * @memberof Solid
     */
    constructor(vertices, edges) {
        this.vertices = vertices
        this.edges = edges
    }

    /**
     *  Renders the vertices of the Solid
     *
     * @memberof Solid
     */
    render() {
        this.vertices.forEach(function (vertex) {
            vertex.render()
        })

        this.edges && this.edges.forEach(function ([i, j]) {
            scene.context.moveTo(...this.vertices[i])
            scene.context.lineTo(...this.vertices[j])
        }, this)

    }

}
