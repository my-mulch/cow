
export default class AVSource {
    constructor(props) {
        this.line = props.line
        this.onData = props.onData

        this.reader = new FileReader()
        this.reader.onloadend = this.expose.bind(this)

        this.line.addEventListener('pause', this.stop.bind(this))
        this.line.addEventListener('play', this.record.bind(this))

        navigator
            .mediaDevices
            .getUserMedia(props.media)
            .then(this.connect.bind(this))
    }

    expose() { this.onData(this.reader.result) }

    connect(stream) {
        this.stream = stream
        this.line.srcObject = this.stream

        this.recording = new MediaRecorder(this.stream)
        this.recording.ondataavailable = this.save.bind(this)
    }

    record() { this.recording.start() }
    stop() { this.recording.stop() }
    save(blob) { this.reader.readAsArrayBuffer(blob.data) }
}