import MediaManager from '../media/manager'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.origin = props.origin
        this.mediaManager = new MediaManager(props.data)
    }

    render(scene) {
        this.mediaManager.render(scene)
    }

    static createFromSocketMessage(socketMessage) {
        return new Pod({
            data: nd.array(JSON.parse(socketMessage.data)),
        })
    }
}
