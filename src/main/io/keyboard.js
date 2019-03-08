export default class Keyboard {
    constructor(props) {
        this.scene = props.scene
        this.pressedKeys = new Set()

        window.addEventListener("keyup", this.keyu.bind(this))
        window.addEventListener("keydown", this.keyd.bind(this))
    }

    keyd(event) { this.pressedKeys.add(event.key) }
    keyu(event) { this.pressedKeys = new Set() }
}
