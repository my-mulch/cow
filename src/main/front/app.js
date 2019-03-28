
export default class App {
    constructor(args) {
        this.boxes = []
        this.dom = args.dom

        this.mouse = args.mouse
        this.filedrop = args.filedrop
        this.keyboard = args.keyboard
        this.camcorder = args.camcorder
        this.microphone = args.microphone

        this.camcorder.export =
            this.filedrop.export =
            this.microphone.export = this.push.bind(this)

        this.dom.livefeed.width = window.innerWidth
        this.dom.livefeed.height = window.innerHeight

        this.dom.media.hidden = true
        this.dom.curtain.addEventListener('click', this.hide.bind(this))
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        this.dom.livefeed.width = window.innerWidth
        this.dom.livefeed.height = window.innerHeight
    }

    hide() { this.dom.media.hidden = !this.dom.media.hidden }

    push(data) { this.boxes.push(data) }
}
