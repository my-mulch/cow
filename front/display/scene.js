

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

        this.addActionListeners()
        window.setInterval(this.render.bind(this))
    }

    runActions() {
        this.keyboard.pressedKeys.forEach(function (key) {
            this.socket.emit(this.keyboard.bindings[key], this.objects)
        }, this)
    }

    addActionListeners() {
        for (let key in this.keyboard.bindings)
            this.socket.on(this.keyboard.bindings[key], this.update)
    }

    update(newSceneObjects) {
        console.log(newSceneObjects)
    }

    render() {
        this.runActions()
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render() })
        this.context.stroke()
    }
}
