
export default class AttributeManager {
    constructor(options) {
        this.program = options.program
        this.context = options.context

        this.attributes = this.createAttributes()
    }

    createAttributes() {
        const attributes = {}

        const attributeCount = this.context.getProgramParameter(this.program, this.context.ACTIVE_ATTRIBUTES)

        for (var i = 0; i < attributeCount; i++) {
            const attributeInfo = this.context.getActiveAttrib(this.program, i)
            const attributeLocation = this.context.getAttribLocation(this.program, attributeInfo.name)

            attributes[attributeInfo.name] = this.createAttribute({ location: attributeLocation })
        }

        return attributes
    }

    createAttribute({ location }) {
        return (function (data) {
            this.context.bindBuffer(this.context.ARRAY_BUFFER, data.buffer)
            this.context.enableVertexAttribArray(location)

            this.context.vertexAttribPointer(
                location,
                data.size,
                data.type,
                data.normalize,
                data.stride,
                data.offset
            )
        }).bind(this)
    }
}


