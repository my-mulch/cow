
export default class Camera {
    constructor(props) {
        this.screen = props.screen
        this.onData = props.onData
        
        this.reader = new FileReader()
        this.reader.onloadend = this.expose.bind(this)

        this.screen.addEventListener('pause', this.stop.bind(this))
        this.screen.addEventListener('play', this.record.bind(this))

        navigator
            .mediaDevices
            .getUserMedia({ video: true })
            .then(this.connect.bind(this))
    }

    expose() { this.onData(this.reader.result) }

    connect(stream) {
        this.stream = stream
        this.screen.srcObject = this.stream

        this.recording = new MediaRecorder(this.stream)
        this.recording.ondataavailable = this.save.bind(this)
    }

    record() { this.recording.start() }
    stop() { this.recording.stop() }
    save(blob) { this.reader.readAsArrayBuffer(blob.data) }
}