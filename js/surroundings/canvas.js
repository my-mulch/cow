class Canvas {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')

        this.shapes = []
    }

    render() {
        this.shapes.forEach(function (shape) {
            shape.render()
        })
        
        return this
    }

}