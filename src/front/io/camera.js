
export default class Camera {
    constructor(props) {
        this.screen = props.screen
        this.stream = props.stream

        navigator
            .mediaDevices
            .getUserMedia({ video: true })
            .then(this.connect.bind(this))
    }

    connect(stream) {
        this.stream = stream
        this.screen.srcObject = this.stream
        this.screen.play()
    }
}