import GraphicsBufferManager from './managers/buffer'
import GraphicsProgramManager from './managers/program'

export default class GraphicsEngine {
    constructor(options) {
        this.data = options.data
        this.target = options.target
        this.context = this.target.getContext('webgl')

        this.vertexShader = GraphicsProgramManager.createShader({
            context: this.context,
            type: this.context.VERTEX_SHADER,
            source:
                'attribute vec4 a_Position;\n' +
                'attribute vec4 a_Color;\n' +
                'uniform mat4 u_ViewMatrix;\n' +
                'varying vec4 v_Color;\n' +
                'void main() {\n' +
                '  gl_Position = u_ViewMatrix * a_Position;\n' +
                '  gl_PointSize = 3.0;\n' +
                '  v_Color = a_Color;\n' +
                '}\n',
        })

        this.fragmentShader = GraphicsProgramManager.createShader({
            context: this.context,
            type: this.context.FRAGMENT_SHADER,
            source:
                '#ifdef GL_ES\n' +
                'precision mediump float;\n' +
                '#endif\n' +
                'varying vec4 v_Color;\n' +
                'void main() {\n' +
                '  gl_FragColor = v_Color;\n' +
                '}\n'
        })

        this.program = GraphicsProgramManager.createProgram({
            context: this.context,
            shaders: { vertex: this.vertexShader, fragment: this.fragmentShader }
        })

    }

    plot({ vertices, colors }) {

        const colorBuffer = GraphicsBufferManager.createBuffer({
            context: this.context,
            data: colors
        })

        const vertexBuffer = GraphicsBufferManager.createBuffer({
            context: this.context,
            data: vertices
        })


    }
}
