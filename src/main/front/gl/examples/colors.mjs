var vertex =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'uniform mat4 u_ViewMatrix;\n' +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '  gl_Position = u_ViewMatrix * a_Position;\n' +
    '  v_Color = a_Color;\n' +
    '}\n';

// Fragment shader program
var fragment =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '  gl_FragColor = v_Color;\n' +
    '}\n';

gl
    .program()
    .compile({ vertex, fragment })
    .link()
    .feed([{
        box: bb.array({
            with: [
                // Vertex coordinates and color
                [0.0, 0.5, -0.4, 0.4, 1.0, 0.4],
                [-0.5, -0.5, -0.4, 0.4, 1.0, 0.4],
                [0.5, -0.5, -0.4, 1.0, 0.4, 0.4],

                [0.5, 0.4, -0.2, 1.0, 0.4, 0.4],
                [-0.5, 0.4, -0.2, 1.0, 1.0, 0.4],
                [0.0, -0.6, -0.2, 1.0, 1.0, 0.4],

                [0.0, 0.5, 0.0, 0.4, 0.4, 1.0],
                [-0.5, -0.5, 0.0, 0.4, 0.4, 1.0],
                [0.5, -0.5, 0.0, 1.0, 0.4, 0.4],
            ]
        }),
        type: gl.ARRAY_BUFFER,
        usage: gl.STATIC_DRAW,
        attributes: {
            a_Color: [':', '3:6'],
            a_Position: [':', '0:3'],
        }
    }])
    .draw({ mode: gl.TRIANGLES })
