
export default class GraphicsEngine {
    constructor(options) {
        this.target = options.target
        this.strokeStyle = options.strokeStyle

        this.runtime = this.target.getContext('2d')
    }

    draw() {
        this.runtime.strokeStyle = this.strokeStyle
    }
}
