
export default class GraphicsRuntime {
    constructor(options) {
        this.feed = this.feed.bind(this)
        this.draw = this.draw.bind(this)
        this.render = this.render.bind(this)

        this.source = options.source
        this.context = options.context
        this.uniforms = options.uniforms
        this.boxes = options.boxes.map(this.feed)


        this.context.useProgram(this.program)
    }

    draw() { this.boxes.forEach(this.render) }

    setModelMatrices(matrices) {
        for (const [name, matrix] of Object.entries(matrices))
            this.context.uniformMatrix4fv(
                this.context.getUniformLocation(this.program, name),
                false,
                matrix.data)
    }

    render(box) {
        for (const [name, region] of Object.entries(box.attributes)) {
            const pointer = this.context.getAttribLocation(this.program, name)

            this.context.vertexAttribPointer(
                pointer,
                region.shape[1],
                this.context[box.dtype],
                false,
                region.strides[0] * region.type.BYTES_PER_ELEMENT,
                region.offset * region.type.BYTES_PER_ELEMENT
            )

            this.context.enableVertexAttribArray(pointer)
        }

        this.context.clear(this.context.COLOR_BUFFER_BIT)
        this.context.clearColor(0.0, 0.0, 0.0, 1.0)
        this.context.drawArrays(this.context[box.mode], 0, box.size)
    }

    feed(box) {
        box.buffer = this.context.createBuffer()

        this.context.bindBuffer(this.context[box.mtype], box.buffer)
        this.context.bufferData(this.context[box.mtype], box.contents.data, this.context[box.usage])

        return box
    }
}

