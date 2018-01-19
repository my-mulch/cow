const godsclock = (function* god() {
    let index = 0.1;
    while (true)
        yield index *= 1.90;
})()



const rect = new Polygon(
    new Point(225, 225),
    new Point(350, 225),
    new Point(350, 300),
    new Point(225, 300))
    .setContext(CANVAS.getContext("2d"))
    .render()

const KEYMAP = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
    "F1": true,
    "F2": true,
    "F3": true,
    "F4": true,
    "F5": true,
    "F6": true,
    "F7": true,
    "F8": true,
    "F9": true,
    "F10": true,
    "`": true,
    "Shift": true,
    "#": true,
    "$": true,
    "%": true,
    "^": true,
    "&": true,
    "*": true,
    "_": true,
    "+": true,
    "=": true,
    "-": true,
    "~": true,
    "Tab": true,
    "q": true,
    "Q": true,
    "w": true,
    "W": true,
    "e": true,
    "E": true,
    "r": true,
    "R": true,
    "t": true,
    "T": true,
    "y": true,
    "Y": true,
    "u": true,
    "U": true,
    "[": true,
    "]": true,
    ":": true,
    "Enter": true,
    "/": true,
    ".": true,
    ";": true,
    ",": true,
    "l": true,
    "k": true,
    "m": true,
    "n": true,
    "j": true,
    "h": true,
    "b": true,
    "g": true,
    "v": true,
    "f": true,
    "d": true,
    "c": true,
    "x": true,
    "s": true,
    "a": true,
    "z": true,
    "CapsLock": true,
    "Control": true,
    "Alt": true,
    "Meta": true,
    " ": true,
    "ArrowLeft": true,

    "ArrowUp": true,
    "ArrowRight": true,
    "ArrowDown": true,
    "Backspace": true,
    "L": true,
    "J": true,
    "K": true,
    "(": true,
    "O": true,
    "}": true
}

window.addEventListener("keydown", function (keyPress) {
    KEYMAP[keyPress.key](godsclock.next().value, true)
}, true);

window.addEventListener("keyup", function (keyPress) {
    KEYMAP[keyPress.key].handle(godsclock.next().value, false)
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

