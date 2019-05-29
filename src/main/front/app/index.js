import ParmesanMedia from '../media'
import ParmesanGraphics from '../graphics'

class ParmesanApplication {
    constructor() {
        this.canvas = document.querySelector('canvas')
                
        this.resize = this.resize.bind(this)
        window.addEventListener('resize', this.resize())

        this.media = new ParmesanMedia({
            filedrop: this.canvas,
            camcorder: this.video,
            microphone: this.audio,
        })

        this.graphics = new ParmesanGraphics({
            target: this.canvas
        })
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        return this.resize
    }
}

export default new ParmesanApplication()
