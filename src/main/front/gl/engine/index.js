import GraphicsBufferManager from '../managers/buffer'
import GraphicsProgramManager from '../managers/program'
import GraphicsUniformManager from '../managers/uniform'
import GraphicsAttributeManager from '../managers/attribute'

import GraphicsSource from '../common/source'

export default class GraphicsEngine {
    constructor(options) {
        this.target = options.target
        this.context = this.target.getContext('webgl')

        /** Create program */
        this.program = GraphicsProgramManager.createProgram({
            context: this.context,
            vertex: GraphicsSource.default.vertex,
            fragment: GraphicsSource.default.fragment
        })

        /** Create attributes */
        this.attributes = GraphicsAttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = GraphicsUniformManager.createUniforms({
            context: this.context,
            program: this.program
        })
    }

    plot({ vertices, colors }) {

        // const colorBuffer = GraphicsBufferManager.createBuffer({
        //     context: this.context,
        //     program: this.program,
        //     data: colors,
        //     name: 'a_Color'
        // })

        // const vertexBuffer = GraphicsBufferManager.createBuffer({
        //     context: this.context,
        //     program: this.program,
        //     data: vertices,
        //     name: 'a_Position'
        // })

        // GraphicsBufferManager.bindBuffer({ context: this.context, buffer: colorBuffer })
        // GraphicsBufferManager.bindBuffer({ context: this.context, buffer: vertexBuffer })


    }
}
