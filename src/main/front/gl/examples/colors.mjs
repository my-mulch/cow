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
                // Vertex coordinates and color(RGBA)
                [0.0, 0.5, -0.4, 0.4, 1.0, 0.4], // The back green one
                [-0.5, -0.5, -0.4, 0.4, 1.0, 0.4],
                [0.5, -0.5, -0.4, 1.0, 0.4, 0.4],

                [0.5, 0.4, -0.2, 1.0, 0.4, 0.4],// The middle yellow one
                [-0.5, 0.4, -0.2, 1.0, 1.0, 0.4],
                [0.0, -0.6, -0.2, 1.0, 1.0, 0.4],

                [0.0, 0.5, 0.0, 0.4, 0.4, 1.0],// The front blue one 
                [-0.5, -0.5, 0.0, 0.4, 0.4, 1.0],
                [0.5, -0.5, 0.0, 1.0, 0.4, 0.4]
            ]
        }),
        type: 'ARRAY_BUFFER',
        usage: 'STATIC_DRAW',
        attributes: {
            a_Color: [':', '3:6'],
            a_Position: [':', '0:3'],
        }
    }])
    .draw({
        mode: 'TRIANGLES',
        animate: function (context) {
            var u_ViewMatrix = context.runtime.getUniformLocation(context.program, 'u_ViewMatrix');
            // Set the matrix to be used for to set the camera view
            var viewMatrix = bb.zeros({ shape: [4, 4] })
            var transMatrix = bb.eye({ shape: [4, 4] })

            const to = bb.array({ with: [[0], [0], [0]] })
            const up = bb.array({ with: [[0], [1], [0]] })
            const from = bb.array({ with: [[0.2], [0.2], [0.2]] })

            const f = from.subtract({ with: to })
            const uf = f.divide({ with: f.norm() })

            const s = up.cross({ with: f })
            const us = s.divide({ with: s.norm() })

            const uu = uf.cross({ with: us })

            viewMatrix.slice({ with: [3, 3] }).set({ with: 1 })
            viewMatrix.slice({ with: [':3', 0] }).set({ with: us })
            viewMatrix.slice({ with: [':3', 1] }).set({ with: uu })
            viewMatrix.slice({ with: [':3', 2] }).set({ with: uf })

            transMatrix.slice({ with: [3, ':3'] }).set({ with: from.multiply({ with: -1 }) })

            context.runtime.uniformMatrix4fv(u_ViewMatrix, false, transMatrix.dot({ with: viewMatrix }).data)
        }
    })
