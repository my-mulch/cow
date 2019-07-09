
export default class Keyboard {
    constructor(options) {
        this.keys = options.keys || new Set()
        this.bindings = options.bindings
    }

    keyup() { this.keys.clear() }
    keydown(event) { this.keys.add(event.key) }
}
