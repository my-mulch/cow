class KeyBoard {
    constructor(context) {
        this.context = context
        this.pressedKeys = new Set()

        this.context.addEventListener("keydown", function (event) {
            this.pressedKeys.add(event.key)
        }, this)

        this.context.addEventListener("keyup", function (event) {
            this.pressedKeys.delete(event.key)
        })
    }

    /**
     * @returns The keys currently pressed
     * @memberof KeyBoard
     */
    getPressedKeys() {
        return Array.from(this.pressedKeys)
    }
}
