
export default class WebGLProgram {
    constructor(args) {
        this.buffers = []
        this.shaders = {}

        this.program = null
        this.source = null
        this.runtime = args.runtime
    }

    compile(args) {
        this.shaders.vertex = this.runtime.createShader(this.runtime.VERTEX_SHADER)
        this.shaders.fragment = this.runtime.createShader(this.runtime.FRAGMENT_SHADER)

        this.source.vertex = args.vertex
        this.source.fragment = args.fragment

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

    feed(args) {
        // for (let i = 0; i < args.buffers.length; i++) {
        //     this.buffers.unshift.push(this.runtime.createBuffer())
        //     this.runtime.bindBuffer(args.buffers[i].type, this.buffers[0])
        //     this.runtime.bufferData(args.buffers[i].type, args.buffers[i].data, args.buffers[i].usage)
        // }

        // for (let i = 0; i < args.attributes.length; i++) {
        //     const pointer = this.runtime.getAttribLocation(this.program, args.attributes[i].name)

        //     this.runtime.vertexAttribPointer(
        //         pointer,
        //         args.attributes[i].size,
        //         args.attributes[i].type,
        //         args.attributes[i].normalized,
        //         args.attributes[i].stride,
        //         args.attributes[i].offset
        //     )

        //     this.runtime.enableVertexAttribArray(pointer)
        // }

        return this
    }

    draw(args) {
        // this.runtime.clearColor(0.0, 0.0, 0.0, 1.0)

        // for (let i = 0; i < args.clear.length; i++)
        //     this.runtime.clear(args.clear[i])

        // gl.drawArrays(args.mode, 0, args.count)
    }
}
