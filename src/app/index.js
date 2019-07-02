import ParmesanMediaEngine from '../media'
import ParmesanGraphicsEngine from '../graphics'
import ParmesanConfiguration from '../config'

class ParmesanApplication {
    constructor() {
        this.keyup = this.keyup.bind(this)
        this.keydown = this.keydown.bind(this)
        this.resize = this.resize.bind(this)

        this.state = {
            graphics: {
                to: ParmesanConfiguration.graphics.to,
                up: ParmesanConfiguration.graphics.up,
                from: ParmesanConfiguration.graphics.from,

                far: ParmesanConfiguration.graphics.far,
                near: ParmesanConfiguration.graphics.near,
                angle: ParmesanConfiguration.graphics.angle,
                aspect: ParmesanConfiguration.graphics.aspect,
                zoomDelta: ParmesanConfiguration.graphics.zoomDelta,
            },

            mouse: { x: 0, y: 0, pressed: false },

            keyboard: {
                pressed: new Set(),
                bindings: ParmesanConfiguration.graphics.bindings
            }
        }

        this.resize() /** Must resize before the graphics engine inits */

        this.media = new ParmesanMediaEngine({})
        this.graphics = new ParmesanGraphicsEngine({ state: this.state })

        window.addEventListener('resize', this.resize)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keydown', this.keydown)
    }

    keyup() { this.state.keyboard.pressed.clear() }

    keydown(event) {
        this.state.keyboard.pressed.add(event.key)

        const strokes = Array.from(this.state.keyboard.pressed).sort().join('|')

        const binding = this.state.keyboard.bindings[strokes]

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

        this.state.graphics.aspect = canvas.width / canvas.height
    }
}

export default new ParmesanApplication()
