import Graphics from './graphics'

import config from './config'

import Mouse from './io/mouse'
import Keyboard from './io/keyboard'

class Application {
    constructor() {
        this.config = config

        this.hud = document.createElement('canvas')
        this.hud.context = this.hud.getContext('2d')
        this.hud.style.zIndex = 1
        this.hud.style.position = 'absolute'

        this.canvas = document.createElement('canvas')
        this.canvas.context = this.canvas.getContext('webgl')
        this.canvas.style.zIndex = 0
        this.canvas.style.position = 'absolute'

        document.body.prepend(this.hud)
        document.body.prepend(this.canvas)

        this.keyup = this.keyup.bind(this)
        this.resize = this.resize.bind(this)
        this.keydown = this.keydown.bind(this)
        this.mouseup = this.mouseup.bind(this)
        this.mousedown = this.mousedown.bind(this)
        this.mousemove = this.mousemove.bind(this)

        this.resize() /** Must resize before the graphics engine inits */

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
    keydown(event) { this.keyboard.keydown(event) }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.hud.width = window.innerWidth * 0.2
        this.hud.height = window.innerHeight * 0.2

        this.config.ASPECT_RATIO = this.canvas.width / this.canvas.height
    }
}

export default new Application()
