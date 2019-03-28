
export default class WebGlProgram {
    constructor(args) {
        this.buffers = []
        this.count = args.count
        this.runtime = args.runtime
        this.program = this.runtime.createProgram()

        this.shaders = {
            vertex: {
                source: args.vertex,
                object: this.runtime.createShader(this.runtime.VERTEX_SHADER)
            },
            fragment: {
                source: args.fragment,
                object: this.runtime.createShader(this.runtime.FRAGMENT_SHADER)
            }
        }
    }

    compile() {
        this.runtime.shaderSource(this.shaders.vertex.object, this.shaders.vertex.source)
        this.runtime.shaderSource(this.shaders.fragment.object, this.shaders.fragment.source)

        this.runtime.compileShader(this.shaders.vertex.object)
        this.runtime.compileShader(this.shaders.fragment.object)

        this.runtime.attachShader(this.runtime.program, this.shaders.vertex.object)
        this.runtime.attachShader(this.runtime.program, this.shaders.fragment.object)

        return this
    }

    link() {
        this.runtime.linkProgram(this.program)
        this.runtime.useProgram(this.program)

        return this
    }

    execute(args) {
        this.buffers.unshift(this.runtime.createBuffer())

        this.runtime.bindBuffer(this.runtime.ARRAY_BUFFER, this.buffers[0])
        this.runtime.bufferData(this.runtime.ARRAY_BUFFER, args.data, this.runtime[args.usage])

        for (attribute of args.attributes) {
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

        this.runtime.bindBuffer(this.runtime.ARRAY_BUFFER, null)
        this.runtime.drawArrays(this.runtime[args.mode], 0, args.count)

        return this
    }
}
