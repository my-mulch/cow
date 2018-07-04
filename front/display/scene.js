
class Scene {

    constructor(keyboard = null, socket = null, mouse = null, canvas = document.getElementById('myCanvas')) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.socket = socket
        this.keyboard = keyboard
        this.mouse = mouse
        this.objects = []

        window.setInterval(this.render.bind(this))
    }

    add(object) {
        this.objects = this.objects.concat(object)
    }

    render() {
        const events = this.keyboard.getEvents()

        if (actions) {
            this.context.clearRect(0, 0, this.width, this.height)
            this.context.beginPath()

            for (const event of events)
                for (const object of this.objects)
                    object.apply(event).render()

            this.context.stroke()
        }
    }
}
