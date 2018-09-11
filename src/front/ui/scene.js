export default class Scene {

    constructor(props) {
        this.canvas = props.canvas || document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')

        this.canvas.addEventListener('mousedown', console.log)
        this.canvas.addEventListener('mouseup', console.log)
        this.canvas.addEventListener('mousemove', console.log)

        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight

        this.pods = props.pods || []
    }

    render() { }
}
