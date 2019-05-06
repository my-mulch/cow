import bb from 'big-box'

import GraphicsBoxes from './common/boxes'
import GraphicsSource from './common/source'
import GraphicsCamera from './camera'
import GraphicsRuntime from './runtime'

export default class GraphicsEngine {
    constructor(options) {
        this.data = options.data
        this.target = options.target

        this.runtime = new GraphicsRuntime({
            context: this.target.getContext('webgl'),
            source: GraphicsSource,
            boxes: GraphicsBoxes
        })

        this.camera = new GraphicsCamera({
            up: bb.array({ with: [[0], [1], [0]] }),
            to: bb.array({ with: [[0], [0], [0]] }),
            from: bb.array({ with: [[0.1], [0.1], [0.25]] }),
        })
    }

    keydown(command) { }
    mousemove(x, y) { }
    mousedown(x, y) { console.log([x, y]) }

    draw(options = {}) {
        this.runtime.setModelMatrices({
            u_ViewMatrix: this.camera.lookAt(options.lookAt),
            u_ProjMatrix: this.camera.project(options.project)
        })

        this.runtime.draw()
    }
}
