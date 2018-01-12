let mouseIsDown = false
let shape = 'rectangle'

window.addEventListener("mousedown", function (event) {
    mouseIsDown = true
})

window.addEventListener("mousemove", function (event) {
    if (mouseIsDown) {
        
    }
})

window.addEventListener("mouseup", function (event) {
    mouseIsDown = false
})
