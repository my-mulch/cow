import MediaManager from '../media/manager'
import nd from 'multi-dim'
import utils from '../utils'

export default class Pod {
    constructor(props) {
        this.origin = props.origin
        this.mediaManager = new MediaManager(props.data)
    }

    render(scene) {
        this.mediaManager.render(scene)
    }

    static createFromSocketMessage(socketMessage) {
        const [rawArray, type] = utils.parseSocketMessage(socketMessage.data)

        return new Pod({
            data: nd.array(rawArray, type),
        })
    }
}
