
export default class App {
    constructor(args) {
        this.boxes = []
        this.dom = args.dom
        this.sources = args.sources

        for (const [_, source] of Object.entries(this.sources))
            source.export = this.push.bind(this)

        this.resize()
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        this.dom.mainstage.width = window.innerWidth
        this.dom.mainstage.height = window.innerHeight

        this.dom.videofeed.width = window.innerWidth
        this.dom.videofeed.height = window.innerHeight

        this.dom.audiofeed.style.width = `${window.innerWidth}px`
    }

    push(data) { this.boxes.push(data) }
}
