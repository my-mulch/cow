export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray.toGenerator()
        this.animateWait = 0
    }

    executor(resolve) {
        setTimeout(resolve, this.animateWait, this.media.next().value)
    }

    step() {
        return new Promise(this.executor.bind(this))
    }

    async render(scene, point = null) {
        while (point = await this.step())
            scene.context.fillRect(...point.slice(0, 2), 1, 1)
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}