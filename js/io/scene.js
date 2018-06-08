class Scene {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')
        this.objects = []

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        window.setInterval(this.render.bind(this))
    }

    add(object) {
        this.objects = this.objects.concat(object)
    }

    runActions(pressedKeys) {
        pressedKeys.forEach(function (actionStr) {
            const action = ACTIONS[actionStr]
            action(this.objects[0])
        }, this)
    }

    render() {
        this.runActions(keyboard.pressedKeys)

        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render() })
        this.context.stroke()
    }
}
