class Scene {

    constructor() {
        this.transformer = null

        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')
        this.points = []

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

    }

    add(shape) {
        this.points = this.points.concat(shape)
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()

        this.points.map(function (point) {
            return this.transformer.transform(point).render()
        })

        this.context.stroke()
    }


}
