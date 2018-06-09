
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

    runActionsFromKeys() {
        this.keyboard.pressedKeys.forEach(function (key) {
            this.socket.emit(this.keyboard.bindings[key], JSON.stringify(this.objects))
        }, this)
    }

    addActionListeners() {
        for (let key in this.keyboard.bindings)
            this.socket.on(this.keyboard.bindings[key], this.update.bind(this))
    }

    update(newSceneObjects) {
        this.objects = newSceneObjects.map(function (object) {
            // Convert each vertex coordinate array to a Point instance
            return new Solid(object.vertices.map(function (vertex) {
                return new Point(...vertex)
            }), object.edges)
        }, this)
    }

    add(object) {
        this.objects = this.objects.concat(object)
    }

    render() {
        this.runActionsFromKeys()
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render() })
        this.context.stroke()
    }
}
