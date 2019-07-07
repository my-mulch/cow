import ParmesanGraphicsEngine from '../graphics'
import ParmesanConfiguration from '../config'

import ParmesanMouse from '../io/mouse'
import ParmesanKeyboard from '../io/keyboard'

class ParmesanApplication {
    constructor() {
        this.resize = this.resize.bind(this)
        
        this.keyup = this.keyup.bind(this)
        this.keydown = this.keydown.bind(this)
        
        this.mouseup = this.mouseup.bind(this)
        this.mousedown = this.mousedown.bind(this)
        this.mousemove = this.mousemove.bind(this)

        this.resize() /** Must resize before the graphics engine inits */

        this.mouse = new ParmesanMouse()
        this.keyboard = new ParmesanKeyboard()
        this.graphics = new ParmesanGraphicsEngine()

        window.addEventListener('resize', this.resize)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('mouseup', this.mouseup)
        window.addEventListener('mousedown', this.mousedown)
        window.addEventListener('mousemove', this.mousemove)
    }

    mouseup() { this.mouse.isPressed = false }

    mousedown(event) {
        this.mouse.isPressed = true

        this.mouse.position.x = event.clientX
        this.mouse.position.y = event.clientY
    }

    mousemove(event) {
        this.mouse.position.x = event.clientX
        this.mouse.position.y = event.clientY
    }

    keyup() { this.keyboard.keys.clear() }

    keydown(event) {
        this.keyboard.keys.add(event.key)

        const strokes = Array.from(this.keyboard.keys).sort().join('|')
        const binding = this.keyboard.bindings[strokes]

        if (binding) {
            event.preventDefault()

            const command = this.graphics[binding.name]
            command(...binding.args)
        }
    }

    resize() {
        const canvas = document.querySelector('canvas')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        ParmesanConfiguration
            .graphics
            .projection
            .ASPECT_RATIO = canvas.width / canvas.height
    }
}

export default new ParmesanApplication()
