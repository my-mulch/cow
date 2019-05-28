
export default class ParmesanImage {
    constructor(blob) {
        this.name = blob.name
        this.size = blob.size
        this.type = blob.type

        this.extractPixels = this.extractPixels.bind(this)

        createImageBitmap(blob).then(this.extractPixels)
    }

    extractPixels(bitmap) {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        const region = [0, 0, bitmap.width, bitmap.height]

        context.drawImage(bitmap, ...region)
        this.data = context.getImageData(...region).data
 
        canvas.remove()
    }
}