export default class Keyboard extends InputSource {
    constructor(args) {
        super(args)
        this.pressedKeys = new Set()

        this.target.addEventListener("keyup", this.keyup.bind(this))
        this.target.addEventListener("keydown", this.keydown.bind(this))
    }

    keyup(event) { this.pressedKeys.clear() }
    keydown(event) { this.pressedKeys.add(event.key) }
}
