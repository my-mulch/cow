class Scene {

    constructor() {
        this.canvas = document.getElementById('myCanvas')
        this.context = this.canvas.getContext('2d')
        this.objects = []

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.update = this.update.bind(this)
        window.setInterval(this.render.bind(this))
    }

    add(newPoints) {
        this.objects = this.objects.concat(newPoints)
    }

    render() {
        this.context.clearRect(0, 0, this.width, this.height)
        this.context.beginPath()
        this.objects.forEach(function (object) { object.render() })
        this.context.stroke()
    }

    update(newCoordString) {
        this.objects = []
        const newCoords = _.chunk(newCoordString.match(/\d+.\d*/g), 4)
        const newPoints = newCoords.map(function (coord) {
            return new Point(...coord.map(Number))
        })



        const edges = [
            [0, 1],
            [0, 2],
            [0, 4],
            [1, 3],
            [1, 5],
            [2, 3],
            [2, 6],
            [3, 7],
            [4, 5],
            [4, 6],
            [5, 7],
            [6, 7]
        ]

        const cube = new Solid(newPoints, edges)
        this.objects.push(cube)
    }

    transform() {
        fetch("http://localhost:8080/", {
            body: JSON.stringify(this.objects), // must match 'Content-Type' header
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
        })
            .then(function (res) { return res.text() })
            .then(this.update)
    }

}
