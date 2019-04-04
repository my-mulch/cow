import WebGLProgram from './program'

export default class WebGLFactory {
    constructor(args) {
        for (const key in args.target)
            this[key] = args.target[key]

        this.runtime = args.target
    }

    program() {
        return new WebGLProgram({ runtime: this.runtime })
    }
}
