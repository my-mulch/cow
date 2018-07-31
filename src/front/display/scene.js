import nd from 'multi-dim'

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')
        this.objects = []

        this.keyboard = props.keyboard || null
        this.mouse = props.mouse || null

        this.socket = props.socket || null
        this.socket.getInstance().addEventListener('message', this.add.bind(this))

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
    }

    add(message) {
        this.objects.push(nd.array(JSON.parse(message.data)))
    }

    render() { }
}
