import bb from 'big-box'

import GraphicsSource from './source'
import GraphicsCamera from './camera'
import GraphicsRuntime from './runtime'
import GraphicsBox from './box'

export default class GraphicsEngine {
    constructor(options) {
        this.data = options.data
        this.target = options.target

        this.runtime = new GraphicsRuntime({
            context: this.target.getContext('webgl'),
            source: GraphicsSource,
            boxes: [
                new GraphicsBox({
                    contents: [
                        // x-axis
                        [-1.0, 0, 0, 0, 0, 1],
                        [1.0, 0, 0, 0, 0, 1],
                        // y-axis
                        [0, -1.0, 0, 0, 0, 1],
                        [0, 1.0, 0, 0, 0, 1],
                        // z-axis
                        [0, 0, -1.0, 1, 0, 0],
                        [0, 0, 1.0, 1, 0, 0],
                    ],
                    mode: 'LINES'
                })
            ]
        })

        this.camera = new GraphicsCamera({
            up: bb.array({ with: [[0], [1], [0]] }),
            to: bb.array({ with: [[0], [0], [0]] }),
            from: bb.array({ with: [[0.1], [0.1], [0.25]] }),
        })
    }

    keydown(command) { }
    mousemove(x, y) { }
    draw() { this.runtime.draw() }
}
