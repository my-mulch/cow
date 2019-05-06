

export default class GraphicsRuntime {
    constructor(options) {
        this.feed = this.feed.bind(this)
        this.draw = this.draw.bind(this)
        this.render = this.render.bind(this)

        this.source = options.source
        this.context = options.context
        this.boxes = options.boxes.map(this.feed)

        this.vertex = this.context.createShader(this.context.VERTEX_SHADER)
        this.fragment = this.context.createShader(this.context.FRAGMENT_SHADER)

        this.context.shaderSource(this.vertex, this.source.vertex)
        this.context.shaderSource(this.fragment, this.source.fragment)

        this.context.compileShader(this.vertex)
        this.context.compileShader(this.fragment)

        this.program = this.context.createProgram()
        this.context.attachShader(this.program, this.vertex)
        this.context.attachShader(this.program, this.fragment)

        this.context.linkProgram(this.program)
        this.context.useProgram(this.program)
    }

    draw() { this.boxes.forEach(this.render) }

    render(box) {
        this.context.bindBuffer(this.context[box.mtype], box)

        for (const [name, region] of box.attributes) {
            const pointer = this.context.getAttribLocation(this.program, name)

            this.context.vertexAttribPointer(pointer,
                pointer,
                region.shape[1],
                this.context[box.dtype],
                false,
                region.strides[0] * region.type.BYTES_PER_ELEMENT,
                region.offset * region.type.BYTES_PER_ELEMENT
            )

            this.context.enableVertexAttribArray(pointer)
        }
    }

    feed(box) {
        box.buffer = this.context.createBuffer()

        this.context.bufferData(
            this.context[box.mtype],
            box.contents.data,
            this.context[box.usage]
        )

        return box
    }
}

