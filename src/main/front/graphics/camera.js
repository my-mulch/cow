import bb from 'big-box'

export default class GraphicsCamera {
    constructor(options) {
        this.to = options.to
        this.up = options.up
        this.from = options.from
    }
    project() { return bb.eye({ shape: [4, 4] }) }
    lookAt() {
        const viewMatrix = bb.eye({ shape: [4, 4] })
        const transMatrix = bb.eye({ shape: [4, 4] })

        const f = this.from.subtract({ with: this.to })
        const s = this.up.cross({ with: f })

        const uf = f.divide({ with: f.norm() })
        const us = s.divide({ with: s.norm() })
        const uu = uf.cross({ with: us })

        viewMatrix.slice({ with: [':3', 0] }).set({ with: us })
        viewMatrix.slice({ with: [':3', 1] }).set({ with: uu })
        viewMatrix.slice({ with: [':3', 2] }).set({ with: uf })

        transMatrix
            .slice({ with: [3, ':3'] })
            .set({ with: this.from.multiply({ with: -1 }) })

        return transMatrix.dot({ with: viewMatrix })
    }
}
