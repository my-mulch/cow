import ParmesanGraphicsBufferManager from './managers/buffer'
import ParmesanGraphicsCameraManager from './managers/camera'
import ParmesanGraphicsProgramManager from './managers/program'
import ParmesanGraphicsUniformManager from './managers/uniform'
import ParmesanGraphicsAttributeManager from './managers/attribute'

import ParmesanGraphicsSource from './source/project'

export default class ParmesanGraphicsEngine {
    constructor(options) {
        this.target = options.target
        this.context = this.target.getContext('webgl')

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

    plot({ vertices, colors }) {
        const positionBuffer = ParmesanGraphicsBufferManager.createBuffer({
            context: this.context,
            feed: vertices,
            ntype: this.context.UNSIGNED_BYTE
        })

        this.attributes.a_Position(positionBuffer)

        const colorBuffer = ParmesanGraphicsBufferManager.createBuffer({
            context: this.context,
            feed: colors,
            ntype: this.context.UNSIGNED_BYTE
        })

        this.attributes.a_Color(colorBuffer)

        // calculate the view matrix and projection matrix
        const viewMatrix = ParmesanGraphicsCameraManager.lookAt({
            to: [[0, 0, 0]],
            up: [[0, 1, 0]],
            from: [[0.3], [0.2], [0.1]],
        })

        this.uniforms.u_ViewMatrix(viewMatrix)

        // Clear <canvas>
        this.context.clear(this.context.COLOR_BUFFER_BIT)

        // Draw the triangles
        this.context.drawArrays(this.context.POINTS, 0, positionBuffer.count)
    }

}
