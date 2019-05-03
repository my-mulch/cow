export default class Keyboard {
    constructor(options) {
        this.keys = new Set()
        this.bindings = options.bindings
    }

    keyup(event) { this.keys.clear() }

    keydown(event) {
        this.keys.add(event.key)

        const strokes = Array
            .from(this.keys)
            .sort()
            .join('|')

        const command = this.bindings[strokes]

        if (command) event.preventDefault()

        return command
    }
}
