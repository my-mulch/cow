import Point from '../draw/point'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.height = props.height || 200
        this.width = props.width || 200
        this.depth = props.depth || 200
        this.origin = props.origin || nd.array([0, 0, 0, 1])

        this.data = props.data || null
        this.edges = props.edges || null
    }

    static createFrom(socketMessage) {
        return new Pod({
            data: nd.array(JSON.parse(socketMessage.data)),
        })
    }
}
