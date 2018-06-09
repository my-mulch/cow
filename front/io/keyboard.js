class Keyboard {
    constructor(context = window, bindings = {}) {
        this.context = context
        this.bindings = bindings
        this.pressedKeys = new Set()

        this.keyPressedAction = function (event) {
            event.preventDefault()
            this.pressedKeys.add(event.key)
        }

        this.keyReleasedAction = function (event) {
            event.preventDefault()
            this.pressedKeys.delete(event.key)
        }

        this.context.addEventListener("keydown", this.keyPressedAction.bind(this))
        this.context.addEventListener("keyup", this.keyReleasedAction.bind(this))

    }
}
