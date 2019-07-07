import bb from 'big-box'

export default {
    graphics: {
        BINDINGS: {
            'o': { name: 'zoom', args: [true] },
            'i': { name: 'zoom', args: [false] },

            'ArrowUp': { name: 'pan', args: [0] },
            'ArrowDown': { name: 'pan', args: [1] },
            'ArrowLeft': { name: 'pan', args: [2] },
            'ArrowRight': { name: 'pan', args: [3] },
        },

        source: {
            VERTEX:
                'attribute float a_PointSize;\n' +
                'attribute vec4 a_Position;\n' +
                'attribute vec4 a_Color;\n' +
                'uniform mat4 u_ViewMatrix;\n' +
                'uniform mat4 u_ProjMatrix;\n' +
                'varying vec4 v_Color;\n' +
                'void main() {\n' +
                '  gl_PointSize = a_PointSize;\n' +
                '  gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;\n' +
                '  v_Color = a_Color;\n' +
                '}\n',

            FRAGMENT:
                'precision mediump float;\n' +
                'varying vec4 v_Color;\n' +
                'void main() {\n' +
                '  gl_FragColor = v_Color;\n' +
                '}\n'
        },

        location: {
            TO: bb.array({ with: [[0], [0], [0]] }),
            UP: bb.array({ with: [[0], [1], [0]] }),
            FROM: bb.array({ with: [[2.2], [2.2], [2.2]] }),
        },

        projection: {
            VIEWING_ANGLE: 30,
            ASPECT_RATIO: 1,
            NEAR: 0.1,
            FAR: 100,
        },

        render: {
            directions: {
                UP: 0,
                DOWN: 1,
                LEFT: 2,
                RIGHT: 3
            },

            ZOOM_DELTA: 0.1,
            PAN_DELTA: Math.PI / 64,
            ACTIVE_VERTICES: 0,
        },
    }
}

