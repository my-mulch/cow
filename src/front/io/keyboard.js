export default class Keyboard {
    constructor(props) {
        this.scene = props.scene
        this.pressedKeys = new Set()

        this.run = this.run.bind(this)

        window.addEventListener("keyup", this.keyU.bind(this))
        window.addEventListener("keydown", this.keyD.bind(this))
    }

    ['a'](pod) { pod.rotate(Math.PI / 128, 'x') }
    ['s'](pod) { pod.rotate(Math.PI / 128, 'y') }
    ['d'](pod) { pod.rotate(Math.PI / 128, 'z') }

    ['ArrowLeft'](pod) { pod.translate(-10, 0, 0, 0) }
    ['ArrowRight'](pod) { pod.translate(10, 0, 0, 0) }
    ['ArrowUp'](pod) { pod.translate(0, -10, 0, 0) }
    ['ArrowDown'](pod) { pod.translate(0, 10, 0, 0) }

    keyD(event) { this.pressedKeys.add(event.key) }
    keyU(event) { this.pressedKeys = new Set() }

    run(pod) { return key => this[key](pod) }
}
