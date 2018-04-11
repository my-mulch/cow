class KeyBoard {
    constructor(context) {
        this.context = context
        this.pressedKeys = new Set()

        this.keyPressedAction = (function (event) {
            this.pressedKeys.add(event.key)
        }).bind(this)

        this.keyReleasedAction = (function (event) {
            this.pressedKeys.delete(event.key)
        }).bind(this)

        this.context.addEventListener("keydown", this.keyPressedAction)
        this.context.addEventListener("keyup", this.keyReleasedAction)
    }
}
