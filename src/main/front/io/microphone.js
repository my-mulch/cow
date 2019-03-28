
export default class Microphone {
    constructor(args) {
        this.env = args.env
        this.media = args.media
        this.export = args.export

        this.samples = []
        this.recording = null
        this.reader = new FileReader()
        this.reader.onloadend = this.save.bind(this)

        this.env.addEventListener('play', this.play.bind(this))
        this.env.addEventListener('pause', this.pause.bind(this))

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

    send(audio) { this.export(audio.getChannelData(0)) }
    record(blob) { this.reader.readAsArrayBuffer(blob.data) }

    connect(stream) {
        this.env.srcObject = stream
        this.recording = new MediaRecorder(stream)
        this.recording.ondataavailable = this.record.bind(this)
    }
}
