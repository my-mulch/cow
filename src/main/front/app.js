import Mouse from './io/mouse'
import FileDrop from './io/filedrop'
import Keyboard from './io/keyboard'
import Camcorder from './io/camcorder'
import Microphone from './io/microphone'

import GraphicsEngine from './gl/engine'

class ParmesanApplication {
    constructor() {
        this.data = []

        this.video = document.querySelector('video')
        this.audio = document.querySelector('audio')
        this.canvas = document.querySelector('canvas')

        this.resize = this.resize.bind(this)
        this.ondata = this.ondata.bind(this)
    }

    init() {
        this.mouse = new Mouse({})
        this.keyboard = new Keyboard({})

        this.filedrop = new FileDrop({
            target: this.canvas,
            export: this.ondata
        })

        this.microphone = new Microphone({
            target: this.audio,
            export: this.ondata,
            enabled: false
        })

        this.camcorder = new Camcorder({
            target: this.video,
            dimensions: [50, 50],
            export: this.ondata,
            enabled: false
        })

        this.graphics = new GraphicsEngine({
            target: this.canvas
        })

        window.addEventListener('resize', this.resize)

        return this
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.video.width = window.innerWidth
        this.video.height = window.innerHeight

        this.audio.style.width = `${window.innerWidth}px`

        return this
    }

    ondata(data) { this.data.push(data) }
}

export default new ParmesanApplication().resize().init()
