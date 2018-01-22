const CANVAS = document.getElementById('myCanvas')

///////////////////////////////////////////////////////////////////

const KEYBOARD = new KeyBoard(window)

KEYBOARD.context.addEventListener("keydown", function (event) {
    KEYBOARD.pressedKeys.add(event.key)
}, this)

KEYBOARD.context.addEventListener("keyup", function (event) {
    KEYBOARD.pressedKeys.delete(event.key)
})

///////////////////////////////////////////////////////////////////

const MOUSE = new Mouse(CANVAS)

MOUSE.context.addEventListener('mousedown', function () {
    MOUSE.mouseIsDown = true
})

MOUSE.context.addEventListener('mouseup', function () {
    MOUSE.mouseIsDown = false
})

MOUSE.context.addEventListener('mousemove', function () {
    if (MOUSE.mouseIsDown) { // dragging the mouse
        console.log('drag')
    }
})


