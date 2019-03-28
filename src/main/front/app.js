
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
    }

    push(data) { this.boxes.push(data) }
}
