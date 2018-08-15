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

    addPod(pod) {
        this.pods.push(pod)
    }

    render() {
        for (const pod of this.pods)
            pod.render(this)
    }
}
