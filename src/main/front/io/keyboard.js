export default class Keyboard {
    constructor(options) {
        this.target = options.target
        this.export = options.export
        this.pressedKeys = new Set()

        this.keyup = this.keyup.bind(this)
        this.keydown = this.keydown.bind(this)

        this.target.addEventListener("keyup", this.keyup)
        this.target.addEventListener("keydown", this.keydown)
    }

    keyup(event) {
        this.pressedKeys.clear()
        this.export({ event, context: this })
    }

    keydown(event) {
        this.pressedKeys.add(event.key)
        this.export({ event, context: this })
    }
}