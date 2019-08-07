import Graphics from './graphics'
import Mouse from './peripherals/mouse'
import Keyboard from './peripherals/keyboard'

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

        this.mouse = new Mouse({ location: { x: 0, y: 0 } })
        this.keyboard = new Keyboard({ bindings: this.config.BINDINGS })
        this.graphics = new Graphics({})

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
        const binding = this.keyboard.keydown(event)

        if (binding) {
            event.preventDefault()

            const command = this.graphics[binding.name]
            command(...binding.args)
        }
    }

    resize() { this.graphics.resize() }
}

export default new ParmesanApplication()
