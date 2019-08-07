import config from '../../config'

export default class ProgramManager {
    constructor(options) {
        this.config = config
        this.context = options.context

        this.vertexShader = this.createShader({
            type: this.context.VERTEX_SHADER,
            source: config.VERTEX_SOURCE
        })

        this.fragmentShader = this.createShader({
            type: this.context.FRAGMENT_SHADER,
            source: config.FRAGMENT_SOURCE
        })

        this.program = this.createProgram()
    }

    createShader({ type, source }) {
        const shader = this.context.createShader(type)

        this.context.shaderSource(shader, source)
        this.context.compileShader(shader)

        const didCompile = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)

        if (!didCompile) {
            console.error(`Error with compile: ${this.context.getShaderInfoLog(shader)}`)
            this.context.deleteShader(shader)

            return null
        }

        return shader
    }

    createProgram() {
        const program = this.context.createProgram()

        this.context.attachShader(program, this.vertexShader)
        this.context.attachShader(program, this.fragmentShader)

        this.context.linkProgram(program)

        const didLink = this.context.getProgramParameter(program, this.context.LINK_STATUS)

        if (!didLink) {
            console.error(`Error with link: ${this.context.getProgramInfoLog(program)}`)
            this.context.deleteProgram(program)

            return null
        }

        return program
    }

}
