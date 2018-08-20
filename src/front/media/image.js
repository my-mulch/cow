export default class ImageMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    createBitmap() {
        // coordinates within scene are backwards
        const [y, x] = this.media.header.shape
        return createImageBitmap(new ImageData(this.media.data, x, y))
    }

    async render(scene, layout) {
        scene.context.drawImage(
            await this.createBitmap(),
            layout.origin.slice(0),
            layout.origin.slice(1))
    }

    static matches(ndArray) {
        return ndArray.data instanceof Uint8ClampedArray
    }

}