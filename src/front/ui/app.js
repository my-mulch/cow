
export default class App {
    constructor(components) {
        this.scene = components.scene

        this.mic = components.mic
        this.camera = components.camera
        this.fileDrop = components.fileDrop
        this.socket = components.socket

        this.fileDrop.onData = this.addPodFromFileDrop.bind(this)
        this.socket.onData = this.addPodFromSocket.bind(this)
        this.camera.onData = this.addPodFromCamera.bind(this)
        this.mic.onData = this.addPodFromMic.bind(this)

        window.setInterval(this.render.bind(this))
    }

    addPodFromFileDrop(file) { console.log(file) }
    addPodFromSocket(file) { console.log(file) }
    addPodFromCamera(file) { console.log(file) }
    addPodFromMic(file) { console.log(file) }

    render() { }
}