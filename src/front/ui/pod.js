import MediaManager from './managers/media'
import Layout from './managers/layout'
import Playback from './managers/playback'
import Display from './managers/display'

export default class Pod {
    constructor(props) {
        this.source = MediaManager.getMediaSource(props.data)

        this.layout = new LayoutManager(props.layout)
        this.playback = new PlaybackManager(props.playback)
        this.display = new DisplayManager(props.display)
    }

    render(scene) {
        if (this.display.hasBorder)
            this.layout.shape.render()
        
        scene.context.stroke()
        // this.source.render(scene, this.layoutManager, this.playbackManager, this.displayManager)
    }

    subsumes(click) {
        return this.layoutManager.checkBounds(click)
    }
}
