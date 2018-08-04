import Pod from './pod'

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

    async render() {
        while (this.pods.length) {
            let data
            const pod = this.pods.pop()
            while (data = await pod.step())
                this.context.fillRect(...data.slice(0, 2), 3, 3)
        }
    }
}
