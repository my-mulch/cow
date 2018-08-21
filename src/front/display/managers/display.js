export default class DisplayManager {
    constructor(display) {
        this.display = display

        this.getExecutorAndBind = this.getExecutorAndBind.bind(this)
    }

    getExecutorAndBind(data) {
        return function (resolve, reject) {
            setTimeout(resolve, this.display.animationPause, data)
        }
    }

    step(data) {
        return new Promise(this.getExecutorAndBind(data))
    }
}
