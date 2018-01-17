
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
        case "s":
            rect.rotate(Math.PI / 4)
            break;
        case "a":
            rect.rotate(-Math.PI / 4)
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
}, true);
