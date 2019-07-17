import config from '../../config'

export default class GraphicsEngine2D {
    constructor() {
        this.config = config

        this.stop = this.stop.bind(this)
        this.start = this.start.bind(this)
        this.resize = this.resize.bind(this)
        this.render = this.render.bind(this)
    }

    start() {
        this.hud = document.createElement('canvas')
        this.canvas = document.createElement('canvas')

        this.resize() /** Must resize before grabbing context */

        this.canvas.context = this.canvas.getContext(this.config.CONTEXT_2D)
        this.canvas.context.fillStyle = this.config.CANVAS_FILL_COLOR        
        this.canvas.style.zIndex = this.config.CANVAS_Z_INDEX
        this.canvas.style.stroke = this.config.CANVAS_STROKE_COLOR
        this.canvas.style.position = this.config.CANVAS_POSITION_STYLE

        this.hud.context = this.hud.getContext(this.config.CONTEXT_2D)
        this.hud.context.font = this.config.HUD_FONT
        this.hud.context.fillStyle = this.config.HUD_COLOR
        this.hud.style.zIndex = this.config.HUD_Z_INDEX
        this.hud.style.position = this.config.HUD_POSITION_STYLE

        document.body.prepend(this.hud)
        document.body.prepend(this.canvas)

        return this
    }

    stop() {
        this.hud.context = null
        this.canvas.context = null

        this.hud.remove()
        this.canvas.remove()
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.hud.width = window.innerWidth * 0.5
        this.hud.height = window.innerHeight * 0.2

        this.config.ASPECT_RATIO = this.canvas.width / this.canvas.height
    }

    render() {
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.canvas.context.beginPath()


        this.canvas.context.fillRect(400, 400, 100, 100)

        
        // for (const [i, j] of [
        //     [0, 1], [0, 2], [0, 4], [1, 3],
        //     [1, 5], [2, 3], [2, 6], [3, 7],
        //     [4, 5], [4, 6], [5, 7], [6, 7]
        // ]) {
        //     this.canvas.context.moveTo(vertices[i * 4 + 0] + wa, vertices[i * 4 + 1] + ha)
        //     this.canvas.context.lineTo(vertices[j * 4 + 0] + wa, vertices[j * 4 + 1] + ha)
        // }

        this.canvas.context.stroke()
    }
}