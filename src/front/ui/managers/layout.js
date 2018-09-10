import nd from 'multi-dim'

export default class LayoutManager {
    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size
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


