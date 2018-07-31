import nd from 'multi-dim'

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')
        this.objects = []

        this.keyboard = props.keyboard || null
        this.mouse = props.mouse || null

        this.socket = props.socket || null
        this.socket.addEventListener('message', this.add)

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        window.setInterval(this.render.bind(this))
    }

    add(object) {
        
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render(this) }, this)
        this.context.stroke()
    }
}
