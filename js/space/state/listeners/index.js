const gods = (function* god() {
    let index = 0.1;
    while (true)
        yield index *= 1.90;
})()

window.addEventListener("keydown", function (keyPress) {
    event.preventDefault()
    console.log(event.key + ": true")
    switch (event.key) {
        case "ArrowDown":
            rect.shift(new Point(0, gods.next().value))
            break;
        case "ArrowUp":
            rect.shift(new Point(0, -gods.next().value))
            break;
        case "ArrowLeft":

            rect.shift(new Point(-gods.next().value, 0))
            break;
        case "ArrowRight":

            rect.shift(new Point(gods.next().value, 0))
            break;
        case "s":
            rect.rotate(Math.PI / 32)
            break;
        case "a":
            rect.rotate(-Math.PI / 32)
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
}, true);


// let mouseIsDown = false
// let shape = new Rectangle().setContext(context)


// canvas.addEventListener("mousedown", function (event) {
    // mouseIsDown = true
    // shape.vertices.push(new Point(event.clientX, event.clientY))
// })

// canvas.addEventListener("mousemove", function (event) {
    // if (mouseIsDown) {
        // always overwrite second point
        // shape.vertices[1] = new Point(event.clientX, event.clientY)
        // shape.render()
    // }
// })

// canvas.addEventListener("mouseup", function (event) {
    // mouseIsDown = false
// })

