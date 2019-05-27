import bb from 'big-box'

export default class GraphicsCameraManager {
    static lookAt({ to, from, up }) {
        to = bb.array({ with: to })
        up = bb.array({ with: up })
        from = bb.array({ with: from })

        const viewMatrix = bb.eye({ shape: [4, 4] })
        const transMatrix = bb.eye({ shape: [4, 4] })

        const f = from.subtract({ with: to })
        const s = up.cross({ with: f })

        const uf = f.divide({ with: f.norm() })
        const us = s.divide({ with: s.norm() })
        const uu = uf.cross({ with: us })

        viewMatrix.slice({ with: [':3', 0] }).set({ with: us })
        viewMatrix.slice({ with: [':3', 1] }).set({ with: uu })
        viewMatrix.slice({ with: [':3', 2] }).set({ with: uf })

        transMatrix
            .slice({ with: [3, ':3'] })
            .set({ with: from.multiply({ with: -1 }) })

        return transMatrix.dot({ with: viewMatrix })
    }
}
