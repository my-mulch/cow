
export default class GraphicsBufferManager {
    static createBuffer({ context, program, data, name, btype, rtype, ntype }) {
        const buffer = context.createBuffer()

        const numberType = ntype || context.FLOAT
        const renderType = rtype || context.STATIC_DRAW
        const bufferType = btype || context.ARRAY_BUFFER

        context.bindBuffer(bufferType, buffer)
        context.bufferData(bufferType, data, renderType)

        return {
            buffer,
            pointer: context.getAttribLocation(program, name),
            size: data.shape[1],
            type: numberType,
            normalize: false,
            offset: data.offset * data.type.BYTES_PER_ELEMENT,
            stride: data.strides[0] * data.type.BYTES_PER_ELEMENT
        }
    }

    static bindBuffer({ context, buffer }) {
        context.bindBuffer(context.ARRAY_BUFFER, buffer.buffer)

        context.enableVertexAttribArray(buffer.pointer)

        context.vertexAttribPointer(
            buffer.pointer,
            buffer.size,
            buffer.type,
            buffer.normalize,
            buffer.stride,
            buffer.offset
        )
    }
}
