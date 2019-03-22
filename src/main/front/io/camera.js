
export default class Camera {
    constructor(args) {
        this.dom = args.dom
        this.media = args.media
        this.handler = args.handler

        this.frames = []
        this.session = null

        this.tape = this.dom.backfeed.getContext('2d')
        this.dom.video.addEventListener('play', this.play.bind(this))
        this.dom.video.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    record() {
        this.tape.drawImage(this.dom.video, 0, 0, 400, 400)
        this.frames.push(this.tape.getImageData(0, 0, 400, 400).data)
    }

    play() { this.session = setInterval(this.record.bind(this)) }

    pause() {
        clearInterval(this.session)
        this.handler([this.frames])
    }

    connect(stream) { this.dom.video.srcObject = stream }
}
