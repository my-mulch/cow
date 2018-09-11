import MediaManager from './managers/media'
import LayoutManager from './managers/layout'
import PlaybackManager from './managers/playback'

export default class Pod {
    constructor(props) {
        this.source = MediaManager.getMediaSource(props.data)

        this.layoutManager = new LayoutManager(props.layout)
        this.playbackManager = new PlaybackManager(props.playback)
    }

    render(scene) {
        this.source.render(scene, this.layoutManager, this.playbackManager)
    }

    isWithin(click){
       return this.layoutManager.checkBounds(click)
    }
}
