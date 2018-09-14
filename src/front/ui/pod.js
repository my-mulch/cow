import MediaManager from './managers/media'
import Layout from './managers/layout'
import Playback from './managers/playback'
import Display from './managers/display'

import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.data = MediaManager.getMediaSource(props.data)

        this.layout = new Layout(props.layout)
        this.playback = new Playback(props.playback)
        this.display = new Display(props.display)
    }

    rotate(angle, axis) {
        const centerOfMass = this.layout.shape.vertices.mean(0)

        const tranlateToOrigin = Layout.translate(...centerOfMass.multiply(-1))
        const doRotation = Layout.rotate(angle, axis)
        const translateBack = Layout.translate(...centerOfMass)

        const fullRotation = nd.dot(tranlateToOrigin, doRotation, translateBack)

        this.layout.shape.vertices = this.layout.shape.vertices.dot(fullRotation)
    }

    translate(x, y, z, w) {
        this.layout.shape.vertices = this.layout.shape.vertices.dot(Layout.translate(x, y, z, w))
    }

    render(scene) {
        if (this.display.hasBorder)
            this.layout.shape.render(scene)

        this.data.render(scene, this.layout, this.playback, this.display)
    }

    subsumes(click) {
        return this.layoutManager.checkBounds(click)
    }
}
