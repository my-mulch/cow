export default class Mouse {
    constructor() {
        this.isPressed = false
        this.position = { x: 0, y: 0 }
    }

    mouseup(event) { this.isPressed = false }
    mousedown(event) { this.isPressed = true }

    mousemove(event) {
        this.position.x = event.clientX
        this.position.y = event.clientY

        return this.position
    }
}
