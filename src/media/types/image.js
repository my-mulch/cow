import ParmesanConfiguration from '../../config'

import ParmesanBlob from './blob'

export default class ParmesanImage extends ParmesanBlob {
    constructor(blob) {
        super(blob)

        createImageBitmap(blob).then(function (bitmap) {
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            const region = [
                0, 0,
                ParmesanConfiguration.media.IMAGE_WIDTH,
                ParmesanConfiguration.media.IMAGE_HEIGHT
            ]

            context.drawImage(bitmap, ...region)
            this.data = context.getImageData(...region).data

            canvas.remove()
        }.bind(this))
    }
}