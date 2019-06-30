import bb from 'big-box'

export default class ParmesanGraphicsCameraManager {
    static lookAt({ to, from, up }) {
        to = bb.array({ with: to })
        up = bb.array({ with: up })
        from = bb.array({ with: from })

        const viewMatrix = bb.eye({ shape: [4, 4] })
        const transMatrix = bb.eye({ shape: [4, 4] })

        const f = from.subtract({ with: to })
        const sinOfViewingAngle = up.cross({ with: f })

        const uf = f.divide({ with: f.norm() })
        const us = sinOfViewingAngle.divide({ with: sinOfViewingAngle.norm() })
        const uu = uf.cross({ with: us })

        viewMatrix.slice({ with: [':3', 0] }).set({ with: us })
        viewMatrix.slice({ with: [':3', 1] }).set({ with: uu })
        viewMatrix.slice({ with: [':3', 2] }).set({ with: uf })

        transMatrix
            .slice({ with: [3, ':3'] })
            .set({ with: from.multiply({ with: -1 }) })

        return transMatrix.dot({ with: viewMatrix })
    }

    static project({ angle, aspect, near, far }) {
        const viewingAngle = Math.PI * angle / 180 / 2
        const reciprocalDepth = 1 / (far - near)

        const sinOfViewingAngle = Math.sin(viewingAngle)
        const cosOfViewingAngle = Math.cos(viewingAngle)
        const cotOfViewingAngle = cosOfViewingAngle / sinOfViewingAngle

        const projectionMatrix = new Float32Array(16)

        projectionMatrix[0] = cotOfViewingAngle / aspect
        projectionMatrix[5] = cotOfViewingAngle
        projectionMatrix[10] = -(far + near) * reciprocalDepth
        projectionMatrix[11] = -1
        projectionMatrix[14] = -2 * near * far * reciprocalDepth

        return bb.array({ with: projectionMatrix }).reshape({ shape: [4, 4] })
    }
}
