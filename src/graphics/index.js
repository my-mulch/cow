import ParmesanBufferManager from './managers/buffer'
import ParmesanCameraManager from './managers/camera'
import ParmesanProgramManager from './managers/program'
import ParmesanUniformManager from './managers/uniform'
import ParmesanAttributeManager from './managers/attribute'

import ParmesanConfiguration from '../config'

export default class ParmesanGraphicsEngine {
    constructor() {
        this.target = document.querySelector('canvas')
        this.context = this.target.getContext('webgl')

        this.pan = this.pan.bind(this)
        this.draw = this.draw.bind(this)
        this.zoom = this.zoom.bind(this)
        this.plot = this.plot.bind(this)
        this.buffer = this.buffer.bind(this)

        /** Create program */
        this.program = ParmesanProgramManager.createProgram({
            context: this.context,
            vertex: ParmesanConfiguration.graphics.source.VERTEX,
            fragment: ParmesanConfiguration.graphics.source.FRAGMENT
        })

        /** Create attributes */
        this.attributes = ParmesanAttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = ParmesanUniformManager.createUniforms({
            context: this.context,
            program: this.program
        })

        this.context.useProgram(this.program)
    }

    buffer({ array }) {
        return ParmesanBufferManager.createBuffer({
            context: this.context, array
        })
    }

    plot({ vertices, colors, sizes }) {
        const { render } = ParmesanConfiguration.graphics

        this.attributes.a_Color(this.buffer({ array: colors }))
        this.attributes.a_PointSize(this.buffer({ array: sizes }))
        this.attributes.a_Position(this.buffer({ array: vertices }))

        render.ACTIVE_VERTICES = vertices.shape[0]

        this.draw()
    }

    draw() {
        const { location, render, projection } = ParmesanConfiguration.graphics

        const viewMatrix = ParmesanCameraManager.lookAt(location)
        const projMatrix = ParmesanCameraManager.project(projection)

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        this.context.clear(this.context.COLOR_BUFFER_BIT)
        this.context.drawArrays(this.context.POINTS, 0, render.ACTIVE_VERTICES)
    }

    pan(direction) {
        const { location, render, projection } = ParmesanConfiguration.graphics

        this.draw()
    }

    zoom(zoomOut) {
        const { location, render, projection } = ParmesanConfiguration.graphics

        this.draw()
    }

}

