import Pod from './pod'
import Illustrator from './illustrator';

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')

        this.pods = props.pods || []
        this.keyboard = props.keyboard || null
        this.mouse = props.mouse || null
        this.socket = props.socket || null

        this.socket.listen('message', this.addPod.bind(this))

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        window.setInterval(this.render.bind(this))
    }

    addPod(socketMessage) {
        this.pods.push(Pod.createFrom(socketMessage))
    }

    render() {
        this.pods.forEach(Illustrator.drawWithScene(this))
    }
}
