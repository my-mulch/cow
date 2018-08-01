import Pod from './pod'

export default class Scene {

    constructor(props) {
        this.pods = []
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')

        this.keyboard = props.keyboard || null
        this.mouse = props.mouse || null
        this.socket = props.socket || null

        this.socket.getInstance().addEventListener('message', function (message) {
            this.pods.push(Pod.createFrom(message))
        }, this)

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
    }

    render() {
        
    }
}
