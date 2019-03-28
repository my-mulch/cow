import WebGlProgram from './program'

export default class WebGlEngine {
    constructor(args) {
        this.runtimes = args.runtimes

        this.runtimes.livefeed.clearColor(0.0, 0.0, 0.0, 1.0)
        this.runtimes.livefeed.clear(this.runtimes.livefeed.COLOR_BUFFER_BIT)
    }

    run(args) {
        return new WebGlProgram({
            vertex: args.source.vertex,
            fragment: args.source.fragment,
            runtime: this.runtimes.livefeed,
        })
            .compile()
            .link()
            .execute(args.meta)
    }
}