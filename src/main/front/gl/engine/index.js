import GraphicsBufferManager from '../managers/buffer'
import GraphicsCameraManager from '../managers/camera'
import GraphicsProgramManager from '../managers/program'
import GraphicsUniformManager from '../managers/uniform'
import GraphicsAttributeManager from '../managers/attribute'

import GraphicsSource from '../common/source/inter'

export default class GraphicsEngine {
    constructor(options) {
        this.target = options.target
        this.context = this.target.getContext('webgl')

        /** Create program */
        this.program = GraphicsProgramManager.createProgram({
            context: this.context,
            vertex: GraphicsSource.vertex,
            fragment: GraphicsSource.fragment
        })

        /** Create attributes */
        this.attributes = GraphicsAttributeManager.createAttributes({
            context: this.context,
            program: this.program
        })

        /** Create uniforms */
        this.uniforms = GraphicsUniformManager.createUniforms({
            context: this.context,
            program: this.program
        })

        this.context.useProgram(this.program)
    }

    plot() {
        var verticesColors = new Float32Array([
            // Vertex coordinates and color
            0.0, 0.5, 1.0, 0.0, 0.0,
            -0.5, -0.5, 0.0, 1.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 1.0,
        ]);
        var n = 3; // The number of vertices

        // Create a buffer object
        var vertexColorBuffer = this.context.createBuffer();
        if (!vertexColorBuffer) {
            console.log('Failed to create the buffer object');
            return false;
        }

        // Write the vertex coordinates and colors to the buffer object
        this.context.bindBuffer(this.context.ARRAY_BUFFER, vertexColorBuffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, verticesColors, this.context.STATIC_DRAW);

        var FSIZE = verticesColors.BYTES_PER_ELEMENT;
        //Get the storage location of a_Position, assign and enable buffer
        var a_Position = this.context.getAttribLocation(this.program, 'a_Position');
        if (a_Position < 0) {
            console.log('Failed to get the storage location of a_Position');
            return -1;
        }
        this.context.vertexAttribPointer(a_Position, 2, this.context.FLOAT, false, FSIZE * 5, 0);
        this.context.enableVertexAttribArray(a_Position);  // Enable the assignment of the buffer object

        // Get the storage location of a_Position, assign buffer and enable
        var a_Color = this.context.getAttribLocation(this.program, 'a_Color');
        if (a_Color < 0) {
            console.log('Failed to get the storage location of a_Color');
            return -1;
        }
        this.context.vertexAttribPointer(a_Color, 3, this.context.FLOAT, false, FSIZE * 5, FSIZE * 2);
        this.context.enableVertexAttribArray(a_Color);  // Enable the assignment of the buffer object

        // Specify the color for clearing <canvas>
        this.context.clearColor(0.0, 0.0, 0.0, 1.0);

        // Clear <canvas>
        this.context.clear(this.context.COLOR_BUFFER_BIT);

        // Draw three points
        this.context.drawArrays(this.context.POINTS, 0, n);
    }

}



// plot({ vertices, colors }) {


//     const colorBuffer = GraphicsBufferManager.createBuffer({
//         context: this.context,
//         feed: colors,
//         name: 'a_Color',
//     })

//     const vertexBuffer = GraphicsBufferManager.createBuffer({
//         context: this.context,
//         feed: vertices,
//         name: 'a_Position'
//     })

//     const viewMatrix = GraphicsCameraManager.lookAt({
//         to: [[1, 1, 1]],
//         up: [[0, 1, 0]],
//         from: [[0, 0, 0]],
//     })

//     viewMatrix.name = 'u_ViewMatrix'


//     const colorBinder = this.attributes[colorBuffer.name]
//     const vertexBinder = this.attributes[vertexBuffer.name]
//     const viewMatrixBinder = this.uniforms[viewMatrix.name]

//     colorBinder(colorBuffer)
//     vertexBinder(vertexBuffer)
//     viewMatrixBinder(viewMatrix)

//     this.context.drawArrays(this.context.POINTS, 0, vertexBuffer.count)
// }