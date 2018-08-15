import Keyboard from '../io/keyboard'
import Mouse from '../io/mouse'

export default class Scene {

    constructor(props) {
        this.canvas = props.canvas || document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')

        this.keyboard = props.keyboard || new Keyboard({ /* Key Bindings */ })
        this.mouse = props.mouse || new Mouse()

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
    }

    render(pods, pod = null) {
        while (pod = pods.pop())
            pod.render(this)
    }
}
