
export default class GraphicsProgram {
    constructor(options) {
        this.runtime = options.runtime
        this.vertex = options.vertex
        this.fragment = options.fragment

        this.size = 0
        this.buffers = []

        this.program = this.runtime.createProgram()
        this.runtime.attachShader(this.program, this.vertex)
        this.runtime.attachShader(this.program, this.fragment)

        this.runtime.linkProgram(this.program)
        this.runtime.useProgram(this.program)
    }

    feed(boxes) {
        for (const box of boxes) {
            this.size += box.buffer.shape[0]

            this.buffers.unshift(this.runtime.createBuffer())

            this.runtime.bindBuffer(
                this.runtime[box.type],
                this.buffers[0]
            )

            this.runtime.bufferData(
                this.runtime[box.type],
                box.buffer.data,
                this.runtime[box.usage]
            )

            for (const [name, region] of Object.entries(box.attributes)) {
                const pointer = this.runtime.getAttribLocation(this.program, name)
                const attribute = box.buffer.slice({ with: region })

                this.runtime.vertexAttribPointer(
                    pointer,
                    attribute.shape[1],
                    this.runtime['FLOAT'], // TODO map this to big box type
                    false,
                    attribute.strides[0] * attribute.type.BYTES_PER_ELEMENT,
                    attribute.offset * attribute.type.BYTES_PER_ELEMENT
                )

                this.runtime.enableVertexAttribArray(pointer)
            }
        }

        return this
    }

    draw(options) {
        this.runtime.clear(this.runtime.COLOR_BUFFER_BIT)
        this.runtime.clearColor(0.0, 0.0, 0.0, 1.0)

        if(options.animate)
            options.animate(this)

        this.runtime.drawArrays(this.runtime[options.mode], 0, this.size)

        return this
    }
}
