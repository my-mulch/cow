
export default class Camcorder {
    constructor(options) {
        this.target = options.target
        this.export = options.export

        this.take = null
        this.frames = []

        this.save = this.save.bind(this)
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.record = this.record.bind(this)
        this.connect = this.connect.bind(this)

        this.buffer = document.createElement('canvas')
        this.buffer.hidden = true

        this.tape = this.buffer.getContext('2d')

        this.target.addEventListener('play', this.play)
        this.target.addEventListener('pause', this.pause)
    }

    record() {
        this.tape.drawImage(this.target, ...this.region)
        this.frames.push(this.tape.getImageData(...this.region).data)
    }

    play() { this.take = setInterval(this.record) }

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

    connect(stream) { this.target.srcObject = stream }
}
