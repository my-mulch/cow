import bb from 'big-box'

export default {
    media: {
        FRAME_RATE: 30,

        VIDEO_HEIGHT: 100,
        VIDEO_WIDTH: 100,

        IMAGE_HEIGHT: 400,
        IMAGE_WIDTH: 300,
    },

    graphics: {
        BINDINGS: {
            'o': { name: 'zoom', args: [true] },
            'i': { name: 'zoom', args: [false] },
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
            FROM: bb.array({ with: [[4], [2.75], [-2]] }),
        },

        projection: {
            VIEWING_ANGLE: 30,
            ASPECT_RATIO: 1,
            NEAR: 0.1,
            FAR: 100,
        },

        render: {
            ZOOM_DELTA: 0.1,
            ACTIVE_VERTICES: 0,
        },
    }
}

