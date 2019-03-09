export default class Scene {

    constructor(props) {
        this.canvas = props.canvas || document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
    }
}
