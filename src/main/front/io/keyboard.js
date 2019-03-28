export default class Keyboard {
    constructor(args) {
        this.env = args.env
        this.pressedKeys = new Set()

        this.env.window.addEventListener("keyup", this.keyup.bind(this))
        this.env.window.addEventListener("keydown", this.keydown.bind(this))
    }

    keyup(event) { this.pressedKeys = new Set() }
    keydown(event) { this.pressedKeys.add(event.key) }
}
