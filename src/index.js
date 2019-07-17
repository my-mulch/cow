import GraphicsManager from './graphics'
import PeripheralsManager from './peripherals'

import config from './config'

class ParmesanApplication {
    constructor() {
        this.config = config

        this.keyup = this.keyup.bind(this)
        this.resize = this.resize.bind(this)
        this.keydown = this.keydown.bind(this)
        this.mouseup = this.mouseup.bind(this)
        this.mousedown = this.mousedown.bind(this)
        this.mousemove = this.mousemove.bind(this)

        this.peripherals = new PeripheralsManager({
            mouse: { location: { x: 0, y: 0 } },
            keyboard: { bindings: this.config.BINDINGS },
        })

        this.graphics = new GraphicsManager({
            engine: this.config.GRAPHICS_ENGINE_2D
        })

        window.addEventListener('resize', this.resize)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('mouseup', this.mouseup)
        window.addEventListener('mousedown', this.mousedown)
        window.addEventListener('mousemove', this.mousemove)
    }

    mouseup() { this.peripherals.mouse.mouseup() }
    mousedown(event) { this.peripherals.mouse.mousedown(event) }
    mousemove(event) { this.peripherals.mouse.mousemove(event) }

    keyup() { this.peripherals.keyboard.keyup() }
    keydown(event) {
        const binding = this.peripherals.keyboard.keydown(event)

        if (binding) {
            event.preventDefault()
            
            const command = this.graphics.engine[binding.name]
            command(...binding.args)
        }
    }

    resize() { this.graphics.resize() }
}

export default new ParmesanApplication()
