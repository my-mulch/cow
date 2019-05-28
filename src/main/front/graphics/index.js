import ParmesanGraphicsBufferManager from './managers/buffer'
import ParmesanGraphicsCameraManager from './managers/camera'
import ParmesanGraphicsProgramManager from './managers/program'
import ParmesanGraphicsUniformManager from './managers/uniform'
import ParmesanGraphicsAttributeManager from './managers/attribute'

import ParmesanGraphicsSource from './source/project'

export default class ParmesanGraphicsEngine {
    constructor(options) {
        this.target = options.target
        this.context = this.target.getContext('webgl')

        /** Create program */
        this.program = ParmesanGraphicsProgramManager.createProgram({
            context: this.context,
            vertex: ParmesanGraphicsSource.vertex,
            fragment: ParmesanGraphicsSource.fragment
        })

        /** Create attributes */
        this.attributes = ParmesanGraphicsAttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = ParmesanGraphicsUniformManager.createUniforms({
            context: this.context,
            program: this.program
        })

        this.context.useProgram(this.program)
    }

    plot() {
        var verticesColors = new Float32Array([
            0, 0, 0, 1, 0, 0
        ])
        const n = 1

        // Create a buffer object
        var vertexColorbuffer = this.context.createBuffer();

        // Write the vertex coordinates and color to the buffer object
        this.context.bindBuffer(this.context.ARRAY_BUFFER, vertexColorbuffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, verticesColors, this.context.STATIC_DRAW);

        var FSIZE = verticesColors.BYTES_PER_ELEMENT;
        // Assign the buffer object to a_Position and enable the assignment
        var a_Position = this.context.getAttribLocation(this.program, 'a_Position');

        this.context.vertexAttribPointer(a_Position, 3, this.context.FLOAT, false, FSIZE * 6, 0);
        this.context.enableVertexAttribArray(a_Position);

        // Assign the buffer object to a_Color and enable the assignment
        var a_Color = this.context.getAttribLocation(this.program, 'a_Color');

        this.context.vertexAttribPointer(a_Color, 3, this.context.FLOAT, false, FSIZE * 6, FSIZE * 3);
        this.context.enableVertexAttribArray(a_Color);

        // Unbind the buffer object
        this.context.bindBuffer(this.context.ARRAY_BUFFER, null);


        var u_ViewMatrix = this.context.getUniformLocation(this.program, 'u_ViewMatrix');

        // calculate the view matrix and projection matrix
        const viewMatrix = ParmesanGraphicsCameraManager.lookAt({
            to: [[0, 0, 0]],
            up: [[0, 1, 0]],
            from: [[0.2], [0], [0.1]],
        })

        // Pass the view and projection matrix to u_ViewMatrix, u_ProjMatrix
        this.context.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.data);

        // Clear <canvas>
        this.context.clear(this.context.COLOR_BUFFER_BIT);

        // Draw the triangles
        this.context.drawArrays(this.context.POINTS, 0, n);
    }

}
