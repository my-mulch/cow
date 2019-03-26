
export default class Camcorder {
    constructor(args) {
        this.dom = args.dom
        this.size = args.size
        this.media = args.media
        this.handler = args.handler
        this.region = [0, 0, ...this.size]
        this.npixels = this.size[0] * this.size[1]

        this.take = null
        this.frames = []

        this.tape = this.dom.backfeed.getContext('2d')
        this.dom.video.addEventListener('play', this.play.bind(this))
        this.dom.video.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    record() {
        this.tape.drawImage(this.dom.video, ...this.region)
        this.frames.push(this.tape.getImageData(...this.region).data)
    }

    play() { this.take = setInterval(this.record.bind(this)) }

    pause() {
        clearInterval(this.take)
        this.handler(this.save())
        this.frames.length = 0
    }

    save() {
        const video = new Uint8ClampedArray(4 * this.npixels * this.frames.length)

        for (let i = 0; i < this.frames.length; i++)
            video.set(this.frames[i], 4 * this.npixels * i)

        return video
    }

    connect(stream) { this.dom.video.srcObject = stream }
}
