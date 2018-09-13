import nd from 'multi-dim'

export default class Layout {
    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size
        this.shape = layout.shape(this.size, this.origin)
    }

    checkBounds(clickEvent) {
        return nd.array([clickEvent.clientX, clickEvent.clientY, 0, 1])
            .subtract(this.origin)
            .norm() < this.size.slice(':2').norm() / 2
    }

    static translate(x, y, z) {
        return nd.array([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [x, y, z, 1],
        ])
    }

    static scale(x, y, z) {
        return nd.array([
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, z, 0],
            [0, 0, 0, 1],
        ])
    }

    static rotate(angle, axis) {
        const c = Math.cos(angle)
        const s = Math.sin(angle)

        if (axis === 'x')
            return nd.array([
                [1, 0, 0, 0],
                [0, c, s, 0],
                [0, -s, c, 0],
                [0, 0, 0, 1],
            ])

        if (axis === 'y')
            return nd.array([
                [c, 0, s, 0],
                [0, 1, 0, 0],
                [-s, 0, c, 0],
                [0, 0, 0, 1],
            ])

        if (axis === 'z')
            return nd.array([
                [c, s, 0, 0],
                [-s, c, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ])
    }
}


