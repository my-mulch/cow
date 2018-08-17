export default class ImageMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    createBitmap() {
        // coordinates within scene are backwards
        const [y, x] = this.media.header.shape
        return createImageBitmap(new ImageData(this.media.data, x, y))
    }

    async render(scene) {
        scene.context.drawImage(await this.createBitmap(), 0, 0)
    }

    static matches(ndArray) {
        return ndArray.data instanceof Uint8ClampedArray
    }

}