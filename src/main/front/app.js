import Mouse from './io/mouse'
import FileDrop from './io/drop'
import Keyboard from './io/keyboard'
import Camcorder from './io/camcorder'
import Microphone from './io/microphone'

export default class App {
    constructor(args) {
        this.boxes = []
        this.dom = args.dom

        this.mouse = new Mouse({ dom: this.dom })
        this.keyboard = new Keyboard({ dom: this.dom })

        this.microphone = new Microphone({
            dom: this.dom,
            media: { audio: true },
            handler: this.loadfeed.bind(this)
        })

        this.camcorder = new Camcorder({
            dom: this.dom,
            size: [20, 20],
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
