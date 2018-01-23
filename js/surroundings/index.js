const CANVAS = new Canvas()
const MOUSE = new Mouse(CANVAS.canvas)
const KEYBOARD = new KeyBoard(window)

window.setInterval(CANVAS.render.bind(CANVAS))

///////////////////////////////////////////////////////////////////

KEYBOARD.context.addEventListener("keydown", function (event) {
    KEYBOARD.pressedKeys.add(event.key)
}, this)

KEYBOARD.context.addEventListener("keyup", function (event) {
    KEYBOARD.pressedKeys.delete(event.key)
})

///////////////////////////////////////////////////////////////////

MOUSE.context.addEventListener('mousedown', function (mouseEvent) {
    MOUSE.downLocation = Point.createFrom(mouseEvent)
})

MOUSE.context.addEventListener('mouseup', function (mouseEvent) {
    if (!MOUSE.dragBox) {
        CANVAS.shapes.push(Point.createFrom(mouseEvent))
    }

    MOUSE.downLocation = null
    MOUSE.dragBox = null
})

MOUSE.context.addEventListener('mousemove', function (event) {
    if (MOUSE.downLocation) { // dragging the mouse

        MOUSE.dragBox = new Rectangle(MOUSE.downLocation, Point.createFrom(event))
        CANVAS.shapes.push(MOUSE.dragBox)
        
    }
})


