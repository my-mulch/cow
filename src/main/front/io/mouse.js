export default class Mouse {
    constructor(args) {
        this.env = args.env
        this.isPressed = false

        this.env.livefeed.addEventListener('mousedown', this.clickDown.bind(this))
        this.env.livefeed.addEventListener('mouseup', this.clickUp.bind(this))
        this.env.livefeed.addEventListener('mousemove', this.move.bind(this))
    }

    move(event) { }
    clickUp(event) { this.isPressed = false }
    clickDown(event) { this.isPressed = true }
}
