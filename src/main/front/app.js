import WebCam from './io/webcam'
import FileDrop from './io/drop'
import Mouse from './io/mouse'
import Keyboard from './io/keyboard'

export default class App {
    constructor(components) {
        this.scene = components.scene

        this.mouse = new Mouse({ scene: this.scene })
        this.keyboard = new Keyboard({ scene: this.scene })

        this.webcam = new WebCam({
            line: document.getElementById('video'),
            media: { video: true, audio: true },
            handler: this.onWebCam.bind(this)
        })

        this.fileDrop = new FileDrop({
            zone: this.scene.canvas,
            handler: this.onFileDrop.bind(this)
        })
    }

    onFileDrop(file) { console.log(file) }
    onWebCam(file) { console.log(file) }
}
