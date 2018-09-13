import nd from 'multi-dim'

export default class Shape {
    constructor(vertices, edges) {
        this.vertices = vertices
        this.edges = edges
    }

    static cuboid(dimensions, origin) {
        const [x, y, z, w] = dimensions.toRawArray()

        const vertices = nd.array([
            [...origin.add([0, 0, 0, 0])],
            [...origin.add([0, 0, z, 0])],
            [...origin.add([0, y, 0, 0])],
            [...origin.add([0, y, z, 0])],

            [...origin.add([x, 0, 0, 0])],
            [...origin.add([x, 0, z, 0])],
            [...origin.add([x, y, 0, 0])],
            [...origin.add([x, y, z, 0])],
        ])

        const edges = nd.array([
            [0, 1],
            [0, 2],
            [0, 4],
            [1, 3],
            [1, 5],
            [2, 3],
            [2, 6],
            [3, 7],
            [4, 5],
            [4, 6],
            [5, 7],
            [6, 7],
        ])

        return new Shape(vertices, edges)
    }

    render(scene) {
        for (const [i, j] of this.edges) {
            scene.context.moveTo(...this.vertices.slice(i))
            scene.context.lineTo(...this.vertices.slice(j))
        }
    }
}
