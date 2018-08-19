import MediaManager from './managers/media'
import LayoutManager from './managers/layout'
import utils from '../utils'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.layoutManager = new LayoutManager(props.layout)
        this.mediaManager = new MediaManager(props.data)
    }

    render(scene) {
        this.mediaManager.source.render(scene, this.layoutManager)
    }

    static createFromSocketMessage(socketMessage) {
        const [rawArray, type] = utils.parseSocketMessage(socketMessage.data)

        return new Pod({
            data: nd.array(rawArray, type),
            layout: LayoutManager.DEFAULT_LAYOUT
        })
    }
}
