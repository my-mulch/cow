
export default class Microphone {
    constructor(args) {
        this.dom = args.dom
        this.media = args.media
        this.handler = args.handler

        this.samples = []
        this.recording = null
        this.reader = new FileReader()
        this.reader.onloadend = this.save.bind(this)

        this.dom.audio.addEventListener('play', this.play.bind(this))
        this.dom.audio.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    play() { this.recording.start() }
    pause() { this.recording.stop() }

    save() {
        new window.AudioContext()
            .decodeAudioData(this.reader.result)
            .then(this.send.bind(this))
    }

    send(audio) { this.handler(audio.getChannelData(0)) }
    record(blob) { this.reader.readAsArrayBuffer(blob.data) }

    connect(stream) {
        this.dom.audio.srcObject = stream
        this.recording = new MediaRecorder(stream)
        this.recording.ondataavailable = this.record.bind(this)
    }
}
