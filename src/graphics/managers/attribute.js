
export default class ParmesanGraphicsAttributeManager {
    static createAttributes({ context, program }) {
        const attributes = {}

        const attributeCount = context.getProgramParameter(
            program,
            context.ACTIVE_ATTRIBUTES
        )

        for (var i = 0; i < attributeCount; i++) {
            const attributeInfo = context.getActiveAttrib(program, i)
            const attributeLocation = context.getAttribLocation(program, attributeInfo.name)

            attributes[attributeInfo.name] = this.createAttribute({
                context,
                location: attributeLocation,
            })
        }

        return attributes
    }

    static createAttribute({ context, location }) {
        return function (data) {
            context.bindBuffer(context.ARRAY_BUFFER, data.buffer)
            context.enableVertexAttribArray(location)

            context.vertexAttribPointer(
                location,
                data.size,
                data.type,
                data.normalize,
                data.stride,
                data.offset
            )
        }
    }

}


