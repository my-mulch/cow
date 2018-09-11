import Scene from './ui/scene'
import Pod from './ui/pod'
import Socket from './io/socket'

class App {
    constructor(components) {
        this.scene = components.scene

        this.socket = components.socket
        this.socket.listen('message', this.addPodFromSocketMessage.bind(this))

        window.setInterval(this.render.bind(this))
    }

    addPodFromSocketMessage(socketMessage) {
        this.scene.pods.push(Pod.createFromSocketMessage(socketMessage))
    }

    render() {
        this.scene.render()
    }
}

new App({
    scene: new Scene({ canvas: document.getElementById('canvas') }),
    socket: new Socket({ port: 3000, host: 'localhost' })
})