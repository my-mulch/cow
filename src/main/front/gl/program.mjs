
export default class WebGlProgram {
    constructor(args) {
        this.shaders = {}
        this.buffers = []
        this.program = null
        this.source = args.source
        this.runtime = args.runtime
    }

    compile() {
        this.shaders.vertex = this.runtime.createShader(this.runtime.VERTEX_SHADER)
        this.shaders.fragment = this.runtime.createShader(this.runtime.FRAGMENT_SHADER)

        this.runtime.shaderSource(this.shaders.vertex, this.source.vertex)
        this.runtime.shaderSource(this.shaders.fragment, this.source.fragment)

        this.runtime.compileShader(this.shaders.vertex)
        this.runtime.compileShader(this.shaders.fragment)

        this.program = this.runtime.createProgram()

        this.runtime.attachShader(this.program, this.shaders.vertex)
        this.runtime.attachShader(this.program, this.shaders.fragment)

        return this
    }

    link() {
        this.runtime.linkProgram(this.program)
        this.runtime.useProgram(this.program)

        return this
    }

    execute(args) {
        this.buffers.unshift(this.runtime.createBuffer())

        this.runtime.bindBuffer(args.buffer, this.buffers[0])
        this.runtime.bufferData(args.buffer, args.data, args.usage)

        for (const attribute of args.attributes) {
            const pointer = this.runtime.getAttribLocation(this.program, attribute.name)

            this.runtime.vertexAttribPointer(
                pointer,
                attribute.size,
                attribute.type,
                attribute.normalized,
                attribute.stride,
                attribute.offset
            )

            this.runtime.enableVertexAttribArray(pointer)
        }

        this.runtime.bindBuffer(args.buffer, null)
        this.runtime.drawArrays(args.mode, 0, args.count)

        return this
    }
}
