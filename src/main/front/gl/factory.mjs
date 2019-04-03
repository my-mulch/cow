import WebGLProgram from './program'

export default class WebGLFactory {
    constructor(args) {
        for (const key in args.target)
            this[key] = args.target[key]
    }

    program() {
        return new WebGLProgram({ runtime: this })
    }
}
