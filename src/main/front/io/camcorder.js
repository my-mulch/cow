
export default class Camcorder extends HTMLVideoElement {
    constructor(args) {
        super(args)

        this.region = [0, 0, ...this.options.dimensions]
        this.size = this.options.dimensions[0] * this.options.dimensions[1]

        this.take = null
        this.frames = []

        this.tape = this.buffer.getContext('2d')
        this.addEventListener('play', this.play.bind(this))
        this.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    record() {
        this.tape.drawImage(this, ...this.region)
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

    connect(stream) { this.srcObject = stream }
}
