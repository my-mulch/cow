import Graphics from './graphics'

import config from './config'

import Mouse from './io/mouse'
import Keyboard from './io/keyboard'

class Application {
    constructor() {
        this.config = config

        this.hud = document.createElement('canvas')
        this.hud.style.zIndex = this.config.HUD_Z_INDEX
        this.hud.style.position = this.config.HUD_POSITION_STYLE

        this.canvas = document.createElement('canvas')
        this.canvas.style.zIndex = this.config.CANVAS_Z_INDEX
        this.canvas.style.position = this.config.CANVAS_POSITION_STYLE

        this.resize() /** Must resize before grabbing context */

        this.canvas.context = this.canvas.getContext(this.config.CANVAS_CONTEXT)
        this.hud.context = this.hud.getContext(this.config.HUD_CONTEXT)

        this.hud.context.font = this.config.HUD_FONT
        this.hud.context.fillStyle = this.config.HUD_COLOR
        this.hud.context.fillText(`loc | r: ${Math.round(this.config.FROM_VECTOR.data[0] * 255)} g: ${Math.round(this.config.FROM_VECTOR.data[1] * 255)}, b: ${Math.round(this.config.FROM_VECTOR.data[2] * 255)}`, 10, 70)


        document.body.prepend(this.hud)
        document.body.prepend(this.canvas)

        this.keyup = this.keyup.bind(this)
        this.resize = this.resize.bind(this)
        this.keydown = this.keydown.bind(this)
        this.mouseup = this.mouseup.bind(this)
        this.mousedown = this.mousedown.bind(this)
        this.mousemove = this.mousemove.bind(this)

        this.mouse = new Mouse({ location: { x: 0, y: 0 } })
        this.keyboard = new Keyboard({ bindings: this.config.BINDINGS })
        this.graphics = new Graphics({ hud: this.hud, canvas: this.canvas })

        window.addEventListener('resize', this.resize)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('mouseup', this.mouseup)
        window.addEventListener('mousedown', this.mousedown)
        window.addEventListener('mousemove', this.mousemove)
    }

    mouseup() { this.mouse.mouseup() }
    mousedown(event) { this.mouse.mousedown(event) }
    mousemove(event) { this.mouse.mousemove(event) }

    keyup() { this.keyboard.keyup() }
    keydown(event) {
        this.keyboard.keydown(event)

        const strokes = Array.from(this.keyboard.keys).sort().join('|')
        const binding = this.keyboard.bindings[strokes]

        if (binding) {
            event.preventDefault()

            const command = this.graphics[binding.name]
            command(...binding.args)
        }
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.hud.width = window.innerWidth * 0.5
        this.hud.height = window.innerHeight * 0.2

        this.config.ASPECT_RATIO = this.canvas.width / this.canvas.height
    }
}

export default new Application()
