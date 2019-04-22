import GraphicsProgram from './program'

export default class GraphicsEngine {
    constructor(options) {
        this.target = options.target
        this.runtime = this.target.getContext('webgl')
    }

    compile(source) {
        const vertex = this.runtime.createShader(this.runtime.VERTEX_SHADER)
        const fragment = this.runtime.createShader(this.runtime.FRAGMENT_SHADER)

        this.runtime.shaderSource(vertex, source.vertex)
        this.runtime.shaderSource(fragment, source.fragment)

        this.runtime.compileShader(vertex)
        this.runtime.compileShader(fragment)

        return new GraphicsProgram({ vertex, fragment, runtime: this.runtime })
    }
}
