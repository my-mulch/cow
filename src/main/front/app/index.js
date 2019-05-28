import ParmesanMedia from '../media'
import ParmesanGraphics from '../graphics'

class ParmesanApplication {
    constructor() {
        this.resize = this.resize.bind(this)

        this.video = document.querySelector('video')
        this.audio = document.querySelector('audio')
        this.canvas = document.querySelector('canvas')

        window.addEventListener('resize', this.resize())

        this.media = new ParmesanMedia({
            filedrop: this.canvas,
            camcorder: this.video,
            microphone: this.audio,
        })

        // this.graphics = new ParmesanGraphics({
        //     target: this.canvas
        // })
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.video.width = window.innerWidth
        this.video.height = window.innerHeight

        this.audio.style.width = `${window.innerWidth}px`

        return this.resize
    }
}

export default new ParmesanApplication()
