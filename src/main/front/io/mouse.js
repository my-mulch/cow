export default class Mouse {
    constructor(props) {
        this.dom = props.dom
        this.isPressed = false

        this.dom.livefeed.addEventListener('mousedown', this.clickDown.bind(this))
        this.dom.livefeed.addEventListener('mouseup', this.clickUp.bind(this))
        this.dom.livefeed.addEventListener('mousemove', this.move.bind(this))
    }

    move(event) { }

    clickUp(event) {
        this.isPressed = false
        console.log(event)
    }

    clickDown(event) {
        this.isPressed = true
        console.log(event)
    }
}
