import bb from 'big-box'

export default class ParmesanCameraManager {
    static lookAt({ TO, UP, FROM }) {
        const viewMatrix = bb.eye({ shape: [4, 4] })
        const transMatrix = bb.eye({ shape: [4, 4] })

        const f = FROM.subtract({ with: TO })
        const s = UP.cross({ with: f })

        const uf = f.divide({ with: f.norm() })
        const us = s.divide({ with: s.norm() })
        const uu = uf.cross({ with: us })

        viewMatrix.slice({ with: [':3', 0] }).set({ with: us })
        viewMatrix.slice({ with: [':3', 1] }).set({ with: uu })
        viewMatrix.slice({ with: [':3', 2] }).set({ with: uf })

        transMatrix
            .slice({ with: [3, ':3'] })
            .set({ with: FROM.multiply({ with: -1 }) })

        return transMatrix.dot({ with: viewMatrix })
    }

    static project({ ASPECT_RATIO, VIEWING_ANGLE, NEAR, FAR }) {
        const viewingAngle = Math.PI * VIEWING_ANGLE / 180 / 2
        const reciprocalDepth = 1 / (FAR - NEAR)

        const sinOfViewingAngle = Math.sin(viewingAngle)
        const cosOfViewingAngle = Math.cos(viewingAngle)
        const cotOfViewingAngle = cosOfViewingAngle / sinOfViewingAngle

        const projectionMatrix = new Float32Array(16)

        projectionMatrix[0] = cotOfViewingAngle / ASPECT_RATIO
        projectionMatrix[5] = cotOfViewingAngle
        projectionMatrix[10] = -(FAR + NEAR) * reciprocalDepth
        projectionMatrix[11] = -1
        projectionMatrix[14] = -2 * NEAR * FAR * reciprocalDepth

        return bb.array({ with: projectionMatrix }).reshape({ shape: [4, 4] })
    }
}
