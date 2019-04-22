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
