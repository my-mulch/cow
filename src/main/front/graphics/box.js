import GraphicsAttribute from './attribute'

export default class GraphicsBox {
    constructor(options) {
        this.buffer = null

        this.contents = options.contents
        this.size = options.contents.shape[0]

        this.mode = options.mode || 'POINTS'
        this.dtype = options.dtype || 'FLOAT'
        this.mtype = options.mtype || 'ARRAY_BUFFER'
        this.usage = options.usage || 'STATIC_DRAW'

        this.attributes = Object
            .entries(options.attributes || {
                a_Position: [':', '0:3'],
                a_Color: [':', '3:6'],
            }).map(function ([name, region]) {
                return new GraphicsAttribute({ name, region })
            })

    }
}