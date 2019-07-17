import BufferManager from './managers/buffer'
import CameraManager from './managers/camera'
import ProgramManager from './managers/program'
import UniformManager from './managers/uniform'
import AttributeManager from './managers/attribute'

import config from '../../config'

export default class GraphicsEngine3D {
    constructor() {
        this.config = config

        this.pan = this.pan.bind(this)
        this.zoom = this.zoom.bind(this)
        this.stop = this.stop.bind(this)
        this.plot = this.plot.bind(this)
        this.start = this.start.bind(this)
        this.render = this.render.bind(this)
    }

    start() {
        this.hud = document.createElement('canvas')
        this.hud.style.zIndex = this.config.HUD_Z_INDEX
        this.hud.style.position = this.config.HUD_POSITION_STYLE

        this.canvas = document.createElement('canvas')
        this.canvas.style.zIndex = this.config.CANVAS_Z_INDEX
        this.canvas.style.position = this.config.CANVAS_POSITION_STYLE

        this.resize() /** Must resize before grabbing context */

        this.canvas.context = this.canvas.getContext(this.config.CONTEXT_WEB_GL)

        this.cameraManager = new CameraManager({})
        this.bufferManager = new BufferManager({ context: this.canvas.context })
        this.programManager = new ProgramManager({ context: this.canvas.context })
        this.uniformManager = new UniformManager({ context: this.canvas.context, program: this.programManager.program })
        this.attributeManager = new AttributeManager({ context: this.canvas.context, program: this.programManager.program })

        this.canvas.context.useProgram(this.programManager.program)

        this.hud.context = this.hud.getContext(this.config.CONTEXT_2D)
        this.hud.context.font = this.config.HUD_FONT
        this.hud.context.fillStyle = this.config.HUD_COLOR

        document.body.prepend(this.hud)
        document.body.prepend(this.canvas)

        return this
    }

    stop() {
        this.hud.context = null
        this.canvas.context = null

        this.cameraManager = null
        this.bufferManager = null
        this.programManager = null
        this.uniformManager = null
        this.attributeManager = null

        this.hud.remove()
        this.canvas.remove()
    }

    resize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.hud.width = window.innerWidth * 0.5
        this.hud.height = window.innerHeight * 0.2

        this.config.ASPECT_RATIO = this.canvas.width / this.canvas.height
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
        this.render()
    }

    zoom(zoomOut) {
        this.cameraManager.zoom(zoomOut)

        this.hud.context.clearRect(0, 0, this.hud.width, this.hud.height)
        this.hud.context.fillText(`loc | r: ${Math.round(this.config.FROM_VECTOR.data[0] * 255)} g: ${Math.round(this.config.FROM_VECTOR.data[1] * 255)}, b: ${Math.round(this.config.FROM_VECTOR.data[2] * 255)}`, 10, 70)

        this.render()
    }

}

