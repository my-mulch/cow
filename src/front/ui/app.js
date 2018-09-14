
export default class App {
    constructor(components) {
        this.scene = components.scene

        this.fileDrop = components.fileDrop
        this.socket = components.socket

        this.fileDrop.listen('drop', this.addPodFromFileDropMessage.bind(this))
        this.socket.listen('message', this.addPodFromSocketMessage.bind(this))

        window.setInterval(this.render.bind(this))
    }

    addPodFromFileDropMessage(fileDropMessage) { }
    addPodFromSocketMessage(socketMessage) { }

    render() { this.scene.render() }
}