
class Scene {

    constructor(props) {
        this.canvas = props.canvas
        this.context = this.canvas.getContext('2d')


        this.socket = props.socket || null
        this.keyboard = props.keyboard || null
        this.mouse = props.mouse || null
        this.objects = new Array()

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        window.setInterval(this.render.bind(this))
    }

    add(object) {
        this.objects = this.objects.concat(object)
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render() })
        this.context.stroke()
    }
}
