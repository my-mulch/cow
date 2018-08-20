export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray.toGenerator()
        this.animateWait = 0

        this.executor = this.executor.bind(this)
    }

    executor(resolve) {
        setTimeout(resolve, this.animateWait, this.media.next().value)
    }

    step() {
        return new Promise(this.executor)
    }

    async render(scene, layout, point = null) {
        while (point = await this.step()) {
            const newPoint = layout.locate(point)

            scene.context.fillRect(
                newPoint.slice(0),
                newPoint.slice(1),
                1, 1
            )
        }
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}