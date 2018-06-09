

class Scene {

    constructor(canvas = document.getElementById('myCanvas'), keyboard = null, mouse = null, socket = null) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.socket = socket
        this.keyboard = keyboard
        this.mouse = mouse
        this.objects = []
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render() })
        this.context.stroke()
    }
}
