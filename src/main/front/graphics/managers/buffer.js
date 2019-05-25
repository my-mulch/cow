
export default class GraphicsBufferManager {
    static createBuffer({ context, data, name, btype, rtype, ntype }) {
        const buffer = context.createBuffer()
        
        const numberType = ntype || context.FLOAT
        const renderType = rtype || context.STATIC_DRAW
        const bufferType = btype || context.ARRAY_BUFFER

        context.bindBuffer(bufferType, buffer)
        context.bufferData(bufferType, data, renderType)

        return [

        ]
    }
}