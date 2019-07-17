
export default class BufferManager {
    constructor(options) {
        this.context = options.context

        this.mapType = this.mapType.bind(this)
        this.createBuffer = this.createBuffer.bind(this)
    }

    createBuffer({ array }) {
        const buffer = this.context.createBuffer()

        const numberType = this.mapType({ array })
        const renderType = this.context.STATIC_DRAW
        const bufferType = this.context.ARRAY_BUFFER

        this.context.bindBuffer(bufferType, buffer)
        this.context.bufferData(bufferType, array.data, renderType)

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

    mapType({ array }) {
        if (array.type === Int8Array) { return this.context.BYTE }
        if (array.type === Uint8Array) { return this.context.UNSIGNED_BYTE }
        if (array.type === Uint8ClampedArray) { return this.context.UNSIGNED_BYTE }
        if (array.type === Int16Array) { return this.context.SHORT }
        if (array.type === Uint16Array) { return this.context.UNSIGNED_SHORT }
        if (array.type === Int32Array) { return this.context.INT }
        if (array.type === Uint32Array) { return this.context.UNSIGNED_INT }
        if (array.type === Float32Array) { return this.context.FLOAT }

        return null
    }
}
