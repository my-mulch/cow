import Mouse from './mouse'
import Keyboard from './keyboard'

export default class PeripheralsManager {
    constructor(options) {
        this.mouse = new Mouse(options.mouse)
        this.keyboard = new Keyboard(options.keyboard)
    }
}
