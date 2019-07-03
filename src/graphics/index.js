import ParmesanBufferManager from './managers/buffer'
import ParmesanCameraManager from './managers/camera'
import ParmesanProgramManager from './managers/program'
import ParmesanUniformManager from './managers/uniform'
import ParmesanAttributeManager from './managers/attribute'

import ParmesanConfiguration from '../config'

export default class ParmesanGraphicsEngine {
    constructor() {
        this.target = document.querySelector('canvas')
        this.context = this.target.getContext('webgl')

        this.pan = this.pan.bind(this)
        this.draw = this.draw.bind(this)
        this.zoom = this.zoom.bind(this)
        this.plot = this.plot.bind(this)
        this.buffer = this.buffer.bind(this)

        /** Create program */
        this.program = ParmesanProgramManager.createProgram({
            context: this.context,
            vertex: ParmesanConfiguration.graphics.source.VERTEX,
            fragment: ParmesanConfiguration.graphics.source.FRAGMENT
        })

        /** Create attributes */
        this.attributes = ParmesanAttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = ParmesanUniformManager.createUniforms({
            context: this.context,
            program: this.program
        })

        this.context.useProgram(this.program)
    }

    draw() {
        this.context.clear(this.context.COLOR_BUFFER_BIT)

        this.context.drawArrays(
            this.context.POINTS,
            0,
            ParmesanConfiguration.graphics.render.ACTIVE_VERTICES)
    }

    buffer({ array }) { return ParmesanBufferManager.createBuffer({ context: this.context, array }) }

    pan(direction) {
        const { location, render, projection } = ParmesanConfiguration.graphics

        switch (direction) {
            case render.directions.UP:
                bb.array({
                    with: [
                        [Math.cos(render.PAN_DELTA), 0, Math.sin(render.PAN_DELTA)],
                        [0, 1, 0],
                        [-Math.sin(render.PAN_DELTA), 0, Math.cos(render.PAN_DELTA)]
                    ]
                }).dot({
                    with: location.TO.subtract({ with: location.FROM }),
                    result: location.FROM
                })

                break

            case render.directions.DOWN:
                bb.array({
                    with: [
                        [Math.cos(-render.PAN_DELTA), 0, Math.sin(-render.PAN_DELTA)],
                        [0, 1, 0],
                        [-Math.sin(-render.PAN_DELTA), 0, Math.cos(-render.PAN_DELTA)]
                    ]
                }).dot({
                    with: location.TO.subtract({ with: location.FROM }),
                    result: location.FROM
                })

                break

            case render.directions.LEFT:
                bb.array({
                    with: [
                        [1, 0, 0],
                        [0, Math.cos(render.PAN_DELTA), -Math.sin(render.PAN_DELTA)],
                        [0, Math.sin(render.PAN_DELTA), Math.cos(render.PAN_DELTA)]
                    ]
                }).dot({
                    with: location.TO.subtract({ with: location.FROM }),
                    result: location.FROM
                })

                break

            case render.directions.RIGHT:
                bb.array({
                    with: [
                        [1, 0, 0],
                        [0, Math.cos(-render.PAN_DELTA), -Math.sin(-render.PAN_DELTA)],
                        [0, Math.sin(-render.PAN_DELTA), Math.cos(-render.PAN_DELTA)]
                    ]
                }).dot({
                    with: location.TO.subtract({ with: location.FROM }),
                    result: location.FROM
                })

                break
        }

        const viewMatrix = ParmesanCameraManager.lookAt(location)
        const projMatrix = ParmesanCameraManager.project(projection)

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        this.draw()
    }

    zoom(zoomOut) {
        const { location, render, projection } = ParmesanConfiguration.graphics

        /** 
         * We select the instance method 'add' or 'subtract' from the FROM location point
         * depending whether we'd like to zoom in or out
         */

        const action = location.FROM[zoomOut ? 'add' : 'subtract'].bind(location.FROM)

        /** 
         * We invoke the instance method 'add' or 'subtract' of the FROM location point
         * twice. The inner call is to create a vector that points in the direction
         * of zoom but is scaled by a delta factor. Once we have this vector, we can
         * apply it to our original FROM point to complete the zoom
         */

        action({
            with: action({ with: location.TO }).multiply({ with: render.ZOOM_DELTA }),
            result: location.FROM
        })

        const viewMatrix = ParmesanCameraManager.lookAt(location)
        const projMatrix = ParmesanCameraManager.project(projection)

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        this.draw()
    }


    plot({ vertices, colors, sizes }) {
        const { location, projection } = ParmesanConfiguration.graphics

        const viewMatrix = ParmesanCameraManager.lookAt(location)
        const projMatrix = ParmesanCameraManager.project(projection)

        this.attributes.a_Color(this.buffer({ array: colors }))
        this.attributes.a_PointSize(this.buffer({ array: sizes }))
        this.attributes.a_Position(this.buffer({ array: vertices }))

        this.uniforms.u_ViewMatrix(viewMatrix)
        this.uniforms.u_ProjMatrix(projMatrix)

        ParmesanConfiguration.graphics.render.ACTIVE_VERTICES = vertices.shape[0]

        this.draw()
    }

}

