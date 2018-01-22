class Canvas {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')

        this.points = []
    }

    render() {
        this.context.beginPath()

        this.points.forEach(function (point) {
            this.context.moveTo(...point.coordinates)
            this.context.arc(...point.coordinates, 5, 0, 2 * Math.PI)
        }, this)

        this.context.stroke()

        return this
    }

}