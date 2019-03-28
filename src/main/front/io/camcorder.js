
export default class Camcorder {
    constructor(args) {
        this.env = args.env
        this.size = args.size
        this.media = args.media
        this.export = args.export
        this.region = [0, 0, ...this.size]
        this.npixels = this.size[0] * this.size[1]

        this.take = null
        this.frames = []

        this.tape = this.env.backfeed.getContext('2d')
        this.env.videofeed.addEventListener('play', this.play.bind(this))
        this.env.videofeed.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    record() {
        this.tape.drawImage(this.env.videofeed, ...this.region)
        this.frames.push(this.tape.getImageData(...this.region).data)
    }

    play() { this.take = setInterval(this.record.bind(this)) }

    pause() {
        clearInterval(this.take)
        this.export(this.save())
        this.frames.length = 0
    }

    save() {
        const videofeed = new Uint8ClampedArray(4 * this.npixels * this.frames.length)

        for (let i = 0; i < this.frames.length; i++)
            videofeed.set(this.frames[i], 4 * this.npixels * i)

        return videofeed
    }

    connect(stream) { this.env.videofeed.srcObject = stream }
}
