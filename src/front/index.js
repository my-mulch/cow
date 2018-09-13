import Scene from './ui/scene'
import Pod from './ui/pod'
import Socket from './io/socket'

import IoUtils from './utils/io'
import nd from 'multi-dim'

class App {
    constructor(components) {
        this.scene = components.scene

        this.socket = components.socket
        this.socket.listen('message', this.addPodFromSocketMessage.bind(this))

        window.setInterval(this.render.bind(this))
    }

    addPodFromSocketMessage(socketMessage) {
        const [rawArray, type] = IoUtils.parseSocketMessage(socketMessage.data)

        this.scene.pods.push(new Pod({
            data: nd.array(rawArray, type),
            layout: {
                origin: nd.array([300, 300, 0, 1]),
                size: nd.array([300, 300, 300, 1]),
            },
            playback: {
                animate: true,
                repeat: false,
                alive: true,
                animationPause: 0,
            },
            display: {
                border: true
            }
        }))
    }

    render() {
        this.scene.render()
    }
}

new App({
    socket: new Socket({ port: 3000, host: 'localhost' }),
    scene: new Scene({
        canvas: document.getElementById('canvas'),
        pods: [new Pod({
            data: nd.zeros(4),
            layout: {
                origin: nd.array([300, 300, 0, 1]),
                size: nd.array([300, 300, 300, 1]),
                shape: 'cuboid'
            },
            playback: {
                animate: true,
                repeat: false,
                alive: true,
                animationPause: 0,
            },
            display: {
                border: true
            }
        })]
    }),
})