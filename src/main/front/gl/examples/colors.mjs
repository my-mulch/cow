var V_SHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'varying vec4 v_Color;\n' + // varying variable
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  gl_PointSize = 10.0;\n' +
    '  v_Color = a_Color;\n' +  // Pass the data to the fragment shader
    '}\n';

// Fragment shader program
var F_SHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' + // Precision qualifier (See Chapter 6)
    '#endif\n' +
    'varying vec4 v_Color;\n' +    // Receive the data from the vertex shader
    'void main() {\n' +
    '  gl_FragColor = v_Color;\n' +
    '}\n';

app.graphics
    .compile({ vertex, fragment })
    .feed([{
        buffer: bb.array({
            with: [
                // Vertex coordinates and color
                [0.0, 0.5, 1.0, 0.0, 0.0],
                [-0.5, -0.5, 0.0, 1.0, 0.0],
                [0.5, -0.5, 0.0, 0.0, 1.0]
            ]
        }),
        type: 'ARRAY_BUFFER',
        usage: 'STATIC_DRAW',
        attributes: {
            a_Color: [':', '2:5'],
            a_Position: [':', '0:2'],
        }
    }])
    .draw({ mode: 'TRIANGLES' })
