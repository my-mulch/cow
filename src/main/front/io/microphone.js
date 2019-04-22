
export default class Microphone {
    constructor(options) {
        this.target = options.target
        this.export = options.export

        this.samples = []
        this.reader = null
        this.context = null
        this.recording = null

        this.save = this.save.bind(this)
        this.send = this.send.bind(this)
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.record = this.record.bind(this)
        this.connect = this.connect.bind(this)

        this.target.addEventListener('play', this.play)
        this.target.addEventListener('pause', this.pause)

        navigator
            .mediaDevices
            .getUserMedia({ audio: true })
            .then(this.connect)
    }

    play() { this.recording.start() }
    pause() { this.recording.stop() }

    save() {
        this.context
            .decodeAudioData(this.reader.result)
            .then(this.send)
    }

    send(audio) { this.export(audio.getChannelData(0)) }
    record(blob) { this.reader.readAsArrayBuffer(blob.data) }

    connect(stream) {
        this.target.srcObject = stream

        this.context = new AudioContext()

        this.recording = new MediaRecorder(stream)
        this.recording.ondataavailable = this.record

        this.reader = new FileReader()
        this.reader.onloadend = this.save
    }
}
