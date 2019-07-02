
export default class ParmesanGraphicsBufferManager {
    static createBuffer({ context, array }) {
        const buffer = context.createBuffer()

        const numberType = this.mapType({ context, array })
        const renderType = context.STATIC_DRAW
        const bufferType = context.ARRAY_BUFFER

        context.bindBuffer(bufferType, buffer)
        context.bufferData(bufferType, array.data, renderType)

        return {
            buffer,
            size: array.shape[1],
            count: array.shape[0],
            type: numberType,
            normalize: true,
            offset: array.offset * array.type.BYTES_PER_ELEMENT,
            stride: array.strides[0] * array.type.BYTES_PER_ELEMENT
        }
    }

    static mapType({ context, array }) {
        if (array.type === Int8Array) { return context.BYTE }
        if (array.type === Uint8Array) { return context.UNSIGNED_BYTE }
        if (array.type === Uint8ClampedArray) { return context.UNSIGNED_BYTE }
        if (array.type === Int16Array) { return context.SHORT }
        if (array.type === Uint16Array) { return context.UNSIGNED_SHORT }
        if (array.type === Int32Array) { return context.INT }
        if (array.type === Uint32Array) { return context.UNSIGNED_INT }
        if (array.type === Float32Array) { return context.FLOAT }

        return null
    }
}
