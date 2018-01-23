const SCENE = new Scene(HANDLERS)
window.setInterval(SCENE.render)

///////////////////////////////////////////////////////////////////

SCENE.keyBoard.context.addEventListener("keydown", function (event) {
    SCENE.keyBoard.pressedKeys.add(event.key)
}, this)

SCENE.keyBoard.context.addEventListener("keyup", function (event) {
    SCENE.keyBoard.pressedKeys.delete(event.key)
})

///////////////////////////////////////////////////////////////////

SCENE.mouse.context.addEventListener('mousedown', function (mouseEvent) {
    SCENE.mouse.downLocation = Point.createFrom(mouseEvent)
})

SCENE.mouse.context.addEventListener('mouseup', function (mouseEvent) {
    if (!SCENE.dragBox)
        SCENE.shapes.push(Point.createFrom(mouseEvent))
    else
        SCENE.mergeWithinDragRegion()

    SCENE.mouse.downLocation = null
    SCENE.dragBox = null
})

SCENE.mouse.context.addEventListener('mousemove', function (event) {
    if (SCENE.mouse.downLocation) { // dragging the mouse
        SCENE.dragBox = new Rectangle(
            SCENE.mouse.downLocation,
            Point.createFrom(event)
        )
    }
})


