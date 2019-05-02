export default class Mouse {
    constructor(options) {
        this.isPressed = false
        this.target = options.target

        this.move = this.move.bind(this)
        this.clickUp = this.clickUp.bind(this)
        this.clickDown = this.clickDown.bind(this)

        this.target.addEventListener('mousedown', this.clickDown)
        this.target.addEventListener('mouseup', this.clickUp)
        this.target.addEventListener('mousemove', this.move)
    }

    move(event) { }
    clickUp(event) { this.isPressed = false }
    clickDown(event) { this.isPressed = true }
}
