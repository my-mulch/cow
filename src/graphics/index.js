import BufferManager from './managers/buffer'
import CameraManager from './managers/camera'
import ProgramManager from './managers/program'
import UniformManager from './managers/uniform'
import AttributeManager from './managers/attribute'

import config from '../config'

export default class GraphicsEngine {
    constructor(options) {
        this.hud = options.hud
        this.canvas = options.canvas

        this.config = config

        this.pan = this.pan.bind(this)
        this.zoom = this.zoom.bind(this)
        this.plot = this.plot.bind(this)
        this.render = this.render.bind(this)

        this.cameraManager = new CameraManager({})
        this.bufferManager = new BufferManager({ context: this.canvas.context })
        this.programManager = new ProgramManager({ context: this.canvas.context })
        this.uniformManager = new UniformManager({ context: this.canvas.context, program: this.programManager.program })
        this.attributeManager = new AttributeManager({ context: this.canvas.context, program: this.programManager.program })

        this.canvas.context.useProgram(this.programManager.program)
    }

    plot({ vertices, colors, sizes }) {
        this.attributeManager.attributes.a_Color(this.bufferManager.createBuffer({ array: colors }))
        this.attributeManager.attributes.a_PointSize(this.bufferManager.createBuffer({ array: sizes }))
        this.attributeManager.attributes.a_Position(this.bufferManager.createBuffer({ array: vertices }))

        this.config.ACTIVE_VERTICES = vertices.shape[0]

        this.render()
    }

    render() {
        const viewMatrix = this.cameraManager.lookAt()
        const projMatrix = this.cameraManager.project()

        this.uniformManager.uniforms.u_ViewMatrix(viewMatrix)
        this.uniformManager.uniforms.u_ProjMatrix(projMatrix)

        this.canvas.context.clear(this.canvas.context.COLOR_BUFFER_BIT)
        this.canvas.context.drawArrays(this.canvas.context.POINTS, 0, this.config.ACTIVE_VERTICES)
    }

    pan(direction) {
        this.cameraManager.pan(direction)

        this.hud.context.clearRect(0, 0, this.hud.width, this.hud.height)
        this.hud.context.fillText(`loc | r: ${Math.round(this.config.FROM_VECTOR.data[0] * 255)} g: ${Math.round(this.config.FROM_VECTOR.data[1] * 255)}, b: ${Math.round(this.config.FROM_VECTOR.data[2] * 255)}`, 10, 70)


        this.render()
    }
    
    zoom(zoomOut) {
        this.cameraManager.zoom(zoomOut)

        this.hud.context.clearRect(0, 0, this.hud.width, this.hud.height)
        this.hud.context.fillText(`loc | r: ${Math.round(this.config.FROM_VECTOR.data[0] * 255)} g: ${Math.round(this.config.FROM_VECTOR.data[1] * 255)}, b: ${Math.round(this.config.FROM_VECTOR.data[2] * 255)}`, 10, 70)

        this.render()
    }

}

