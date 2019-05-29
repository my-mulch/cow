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

    feed({ array, attribute }) {
        attribute.call(null, ParmesanGraphicsBufferManager.createBuffer({
            context: this.context,
            array,
        }))
    }

    plot({ vertices, colors, sizes }) {
        this.feed({ array: vertices, attribute: this.attributes.a_Position })
        this.feed({ array: colors, attribute: this.attributes.a_Color })
        this.feed({ array: sizes, attribute: this.attributes.a_PointSize })

        // calculate the view matrix and projection matrix
        const viewMatrix = ParmesanGraphicsCameraManager.lookAt({
            to: [[0, 0, 0]],
            up: [[0, 1, 0]],
            from: [[0.1], [0.2], [-0.1]],
        })

        this.uniforms.u_ViewMatrix(viewMatrix)

        // Clear <canvas>
        this.context.clear(this.context.COLOR_BUFFER_BIT)

        // Draw the triangles
        this.context.drawArrays(this.context.POINTS, 0, vertices.shape[0])
    }

}