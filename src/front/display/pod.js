import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.downTime = props.downTime || 0
        this.height = props.height || 200
        this.width = props.width || 200
        this.depth = props.depth || 200
        this.origin = props.origin || nd.array([0, 0, 0, 1])
        this.data = props.data.toGenerator() || null
    }

    static createFrom(socketMessage) {
        return new Pod({
            data: nd.array(JSON.parse(socketMessage.data)),
        })
    }

    async getData() {
        // Sleep if animating
        await new Promise(_ => setTimeout(_, this.downTime))

        return this.data.next().value
    }
}
