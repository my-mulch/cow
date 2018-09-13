export default class Keyboard {
    constructor(props) {
        this.pressedKeys = new Set()
        this.scene = props.scene

        window.addEventListener("keyup", (function () { this.pressedKeys = new Set() }).bind(this))
        window.addEventListener("keydown", (function (event) { this.pressedKeys.add(event.key) }).bind(this))
    }

    [''](pod) { /* NOOP */ }
    [' '](pod) { console.log('hi space!') }

    ['a'](pod) { pod.rotate(Math.PI / 256, 'x') }
    ['s'](pod) { pod.rotate(Math.PI / 256, 'y') }
    ['d'](pod) { pod.rotate(Math.PI / 256, 'z') }

    ['ArrowLeft'](pod) { pod.translate(-10, 0, 0, 0) }
    ['ArrowRight'](pod) { pod.translate(10, 0, 0, 0) }
    ['ArrowUp'](pod) { pod.translate(0, -10, 0, 0) }
    ['ArrowDown'](pod) { pod.translate(0, 10, 0, 0) }



    run(pod) {
        this.scene.context.clearRect(0, 0, this.scene.width, this.scene.height)

        this[Array
            .from(this.pressedKeys)
            .sort()
            .join()](pod)

        pod.render(this.scene)
        this.scene.context.stroke()
    }
}
