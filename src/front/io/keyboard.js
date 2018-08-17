export default class Keyboard {
    constructor(opts) {
        this.context = opts.context || window
        this.bindings = opts.bindings || {}
        this.pressedKeys = new Set()

        this.context.addEventListener("keydown", this.addKey.bind(this))
        this.context.addEventListener("keyup", this.deleteKey.bind(this))
    }

    addKey(event) {
        if (event.key in this.bindings)
            event.preventDefault()

        this.pressedKeys.add(event.key)
    }

    deleteKey(event) {
        if (event.key in this.bindings)
            event.preventDefault()

        this.pressedKeys.delete(event.key)
    }
}
