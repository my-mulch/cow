export default class Mouse {
    constructor(props) {
        this.scene = props.scene
        this.isPressed = false

        this.scene.canvas.addEventListener('mousedown', this.clickDown.bind(this))
        this.scene.canvas.addEventListener('mouseup', this.clickUp.bind(this))
        this.scene.canvas.addEventListener('mousemove', this.move.bind(this))
    }

    move(event) { }

    clickUp(event) {
        this.isPressed = false
        console.log(event)
    }

    clickDown(event) {
        console.log(event)
    }
}
