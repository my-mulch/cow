import BufferManager from './managers/buffer'
import CameraManager from './managers/camera'
import ProgramManager from './managers/program'
import UniformManager from './managers/uniform'
import AttributeManager from './managers/attribute'

import config from '../config'

export default class GraphicsEngine {
    constructor(options) {
        this.hud = options.hud
        this.canvas = options.canvas

        this.config = config

        this.pan = this.pan.bind(this)
        this.draw = this.draw.bind(this)
        this.zoom = this.zoom.bind(this)
        this.plot = this.plot.bind(this)
        this.buffer = this.buffer.bind(this)

        this.programManager = new ProgramManager({ context: this.context })
        

        /** Create program */
        this.program = ProgramManager.createProgram({
            context: this.context,
            vertex: this.config.VERTEX_SOURCE,
            fragment: this.config.FRAGMENT_SOURCE
        })

        /** Create attributes */
        this.attributes = AttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = UniformManager.createUniforms({
            context: this.context,
            program: this.program
        })

        this.context.useProgram(this.program)
    }

    plot({ vertices, colors, sizes }) {
        this.attributes.a_Color(BufferManager.createBuffer({
            context: this.context, array: colors
        }))

        this.attributes.a_PointSize(BufferManager.createBuffer({
            context: this.context, array: sizes
        }))

        this.attributes.a_Position(BufferManager.createBuffer({
            context: this.context, array: vertices
        }))

        this.config.ACTIVE_VERTICES = vertices.shape[0]

        this.draw()
    }

    draw() {
        const viewMatrix = CameraManager.lookAt(this.config)
        const projMatrix = CameraManager.project(this.config)

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        this.context.clear(this.context.COLOR_BUFFER_BIT)
        this.context.drawArrays(this.context.POINTS, 0, this.config.ACTIVE_VERTICES)
    }

    pan(direction) {
        const { location, render } = Configuration.graphics

        const s = Math.sin(render.PAN_DELTA)
        const c = Math.cos(render.PAN_DELTA)

        const viewMatrix = CameraManager.lookAt(location)
        const viewMatrixInv = viewMatrix.inv()

        const upRot = bb.array({ with: [[1, 0, 0, 0], [0, c, -s, 0], [0, s, c, 0], [0, 0, 0, 1]] })
        const downRot = bb.array({ with: [[1, 0, 0, 0], [0, c, s, 0], [0, -s, c, 0], [0, 0, 0, 1]] })
        const leftRot = bb.array({ with: [[c, 0, s, 0], [0, 1, 0, 0], [-s, 0, c, 0], [0, 0, 0, 1]] })
        const rightRot = bb.array({ with: [[c, 0, -s, 0], [0, 1, 0, 0], [s, 0, c, 0], [0, 0, 0, 1]] })

        function rotate(orientation) {
            viewMatrixInv.T()
                .dot({ with: orientation })
                .dot({ with: viewMatrix.T() })
                .dot({ with: location.TO, result: location.TO })
        }

        switch (direction) {
            case render.directions.UP: rotate(upRot); break
            case render.directions.DOWN: rotate(downRot); break
            case render.directions.LEFT: rotate(leftRot); break
            case render.directions.RIGHT: rotate(rightRot); break
        }

        this.draw()
    }

    zoom(zoomOut) {
        const { location, render } = Configuration.graphics

        const delta = location.FROM
            .subtract({ with: location.TO })
            .multiply({ with: render.ZOOM_DELTA })

        location.TO[zoomOut ? 'add' : 'subtract']({ with: delta, result: location.TO })
        location.FROM[zoomOut ? 'add' : 'subtract']({ with: delta, result: location.FROM })

        this.draw()
    }

}

