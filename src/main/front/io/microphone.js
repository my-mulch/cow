
export default class Microphone {
    constructor(args) {
        this.feed = args.feed
        this.media = args.media

        this.samples = []
        this.reader = null
        this.context = null
        this.recording = null

        this.feed.addEventListener('play', this.play.bind(this))
        this.feed.addEventListener('pause', this.pause.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(this.media)
            .then(this.connect.bind(this))
    }

    play() { this.recording.start() }
    pause() { this.recording.stop() }

    save() {
        this.context
            .decodeAudioData(this.reader.result)
            .then(this.send.bind(this))
    }

    send(audio) { this.export(audio.getChannelData(0)) }
    record(blob) { this.reader.readAsArrayBuffer(blob.data) }

    connect(stream) {
        this.feed.srcObject = stream

        this.context = new AudioContext()

        this.recording = new MediaRecorder(stream)
        this.recording.ondataavailable = this.record.bind(this)

        this.reader = new FileReader()
        this.reader.onloadend = this.save.bind(this)
    }
}
