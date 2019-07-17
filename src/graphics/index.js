import GraphicsEngine2D from './2d'
import GraphicsEngine3D from './3d'

import config from '../config'

export default class GraphicsManager {
    constructor(options) {
        this.config = config

        this.engines = {
            [this.config.GRAPHICS_ENGINE_2D]: new GraphicsEngine2D(),
            [this.config.GRAPHICS_ENGINE_3D]: new GraphicsEngine3D(),
        }

        this.engine = this.engines[options.engine].start()
    }

    resize() { this.engine.resize() }

    swap({ engine }) {
        this.engine.stop()
        this.engine = this.engines[engine]
        this.engine.start()
    }
}
