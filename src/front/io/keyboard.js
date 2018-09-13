export default class Keyboard {
    constructor(props) {
        this.pressedKeys = new Set()
        this.scene = props.scene

        window.addEventListener("keyup", (function () { this.pressedKeys = new Set() }).bind(this))
        window.addEventListener("keydown", (function (event) { this.pressedKeys.add(event.key) }).bind(this))
    }

    [''](pod) { /* NOOP */ }

    ['a'](pod) { pod.rotate(Math.PI / 16, 'x') }
    ['s'](pod) { pod.rotate(Math.PI / 16, 'y') }
    ['d'](pod) { pod.rotate(Math.PI / 16, 'z') }
    [' '](pod) { console.log('hi space!') }


    run(pod) {
        this[Array
            .from(this.pressedKeys)
            .sort()
            .join()](pod)
    }
}
