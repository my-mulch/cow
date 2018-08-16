class ImageMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    createBitmap() {
        // coordinates within scene are backwards
        const [y, x] = this.media.header.shape
        return createImageBitmap(new ImageData(this.media.data, x, y))
    }

    render(scene) {
        scene.context.drawImage(imageBitmap, 0, 0)
    }

    static matches(ndArray) {
        return ndArray.header.shape.length === 3
            && ndArray.header.shape.slice(-1) === 4
    }

}