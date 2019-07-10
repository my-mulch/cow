import bb from 'big-box'
import config from '../../config'

export default class CameraManager {
    constructor() {
        this.config = config

        this.UP = this.config.UP_VECTOR
        this.TO = this.config.TO_VECTOR
        this.FROM = this.config.FROM_VECTOR

        const s = Math.sin(this.config.PAN_DELTA)
        const c = Math.cos(this.config.PAN_DELTA)

        this.upRot = bb.array({ with: [[1, 0, 0, 0], [0, c, -s, 0], [0, s, c, 0], [0, 0, 0, 1]] })
        this.downRot = bb.array({ with: [[1, 0, 0, 0], [0, c, s, 0], [0, -s, c, 0], [0, 0, 0, 1]] })
        this.leftRot = bb.array({ with: [[c, 0, s, 0], [0, 1, 0, 0], [-s, 0, c, 0], [0, 0, 0, 1]] })
        this.rightRot = bb.array({ with: [[c, 0, -s, 0], [0, 1, 0, 0], [s, 0, c, 0], [0, 0, 0, 1]] })
    }

    lookAt() {
        const viewMatrix = bb.eye({ shape: [4, 4] })
        const transMatrix = bb.eye({ shape: [4, 4] })

        const f = this.FROM.subtract({ with: this.TO })
        const s = this.UP.cross({ with: f })

        const uf = f.divide({ with: f.norm() })
        const us = s.divide({ with: s.norm() })
        const uu = uf.cross({ with: us })

        viewMatrix.slice({ with: [':3', 0] }).set({ with: us })
        viewMatrix.slice({ with: [':3', 1] }).set({ with: uu })
        viewMatrix.slice({ with: [':3', 2] }).set({ with: uf })

        transMatrix
            .slice({ with: [3, ':3'] })
            .set({ with: this.FROM.multiply({ with: -1 }) })

        return transMatrix.dot({ with: viewMatrix })
    }

    project() {
        const viewingAngle = Math.PI * this.config.VIEWING_ANGLE / 180 / 2
        const reciprocalDepth = 1 / (this.config.FAR - this.config.NEAR)

        const sinOfViewingAngle = Math.sin(viewingAngle)
        const cosOfViewingAngle = Math.cos(viewingAngle)
        const cotOfViewingAngle = cosOfViewingAngle / sinOfViewingAngle

        const projectionMatrix = new Float32Array(16)

        projectionMatrix[0] = cotOfViewingAngle / this.config.ASPECT_RATIO
        projectionMatrix[5] = cotOfViewingAngle
        projectionMatrix[10] = -(this.config.FAR + this.config.NEAR) * reciprocalDepth
        projectionMatrix[11] = -1
        projectionMatrix[14] = -2 * this.config.NEAR * this.config.FAR * reciprocalDepth

        return bb.array({ with: projectionMatrix }).reshape({ shape: [4, 4] })
    }

    rotate({ orientation, viewMatrix, viewMatrixInv }) {
        viewMatrixInv.T()
            .dot({ with: orientation })
            .dot({ with: viewMatrix.T() })
            .dot({ with: this.TO, result: this.TO })
    }

    pan(direction) {
        const viewMatrix = this.lookAt()
        const viewMatrixInv = viewMatrix.inv()

        switch (direction) {
            case this.config.UP_DIRECTION: return this.rotate({ orientation: this.upRot, viewMatrix, viewMatrixInv });
            case this.config.DOWN_DIRECTION: return this.rotate({ orientation: this.downRot, viewMatrix, viewMatrixInv });
            case this.config.LEFT_DIRECTION: return this.rotate({ orientation: this.leftRot, viewMatrix, viewMatrixInv });
            case this.config.RIGHT_DIRECTION: return this.rotate({ orientation: this.rightRot, viewMatrix, viewMatrixInv });
        }
    }

    zoom(zoomOut) {
        const action = zoomOut ? 'add' : 'subtract'
        const delta = this.FROM.subtract({ with: this.TO }).multiply({ with: this.config.ZOOM_DELTA })

        this.TO[action]({ with: delta, result: this.TO })
        this.FROM[action]({ with: delta, result: this.FROM })
    }

}
