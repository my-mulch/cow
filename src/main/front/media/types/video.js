import ParmesanBlob from './blob'

export default class ParmesanVideo extends ParmesanBlob {
    constructor(blob) {
        super(blob)

        let time = 0
        let frame = 0
        const delta = 1

        const video = document.createElement('video')
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        video.src = URL.createObjectURL(blob)

        video.onloadeddata = function () {
            this.frameCount = video.duration / delta
            this.frameDimensions = [0, 0, video.videoWidth, video.videoHeight]
            
            video.currentTime = time

        }.bind(this)

        video.onseeked = function () {
            context.drawImage(video, ...this.frameDimensions)
            const frameData = context.getImageData(...this.frameDimensions).data

            frame += 1
            time += delta

            if (time <= video.duration)
                video.currentTime = time
            else
                video.remove(), canvas.remove(), console.log('done')

        }.bind(this)

    }
}
