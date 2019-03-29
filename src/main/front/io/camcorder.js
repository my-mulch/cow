
export default class Camcorder {
    constructor(args) {
        this.feed = args.feed
        this.media = args.media
        this.buffer = args.buffer
        this.dimensions = args.dimensions
        this.region = [0, 0, ...this.dimensions]
        this.size = this.dimensions[0] * this.dimensions[1]

        this.take = null
        this.frames = []

        this.tape = this.buffer.getContext('2d')
        this.feed.addEventListener('play', this.play.bind(this))
        this.feed.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    record() {
        this.tape.drawImage(this.feed, ...this.region)
        this.frames.push(this.tape.getImageData(...this.region).data)
    }

    play() { this.take = setInterval(this.record.bind(this)) }

    pause() {
        clearInterval(this.take)
        this.export(this.save())
        this.frames.length = 0
    }

    save() {
        const videofeed = new Uint8ClampedArray(4 * this.size * this.frames.length)

        for (let i = 0; i < this.frames.length; i++)
            videofeed.set(this.frames[i], 4 * this.size * i)

        return videofeed
    }

    connect(stream) { this.feed.srcObject = stream }
}
