import Mouse from './io/mouse'
import FileDrop from './io/filedrop'
import Keyboard from './io/keyboard'
import Camcorder from './io/camcorder'
import Microphone from './io/microphone'

import GraphicsEngine from './graphics/engine'

class ParmesanApplication {
    constructor() {
        this.data = []
        this.body = document.body

        this.video = document.querySelector('video')
        this.audio = document.querySelector('audio')
        this.canvas = document.querySelector('canvas')

        this.init = this.init.bind(this)
        this.resize = this.resize.bind(this)
        this.ondata = this.ondata.bind(this)
        this.keyup = this.keyup.bind(this)
        this.keydown = this.keydown.bind(this)
        this.mousemove = this.mousemove.bind(this)

        this.mouse = new Mouse({})

        this.keyboard = new Keyboard({
            bindings: {}
        })

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

        this.resize()
    }

    init() {
        this.graphics = new GraphicsEngine({
            data: this.data,
            target: this.canvas
        })

        window.addEventListener('resize', this.resize)
        window.addEventListener('keyup', this.keyup)
        window.addEventListener('keydown', this.keydown)
        window.addEventListener('mousemove', this.mousemove)

        return this
    }

    keyup(event) { this.keyboard.keyup(event) }

    keydown(event) {
        const command = this.keyboard.keydown(event)
        this.graphics.keydown(command)
    }

    mousemove(event) {
        const position = this.mouse.mousemove(event)
        this.graphics.mousemove(position.x, position.y)
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

export default new ParmesanApplication()