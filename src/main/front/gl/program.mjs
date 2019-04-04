
export default class WebGLProgram {
    constructor(args) {
        this.source = {}
        this.shaders = {}
        this.buffers = []

        this.size = 0
        this.program = null

        this.runtime = args.runtime
    }

    compile(args) {
        this.source.vertex = args.vertex
        this.source.fragment = args.fragment

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

    feed(buffers) {
        for (const buffer of buffers) {
            this.size += buffer.box.shape[0]

            this.buffers.unshift(this.runtime.createBuffer())
            this.runtime.bindBuffer(buffer.type, this.buffers[0])
            this.runtime.bufferData(buffer.type, buffer.box.data, buffer.usage)

            for (const [name, region] of Object.entries(buffer.attributes)) {

                const pointer = this.runtime.getAttribLocation(this.program, name)
                const attribute = buffer.box.slice({ with: region })

                this.runtime.vertexAttribPointer(
                    pointer,
                    attribute.shape[1],
                    gl.FLOAT, // TODO map this to big box type
                    false,
                    attribute.strides[0] * attribute.type.BYTES_PER_ELEMENT,
                    attribute.offset * attribute.type.BYTES_PER_ELEMENT
                )

                this.runtime.enableVertexAttribArray(pointer)
            }
        }

        return this
    }

    draw(args) {

        this.runtime.clear(gl.COLOR_BUFFER_BIT)
        this.runtime.clearColor(0.0, 0.0, 0.0, 1.0)
        this.runtime.drawArrays(args.mode, 0, this.size)

        return this
    }
}
