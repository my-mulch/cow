import WebGlProgram from './program'

export default class WebGlEngine {
    constructor(args) {
        this.target = args.target
        this.runtime = this.target.getContext('webgl')

        for (const key in this.runtime)
            if (key === key.toUpperCase())
                this[key] = this.runtime[key]

        this.clear()
    }

    clear() {
        this.runtime.clearColor(0.0, 0.0, 0.0, 1.0)
        this.runtime.clear(this.COLOR_BUFFER_BIT)
    }

    run(args) {
        return new WebGlProgram({
            source: args.source,
            runtime: this.runtime,
        })
            .compile()
            .link()
            .execute(args.meta)
    }
}
