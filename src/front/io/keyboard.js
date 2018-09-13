export default class Keyboard {
    constructor(props) {
        this.scene = props.scene
        this.pressedKeys = new Set()
        this.bindings = this.associateFunctionNamesWithThemselves()

        this.scene.canvas.addEventListener("keydown", this.addKey.bind(this))
        this.scene.canvas.addEventListener("keyup", this.deleteKey.bind(this))
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

    associateFunctionNamesWithThemselves() {
        const functionAssociator = function (bindings, action) {
            return Object.assign(bindings, { action: this[action] })
        }

        return Object
            .getOwnPropertyNames(this.__proto__)
            .reduce(functionAssociator.bind(this), {})
    }
}
