import Mouse from '../io/mouse'
import Keyboard from '../io/keyboard'

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas || document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')

        this.mouse = props.mouse || new Mouse(this)
        // this.keyboard = props.keyboard || new Keyboard(this)

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.pods = props.pods || []
    }

    render() {
        this.pods.length && this.pods.pop().render(this)
    }
}
