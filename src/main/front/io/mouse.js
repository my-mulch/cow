export default class Mouse {
    constructor(args) {
        this.isPressed = false
        this.target = args.target

        this.target.addEventListener('mousedown', this.clickDown.bind(this))
        this.target.addEventListener('mouseup', this.clickUp.bind(this))
        this.target.addEventListener('mousemove', this.move.bind(this))
    }

    move(event) { }
    clickUp(event) { this.isPressed = false }
    clickDown(event) { this.isPressed = true }
}
