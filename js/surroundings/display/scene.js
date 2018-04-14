class Scene {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')
        this.points = []

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

    }

    add(shape) {
        this.points = this.points.concat(shape)
    }

    render(transformer) {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()

        this.points = this.points.map(function (point) {
            return transformer.transform(point).render()
        })

        this.context.stroke()
    }


}
