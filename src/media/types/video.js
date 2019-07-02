import ParmesanConfiguration from '../../config'

import ParmesanBlob from './blob'

export default class ParmesanVideo extends ParmesanBlob {
    constructor(blob) {
        super(blob)

        const { frameRate, videoWidth, videoHeight } = ParmesanConfiguration.media

        let time = 0
        let frame = 0
        const delta = 1 / frameRate

        const video = document.createElement('video')
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        video.src = URL.createObjectURL(blob)

        video.onloadeddata = function () {
            this.frameChannels = 4
            this.frameCount = Math.ceil(video.duration / delta)
            this.frameDimensions = [
                0, 0,
                videoWidth,
                videoHeight
            ]

            this.data = new Uint8ClampedArray(
                this.frameCount *
                this.frameChannels *
                this.frameDimensions[2] *
                this.frameDimensions[3]
            )

            video.currentTime = time

        }.bind(this)

        video.onseeked = function () {
            context.drawImage(video, ...this.frameDimensions)
            const frameData = context.getImageData(...this.frameDimensions).data

            this.data.set(frameData, frame * frameData.length)

            frame += 1
            time += delta

            if (time <= video.duration)
                video.currentTime = time
            else {
                video.remove()
                canvas.remove()
            }

        }.bind(this)

    }
}
