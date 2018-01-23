class Canvas {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.shapes = []
        this.dragBox = null
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()

        this.shapes.forEach(function (shape) {
            shape.render()
        })

        this.dragBox && this.dragBox.render()

        return this
    }

    mergeWithinDragRegion() {
        const selectedPoints = this.shapes.filter(function (shape) {
            return shape instanceof Point && shape.isWithin(this.dragBox)
        }, this)

        this.shapes.push(new Polygon(...selectedPoints))
    }

}