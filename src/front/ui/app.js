
export default class App {
    constructor(components) {
        this.scene = components.scene
        this.camera = components.camera

        this.fileDrop = components.fileDrop
        this.socket = components.socket

        this.fileDrop.onData = this.addPodFromFileDrop.bind(this)
        this.socket.onData = this.addPodFromSocket.bind(this)

        window.setInterval(this.render.bind(this))
    }

    addPodFromFileDrop(file) { console.log(file) }
    addPodFromSocket(file) { console.log(file) }

    render() { }
}