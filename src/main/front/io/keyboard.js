export default class Keyboard {
    constructor(args) {
        this.env = args.env
        this.pressedKeys = new Set()

        this.env.addEventListener("keyup", this.keyup.bind(this))
        this.env.addEventListener("keydown", this.keydown.bind(this))
    }

    keyup(event) { this.pressedKeys = new Set() }
    keydown(event) { this.pressedKeys.add(event.key) }
}
