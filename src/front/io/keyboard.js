
export default class Keyboard {
    constructor(bindings, context = window) {
        this.context = context
        this.bindings = bindings
        this.pressedKeys = new Set()

        this.context.addEventListener("keydown", function (event) {
            if (event.key in this.bindings)
                event.preventDefault()

            this.pressedKeys.add(event.key)
        })

        this.context.addEventListener("keyup", function (event) {
            if (event.key in this.bindings)
                event.preventDefault()

            this.pressedKeys.delete(event.key)
        })
    }
}
