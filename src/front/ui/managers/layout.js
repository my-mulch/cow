import nd from 'multi-dim'

export default class LayoutManager {
    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size

        const [x, y, z, w] = this.size.toRawArray().map(d => d / 2)

        this.vertices = [
            this.origin.add([x, y, z, 0]),
            this.origin.add([x, y, -z, 0]),
            this.origin.add([x, -y, z, 0]),
            this.origin.add([x, -y, -z, 0]),

            this.origin.add([-x, y, z, 0]),
            this.origin.add([-x, y, -z, 0]),
            this.origin.add([-x, -y, z, 0]),
            this.origin.add([-x, -y, -z, 0]),
        ]

        this.edges = [
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
        ]
    }

    checkBounds(clickEvent) {
        return nd.array([clickEvent.clientX, clickEvent.clientY, 0, 1])
            .subtract(this.origin)
            .norm() < this.size.slice(':2').norm() / 2
    }

    transform(x, y, z) {
        return nd.array([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [x, y, z, 1],
        ])
    }

    scale(x, y, z) {
        return nd.array([
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, z, 0],
            [0, 0, 0, 1],
        ])
    }

    rotate(angle) {
        const c = Math.cos(angle)
        const s = Math.sin(angle)

        return nd.array([
            [c, 0, s, 0],
            [0, 1, 0, 0],
            [-s, 0, c, 0],
            [0, 0, 0, 1],
        ])
    }
}


