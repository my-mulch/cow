import MediaManager from './managers/media'
import LayoutManager from './managers/layout'
import PlaybackManager from './managers/playback'

import IoUtils from '../utils/io'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.source = MediaManager.getMediaSource(props.data)

        this.layoutManager = new LayoutManager(props.layout)
        this.playbackManager = new PlaybackManager(props.playback)
    }

    render(scene) {
        this.source.render(scene, this.layoutManager, this.playbackManager)
    }


    static createFromSocketMessage(socketMessage) {
        const [rawArray, type] = IoUtils.parseSocketMessage(socketMessage.data)

        return new Pod({
            data: nd.array(rawArray, type),
            layout: {
                origin: {
                    X: 400,
                    Y: 400
                },
                size: {
                    X: 888,
                    Y: 888,
                    Z: 888
                }
            },
            playback: {
                animate: true,
                repeat: false,
                alive: true,
                animationPause: 0,
            }
        })
    }
}
