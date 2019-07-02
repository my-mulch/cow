import ParmesanGraphicsBufferManager from './managers/buffer'
import ParmesanGraphicsCameraManager from './managers/camera'
import ParmesanGraphicsProgramManager from './managers/program'
import ParmesanGraphicsUniformManager from './managers/uniform'
import ParmesanGraphicsAttributeManager from './managers/attribute'

import ParmesanGraphicsSource from './source/project'

export default class ParmesanGraphicsEngine {
    constructor(options) {
        this.state = options.state
        this.target = document.querySelector('canvas')
        this.context = this.target.getContext('webgl')

        this.draw = this.draw.bind(this)
        this.zoom = this.zoom.bind(this)
        this.plot = this.plot.bind(this)
        this.buffer = this.buffer.bind(this)

        /** Create program */
        this.program = ParmesanGraphicsProgramManager.createProgram({
            context: this.context,
            vertex: ParmesanGraphicsSource.vertex,
            fragment: ParmesanGraphicsSource.fragment
        })

        /** Create attributes */
        this.attributes = ParmesanGraphicsAttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = ParmesanGraphicsUniformManager.createUniforms({
            context: this.context,
            program: this.program
        })

        this.context.useProgram(this.program)
    }

    draw() {
        this.context.clear(this.context.COLOR_BUFFER_BIT)
        this.context.drawArrays(this.context.POINTS, 0, this.state.graphics.activeVertices)
    }

    buffer({ array }) {
        return ParmesanGraphicsBufferManager.createBuffer({
            context: this.context,
            array: array,
        })
    }

    zoom(out) {
        const action = out ? 'add' : 'subtract'

        const delta = this.state.graphics
            .from[action]({ with: this.state.graphics.to })
            .multiply({ with: this.state.graphics.zoomDelta })

        this.state.graphics.from[action]({
            with: delta,
            result: this.state.graphics.from
        })

        const viewMatrix = ParmesanGraphicsCameraManager.lookAt(this.state)
        const projMatrix = ParmesanGraphicsCameraManager.project(this.state)

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        this.draw()
    }


    plot({ vertices, colors, sizes }) {
        const viewMatrix = ParmesanGraphicsCameraManager.lookAt(this.state)
        const projMatrix = ParmesanGraphicsCameraManager.project(this.state)

        this.attributes.a_Color(this.buffer({ array: colors }))
        this.attributes.a_PointSize(this.buffer({ array: sizes }))
        this.attributes.a_Position(this.buffer({ array: vertices }))

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        this.state.graphics.activeVertices = vertices.shape[0]

        this.draw()
    }

}

