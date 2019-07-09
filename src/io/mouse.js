
export default class Mouse {
    constructor(options) {
        this.isPressed = options.isPressed || false
        this.position = options.position || { x: 0, y: 0 }
    }

    mouseup() { this.isPressed = false }

    mousedown(event) {
        this.isPressed = true

        this.position.x = event.clientX
        this.position.y = event.clientY
    }

    mousemove(event) {
        this.position.x = event.clientX
        this.position.y = event.clientY
    }
}
