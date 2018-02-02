class Scene {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
        this.dragBox = null
        this.selectedShape = null

        this.shapes = []
        this.eventHandler = new EventHandler()

        this.keyBoard = new KeyBoard(window)
        this.mouse = new Mouse(window)

        this.render = this.render.bind(this)
    }

    render() {
        // this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()

        this.shapes.forEach(function (shape) { shape.render() })

        this.eventHandler.runActions(
            Array.from(this.keyBoard.pressedKeys),
            this.selectedShape
        )

        if (this.dragBox)
            this.dragBox.render()

        return this
    }

    mergeWithinDragRegion() {
        const selectedPoints = this.shapes.filter(function (shape) {
            return shape instanceof Point && shape.isWithin(this.dragBox)
        }, this)

        this.selectedShape = new Polygon(...selectedPoints)
        this.shapes.push(this.selectedShape)
    }
}
