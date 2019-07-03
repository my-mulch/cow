import ParmesanConfiguration from '../config'

export default class ParmesanKeyboard {
    constructor() {
        this.keys = new Set()
        this.bindings = ParmesanConfiguration.graphics.BINDINGS
    }
}
