export default class Mouse {
    constructor(args) {
        this.env = args.env
        this.isPressed = false

        this.env.addEventListener('mousedown', this.clickDown.bind(this))
        this.env.addEventListener('mouseup', this.clickUp.bind(this))
        this.env.addEventListener('mousemove', this.move.bind(this))
    }

    move(event) { }
    clickUp(event) { this.isPressed = false }
    clickDown(event) { this.isPressed = true }
}
