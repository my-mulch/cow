class Scene {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')
        this.points = []

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        window.setInterval(this.render.bind(this))

    }

    add(newPoints) {
        this.points = this.points.concat(newPoints)
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.points.forEach(point => point.render())
        this.context.stroke()
    }


}
