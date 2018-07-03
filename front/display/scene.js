
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
        const actions = this.keyboard.pressedKeys.getActions()

        if (actions) {
            this.context.clearRect(0, 0, this.width, this.height)
            this.context.beginPath()

            for (const action of actions)
                for (const object of this.objects)
                    object.apply(action).render()

            this.context.stroke()
        }
    }
}
