class KeyBoard {
    constructor() {
        this.context = null

        this.PRESSED_KEYS = new Set()
    }

    /**
     * Set the listener context for the keyboard
     * 
     * @param {Object} context 
     * @memberof KeyBoard
     */
    attachTo(context) {
        this.context = context
    }

    /**
     * Add handler to table of pressed keys by keyname
     * 
     * @param {String} keyname
     * @param {Function} handler The exaction to execute 
     * @memberof KeyBoard
     */
    addHandler(key, handler) {
        this.HANDLERS[key] = handler
    }

    /**
     * Retrieve handler functions from set of keys (PRESSED_KEYS)
     * 
     * @returns 
     * @memberof KeyBoard
     */
    getHandlersForPressedKeys() {
        return Array.from(this.PRESSED_KEYS).map(function (key) {
            return this.HANDLERS[key]
        })
    }

}
