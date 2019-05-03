import bb from 'big-box'

import GraphicsCamera from './camera'

export default class GraphicsEngine {
    constructor(options) {
        this.data = options.data
        this.style = options.style
        this.target = options.target
        this.runtime = options.target.getContext('2d')
        this.bindings = options.bindings

        this.clock = 0

        this.camera = new GraphicsCamera({
            up: bb.array({ with: [[0], [1], [0]] }),
            to: bb.array({ with: [[0], [0], [0]] }),
            from: bb.array({
                with: [
                    [Math.cos(this.clock) * 30],
                    [Math.sin(this.clock) * 30],
                    [50]
                ]
            }),
        })

        this.model = this.camera.lookAt()
    }

    keydown(command) { }
    mousemove(x, y) {
        this.clock += 0.1

        this.camera.from
            .slice({ with: [':3'] })
            .set({
                with: [
                    [Math.cos(this.clock) * 30],
                    [Math.sin(this.clock) * 30],
                    [50]
                ]
            })

        this.model = this.camera.lookAt()
        this.draw()
    }

    draw() {
        if (!this.data.length) return

        this.runtime.fillStyle = this.style.fill
        this.runtime.strokeStyle = this.style.stroke

        const box = this.data[0]
        const vertices = box.dot({ with: this.model }).data

        const wa = window.app.canvas.width / 2
        const ha = window.app.canvas.height / 2

        this.runtime.clearRect(0, 0, wa * 2, ha * 2)
        this.runtime.beginPath()

        for (let v = 0; v < vertices.length; v += 4)
            this.runtime.fillRect(
                vertices[v + 0] + wa,
                vertices[v + 1] + ha,
                1, 1)

        for (const [i, j] of [
            [0, 1], [0, 2], [0, 4], [1, 3],
            [1, 5], [2, 3], [2, 6], [3, 7],
            [4, 5], [4, 6], [5, 7], [6, 7]]) {

            this.runtime.moveTo(vertices[i * 4 + 0] + wa, vertices[i * 4 + 1] + ha)
            this.runtime.lineTo(vertices[j * 4 + 0] + wa, vertices[j * 4 + 1] + ha)
        }

        this.runtime.stroke()
    }
}
