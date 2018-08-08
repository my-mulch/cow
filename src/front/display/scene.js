import Pod from './pod'

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')

        this.pods = props.pods || []
        this.keyboard = props.keyboard || null
        this.mouse = props.mouse || null
        this.socket = props.socket || null
        this.renderer = props.renderer || null

        this.socket.listen('message', this.addPod.bind(this))

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        window.setInterval(this.render.bind(this))
    }

    addPod(socketMessage) {
        this.pods.push(Pod.createFrom(socketMessage))
    }

    render() {
        this.renderer.draw(this, this.pods)
    }
}
