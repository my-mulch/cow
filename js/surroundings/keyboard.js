class KeyBoard {
    constructor(context) {
        this.context = context
        this.pressedKeys = new Set()
    }

    /**
     * @returns The keys currently pressed
     * @memberof KeyBoard
     */
    getPressedKeys() {
        return Array.from(this.pressedKeys)
    }
}
