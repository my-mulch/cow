export default class Application extends HTMLBodyElement {
    constructor(sources) {
        super()

        this.boxes = []
        this.sources = sources
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
