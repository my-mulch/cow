import Camera from './io/camera'
import FileDrop from './io/drop'
import Mouse from './io/mouse'
import Keyboard from './io/keyboard'
import Microphone from './io/microphone'

export default class App {
    constructor(args) {
        this.dom = args.dom
        this.boxes = new Array()

        this.mouse = new Mouse({ dom: this.dom })
        this.keyboard = new Keyboard({ dom: this.dom })

        this.microphone = new Microphone({
            dom: this.dom,
            media: { audio: true },
            handler: this.loadfeed.bind(this)
        })

        this.camera = new Camera({
            dom: this.dom,
            media: { video: true },
            handler: this.loadfeed.bind(this)
        })

        this.fileDrop = new FileDrop({
            dom: this.dom,
            handler: this.loadfeed.bind(this)
        })
    }

    loadfeed(feed) { this.boxes.push(feed) }
}
