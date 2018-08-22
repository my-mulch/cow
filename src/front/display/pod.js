import MediaManager from './managers/media'
import LayoutManager from './managers/layout'
import DisplayManager from './managers/display'

import IoUtils from '../utils/io'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.isAlive = props.alive

        this.data = MediaManager.introspect(props.data)
        this.layoutManager = new LayoutManager(props.layout)
        this.displayManager = new DisplayManager(props.display)
    }

    render(scene) { /* Merge the Managers! */
        if (this.isAlive)
            this.displayManager.render(scene,
                this.layoutManager.format(this.data))
    }


    static createFromSocketMessage(socketMessage) {
        const [rawArray, type] = IoUtils.parseSocketMessage(socketMessage.data)

        return new Pod({
            data: nd.array(rawArray, type),
            alive: true,
            layout: {
                origin: nd.zeros(3),
                size: {
                    X: 200,
                    Y: 200,
                    Z: 200
                }
            },
            display: {
                animate: true,
                animationPause: 0,
                repeat: false
            }
        })
    }
}
