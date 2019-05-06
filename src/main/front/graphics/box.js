import bb from 'big-box'

export default class GraphicsBox {
    constructor(options) {
        this.buffer = null

        this.contents = options.contents
        this.size = options.contents.shape[0]

        this.mode = options.mode || 'POINTS'
        this.dtype = options.dtype || 'FLOAT'
        this.mtype = options.mtype || 'ARRAY_BUFFER'
        this.usage = options.usage || 'STATIC_DRAW'

        this.attributes = options.attributes || {
            a_Position: [':', '0:3'],
            a_Color: [':', '3:6'],
        }

        for (const [name, region] of Object.entries(this.attributes))
            this.attributes[name] = this.contents.slice({ with: region })
    }
}