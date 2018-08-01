import Point from '../draw/point'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.height = props.height
        this.width = props.width
        this.depth = props.depth
        this.origin = props.origin

        this.data = props.data
        this.edges = props.edges
    }

    static createFrom(socketMessage) {
        return new Pod({
            height: 200,
            width: 200,
            depth: 200,
            origin: new Point(0, 0, 0, 1),
            data: nd.array(JSON.parse(socketMessage.data)),
            edges: null
        })
    }

}
