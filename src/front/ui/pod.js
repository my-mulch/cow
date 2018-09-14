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
        this.first = true
    }

    rotate(angle, axis) {
        const centerOfMass = this.layout.shape.vertices.mean(0)
        const tranlateToOrigin = Layout.translate(...centerOfMass.multiply(-1))
        const doRotation = Layout.rotate(angle, axis)
        const translateBack = Layout.translate(...centerOfMass)
        const fullRotation = nd.dot(tranlateToOrigin, doRotation, translateBack)

        const centerOfMassOfData = this.data.displayMedia.mean(0)
        const tranlateToOriginData = Layout.translate(...centerOfMassOfData.multiply(-1))
        const doRotationData = Layout.rotate(angle, axis)
        const translateBackData = Layout.translate(...centerOfMassOfData)
        const fullRotationData = nd.dot(tranlateToOriginData, doRotationData, translateBackData)

        this.data.displayMedia = this.data.displayMedia.dot(fullRotationData)
        this.layout.shape.vertices = this.layout.shape.vertices.dot(fullRotation)
    }

    translate(x, y, z, w) {
        this.layout.shape.vertices = this.layout.shape.vertices.dot(Layout.translate(x, y, z, w))
    }

    render(scene) {
        const actions = scene.keyboard.run(scene.selectedPod)
        if (actions.length || this.first) {
            scene.context.clearRect(0, 0, scene.width, scene.height)

            this.layout.shape.render(scene)
            this.data.render(scene, this.layout, this.playback, this.display)
            this.first = false
        }
    }

    subsumes(click) {
        return this.layoutManager.checkBounds(click)
    }
}
