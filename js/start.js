const rect = new Rectangle(
    { x: 100, y: 100 },
    { x: 600, y: 100 },
    { x: 600, y: 400 },
    { x: 100, y: 400 }
)

const canvas = document.getElementById('myCanvas')
const context = canvas.getContext("2d")

rect.setContext(context)
rect.render()

window.addEventListener("keydown", function (event) {
    event.preventDefault()

    switch (event.key) {
        case "ArrowDown":
            rect.shift(DIRECTION.SOUTH, 10)
            break;
        case "ArrowUp":
            rect.shift(DIRECTION.NORTH, 10)
            break;
        case "ArrowLeft":
            rect.shift(DIRECTION.WEST, 10)
            break;
        case "ArrowRight":
            rect.shift(DIRECTION.EAST, 10)
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
}, true);