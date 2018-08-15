import Scene from './display/scene'
import Pod from './display/pod'
import Socket from './io/socket'

class App {
    constructor(components) {
        this.scene = components.scene
        this.socket = components.socket
        this.pods = components.pods || []

        this.socket.listen('message', this.addPodFromSocketMessage.bind(this))

        window.setInterval(this.render.bind(this))
    }

    addPodFromSocketMessage(socketMessage) {
        this.pods.push(Pod.createFromSocketMessage(socketMessage))
    }

    render() {
        this.scene.render(this.pods.slice())
    }
}

new App({
    scene: new Scene({}),
    socket: new Socket({})
})