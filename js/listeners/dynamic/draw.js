const canvas = document.getElementById('myCanvas')

let mouseIsDown = false
let shape = new Rectangle()


canvas.addEventListener("mousedown", function (event) {
    mouseIsDown = true
    shape.vertices.push(new Point(event.clientX, event.clientY))
})

canvas.addEventListener("mousemove", function (event) {
    if (mouseIsDown) {
        // always overwrite second point
        shape.vertices[1] = new Point(event.clientX, event.clientY)
        shape.render()
    }
})

canvas.addEventListener("mouseup", function (event) {
    mouseIsDown = false
})
