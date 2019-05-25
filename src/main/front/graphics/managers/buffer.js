
export default class GraphicsBufferManager {
    static createBuffer({ context, data, btype, rtype }) {
        const buffer = context.createBuffer()

        const renderType = rtype || context.STATIC_DRAW
        const bufferType = btype || context.ARRAY_BUFFER

        context.bindBuffer(bufferType, buffer)
        context.bufferData(bufferType, data, renderType)

        return buffer
    }
}