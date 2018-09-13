import Mouse from '../io/mouse'
import Keyboard from '../io/keyboard'

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas || document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')

        this.mouse = props.mouse || new Mouse({ scene: this, isPressed: false })
        this.keyboard = props.keyboard || new Keyboard({})

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.pods = props.pods || []
        this.selectedPod = null
    }

    render() {
        this.pods.length && this.pods.pop().render(this)
    }
}
