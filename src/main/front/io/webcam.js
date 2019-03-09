
export default class WebCam {
    constructor(props) {
        this.line = props.line
        this.sources = props.media
        this.handler = props.handler

        this.reader = new FileReader()
        this.reader.onloadend = this.expose.bind(this)

        this.stream = null
        this.recording = null

        this.line.addEventListener('pause', (function () { this.recording.stop() }).bind(this))
        this.line.addEventListener('play', (function () { this.recording.start() }).bind(this))


        navigator
            .mediaDevices
            .getUserMedia(this.sources)
            .then(this.connect.bind(this))
    }

    expose() { this.handler(this.reader.result) }
    save(blob) { this.reader.readAsArrayBuffer(blob.data) }

    connect(stream) {
        this.stream = stream
        this.line.srcObject = this.stream

        this.recording = new MediaRecorder(this.stream)
        this.recording.ondataavailable = this.save.bind(this)
    }
}
