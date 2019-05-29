
export default class ParmesanGraphicsBufferManager {
    static createBuffer({ context, feed, btype, rtype, ntype }) {
        const buffer = context.createBuffer()

        const numberType = ntype || context.FLOAT
        const renderType = rtype || context.STATIC_DRAW
        const bufferType = btype || context.ARRAY_BUFFER

        context.bindBuffer(bufferType, buffer)
        context.bufferData(bufferType, feed.data, renderType)

        return {
            buffer,
            size: feed.shape[1],
            count: feed.shape[0],
            type: numberType,
            normalize: true,
            offset: feed.offset * feed.type.BYTES_PER_ELEMENT,
            stride: feed.strides[0] * feed.type.BYTES_PER_ELEMENT
        }
    }
}
