export default class Keyboard {
    constructor(props) {
        this.pressedKeys = new Set()
        this.scene = props.scene
        this.bindings = this.makeFunctionsTheBindings()

        window.addEventListener("keyup", (function () { this.pressedKeys = new Set() }).bind(this))
        window.addEventListener("keydown", (function (event) { this.pressedKeys.add(event.key) }).bind(this))
    }

    [''](pod) { /* NOOP */ }

    ['a'](pod) { pod.rotate(Math.PI / 16, 'x') }
    ['s'](pod) { pod.rotate(Math.PI / 16, 'y') }
    ['d'](pod) { pod.rotate(Math.PI / 16, 'z') }


    run(pod) {
        this[Array.from(this.pressedKeys)
            .sort()
            .join()](pod)
    }

    makeFunctionsTheBindings() {
        const functionAssociator = function (bindings, action) {
            return Object.assign(bindings, { action: this[action] })
        }

        return Object
            .getOwnPropertyNames(this.__proto__)
            .reduce(functionAssociator.bind(this), {})
    }
}
