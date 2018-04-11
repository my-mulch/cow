class KeyBoard {
    constructor(context = window) {
        this.context = context
        this.pressedKeys = new Set()

        this.keyPressedAction = function (event) {
            this.pressedKeys.add(event.key)
            console.log(this.pressedKeys)
        }

        this.keyReleasedAction = function (event) {
            this.pressedKeys.delete(event.key)
            console.log(this.pressedKeys)
        }

        this.context.addEventListener("keydown", this.keyPressedAction.bind(this))
        this.context.addEventListener("keyup", this.keyReleasedAction.bind(this))

    }
}
