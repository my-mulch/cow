export default class Keyboard {
    constructor(args) {
        this.target = args.target
        this.pressedKeys = new Set()

        this.target.addEventListener("keyup", this.keyup.bind(this))
        this.target.addEventListener("keydown", this.keydown.bind(this))
    }

    keyup(event) { this.pressedKeys = new Set() }
    keydown(event) { this.pressedKeys.add(event.key) }
}
